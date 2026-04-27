import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// GET: Check if a specific slot is available
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date'); // Format: DD/MM/YYYY
    const time = searchParams.get('time'); // Format: HH:MM
    const dentist_id = searchParams.get('dentist_id'); // Optional

    if (!date || !time) {
        return NextResponse.json({ error: 'Date and time are required' }, { status: 400 });
    }

    try {
        // Query for appointments at this exact date/time
        let query = supabase
            .from('appointments')
            .select('*')
            .eq('date', date)
            .eq('time', time)
            .in('status', ['Pendente', 'Confirmado']); // Only active bookings block slots

        if (dentist_id) {
            query = query.eq('dentist_id', dentist_id);
        }

        const { data, error } = await query;

        if (error) throw error;

        const isAvailable = data.length === 0;

        return NextResponse.json({
            available: isAvailable,
            date,
            time,
            dentist_id,
            blocked_by: isAvailable ? null : data[0]
        });
    } catch (error) {
        console.error('Availability check error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
