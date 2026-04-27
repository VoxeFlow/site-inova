import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

/**
 * API para verificar horários disponíveis
 * Usa Service Role Key para acesso direto ao banco
 */
export async function POST(request) {
    try {
        const supabaseAdmin = getSupabaseAdmin();
        const body = await request.json();
        const { dentist_id, date } = body;

        console.log('🔍 [Availability Check] Iniciando verificação...');
        console.log('📋 Dentista:', dentist_id);
        console.log('📅 Data:', date);

        // Validar parâmetros
        if (!dentist_id || !date) {
            return NextResponse.json(
                { error: 'dentist_id e date são obrigatórios' },
                { status: 400 }
            );
        }

        // 1. Buscar informações do dentista
        const { data: dentist, error: dentistError } = await supabaseAdmin
            .from('dentists')
            .select('id, name, specialty')
            .eq('id', dentist_id)
            .single();

        if (dentistError || !dentist) {
            console.error('❌ Dentista não encontrado:', dentistError);
            return NextResponse.json(
                { error: 'Dentista não encontrado' },
                { status: 404 }
            );
        }

        // 2. Determinar dia da semana (0=Domingo, 6=Sábado)
        const dateObj = new Date(date + 'T00:00:00');
        const dayOfWeek = dateObj.getDay();

        console.log('📆 Dia da semana:', dayOfWeek, ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'][dayOfWeek]);

        // 3. Buscar disponibilidade configurada do dentista
        const { data: availabilityData, error: availError } = await supabaseAdmin
            .from('dentist_availability')
            .select('*')
            .eq('dentist_id', dentist_id)
            .eq('day_of_week', dayOfWeek);

        if (availError) {
            console.error('❌ Erro ao buscar disponibilidade:', availError);
        }

        console.log('📋 Disponibilidade encontrada:', availabilityData?.length || 0, 'slots');

        // Criar Set de horários disponíveis
        const availableTimes = new Set();
        if (availabilityData && availabilityData.length > 0) {
            availabilityData.forEach(slot => {
                if (slot.is_available) {
                    availableTimes.add(slot.time_slot);
                }
            });
        }

        console.log('✅ Horários configurados:', Array.from(availableTimes));

        // 4. Buscar agendamentos existentes nesta data
        const { data: existingAppointments, error: appointmentsError } = await supabaseAdmin
            .from('appointments')
            .select('time, status')
            .eq('dentist_id', dentist_id)
            .eq('date', date)
            .in('status', ['Agendado', 'Confirmado', 'Aguardando']);

        if (appointmentsError) {
            console.error('❌ Erro ao buscar agendamentos:', appointmentsError);
        }

        const bookedTimes = new Set(
            (existingAppointments || []).map(a => a.time)
        );

        console.log('🔒 Horários ocupados:', Array.from(bookedTimes));

        // 5. Gerar todos os slots possíveis (08:00 - 18:00, intervalos de 30min)
        const slots = [];
        const startHour = 8;
        const endHour = 18;

        for (let hour = startHour; hour < endHour; hour++) {
            for (let minute of [0, 30]) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

                // Verificar se está na disponibilidade configurada
                const isConfigured = availableTimes.has(time);

                // Verificar se já está ocupado
                const isBooked = bookedTimes.has(time);

                // Slot disponível se: está configurado E não está ocupado
                const available = isConfigured && !isBooked;

                let reason = null;
                if (!isConfigured) {
                    reason = 'Dentista não atende neste horário';
                } else if (isBooked) {
                    reason = 'Horário já ocupado';
                }

                slots.push({
                    time,
                    duration: 30,
                    available,
                    reason
                });
            }
        }

        // 6. Filtrar apenas disponíveis
        const availableSlots = slots.filter(s => s.available);

        console.log(`✅ Resultado: ${availableSlots.length} disponíveis de ${slots.length} total`);

        return NextResponse.json({
            date,
            dentist_id: dentist.id,
            dentist_name: dentist.name,
            dentist_specialty: dentist.specialty,
            day_of_week: dayOfWeek,
            total_slots: slots.length,
            available_count: availableSlots.length,
            available_slots: availableSlots,
            all_slots: slots
        });

    } catch (error) {
        console.error('❌ [Availability Check] Erro:', error);
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }
}
