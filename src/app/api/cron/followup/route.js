import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Cron job para enviar follow-ups
export async function GET() {
    try {
        console.log('🔄 [Follow-up] Iniciando verificação de conversas abandonadas...');

        // Buscar conversas sem resposta há mais de 24 horas
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

        // Buscar agendamentos pendentes (pré-agendamentos) antigos
        const { data: pendingAppointments, error } = await supabase
            .from('appointments')
            .select('*')
            .eq('status', 'Pendente')
            .lt('created_at', twentyFourHoursAgo)
            .is('follow_up_sent', null); // Ainda não enviou follow-up

        if (error) {
            console.error('❌ [Follow-up] Erro ao buscar agendamentos:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        console.log(`📊 [Follow-up] Encontrados ${pendingAppointments?.length || 0} agendamentos pendentes`);

        let sentCount = 0;

        // Enviar follow-up para cada um
        for (const appt of pendingAppointments || []) {
            try {
                // Enviar mensagem de follow-up
                const followUpMessage = `Olá ${appt.patient_name}! 👋

Notei que você demonstrou interesse em agendar uma consulta conosco, mas ainda não finalizamos. 

Gostaria de continuar com o agendamento? Temos horários disponíveis esta semana! 😊

Se preferir, pode ligar para (31) 2626-0038 que nossa equipe te atende.`;

                const { sendWhatsAppMessage } = await import('@/lib/whatsapp');
                await sendWhatsAppMessage(appt.phone, followUpMessage);

                // Marcar como follow-up enviado
                await supabase
                    .from('appointments')
                    .update({
                        follow_up_sent: new Date().toISOString(),
                        notes: (appt.notes || '') + `\n[${new Date().toLocaleString('pt-BR')}] Follow-up automático enviado`
                    })
                    .eq('id', appt.id);

                sentCount++;
                console.log(`✅ [Follow-up] Enviado para ${appt.patient_name} (${appt.phone})`);

                // Delay para não sobrecarregar
                await new Promise(resolve => setTimeout(resolve, 2000));

            } catch (error) {
                console.error(`❌ [Follow-up] Erro ao enviar para ${appt.phone}:`, error);
            }
        }

        return NextResponse.json({
            success: true,
            message: `Follow-ups enviados: ${sentCount}`,
            total_pending: pendingAppointments?.length || 0,
            sent: sentCount
        });

    } catch (error) {
        console.error('❌ [Follow-up] Erro geral:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
