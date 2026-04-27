import { NextResponse } from 'next/server';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

/**
 * PUT: Salvar disponibilidade do dentista
 * Usa Service Role Key para acesso direto ao banco
 */
export async function PUT(request, { params }) {
    try {
        const supabaseAdmin = getSupabaseAdmin();
        const { id: dentistId } = await params;
        const body = await request.json();
        const { availability } = body;

        console.log(`💾 [Availability] Salvando para dentista ID: ${dentistId}`);
        console.log(`📊 [Availability] Slots recebidos:`, Object.keys(availability).length);

        // 1. Deletar disponibilidade antiga
        const { error: deleteError } = await supabaseAdmin
            .from('dentist_availability')
            .delete()
            .eq('dentist_id', dentistId);

        if (deleteError) {
            console.error('❌ Erro ao deletar:', deleteError);
            throw deleteError;
        }

        // 2. Inserir nova disponibilidade
        const records = [];
        Object.entries(availability).forEach(([key, value]) => {
            if (value?.available) {
                const [day_of_week, time_slot] = key.split('-');
                records.push({
                    dentist_id: parseInt(dentistId),
                    day_of_week: parseInt(day_of_week),
                    time_slot: time_slot,
                    is_available: true,
                    interval_minutes: 60
                });
            }
        });

        console.log(`📝 [Availability] Inserindo ${records.length} registros`);

        if (records.length > 0) {
            const { error: insertError } = await supabaseAdmin
                .from('dentist_availability')
                .insert(records);

            if (insertError) {
                console.error('❌ Erro ao inserir:', insertError);
                throw insertError;
            }
        }

        console.log('✅ [Availability] Salvo com sucesso!');

        return NextResponse.json({
            success: true,
            dentist_id: dentistId,
            slots_saved: records.length
        });
    } catch (error) {
        console.error('❌ [Availability] Erro:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

/**
 * GET: Buscar disponibilidade do dentista
 * Usa Service Role Key para acesso direto ao banco
 */
export async function GET(request, { params }) {
    try {
        const supabaseAdmin = getSupabaseAdmin();
        const { id: dentistId } = await params;

        console.log(`📅 [Availability] GET para dentista ID: ${dentistId}`);

        // Buscar do banco direto
        const { data, error } = await supabaseAdmin
            .from('dentist_availability')
            .select('*')
            .eq('dentist_id', dentistId);

        if (error) {
            console.error('❌ Erro ao buscar:', error);
            throw error;
        }

        // Converter para formato do frontend
        const availability = {};
        if (data && data.length > 0) {
            data.forEach(slot => {
                const key = `${slot.day_of_week}-${slot.time_slot}`;
                availability[key] = { available: slot.is_available };
            });
        }

        console.log('✅ [Availability] Carregado:', Object.keys(availability).length, 'slots');

        return NextResponse.json({
            dentist_id: dentistId,
            availability
        });
    } catch (error) {
        console.error('❌ [Availability] Erro:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
