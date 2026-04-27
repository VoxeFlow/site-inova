import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { WA_TEMPLATES } from '@/utils/whatsapp_templates';

// Initialize Supabase
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// Evolution API Configuration
const EVOLUTION_API_URL = 'http://localhost:8080';
const EVOLUTION_API_KEY = 'E33405C7C332-4753-9004-98485297B343';

async function sendWhatsApp(number, text) {
    try {
        const formattedNumber = number.replace(/\D/g, '');
        const finalNumber = formattedNumber.startsWith('55') ? formattedNumber : `55${formattedNumber}`;

        await fetch(`${EVOLUTION_API_URL}/message/sendText/inova`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'apikey': EVOLUTION_API_KEY },
            body: JSON.stringify({
                number: finalNumber,
                options: { delay: 1200, presence: "composing", linkPreview: false },
                textMessage: { text: text }
            })
        });
        return true;
    } catch (error) {
        console.error('⚠️ WhatsApp Error:', error);
        return false;
    }
}

// Helper to add hours to a date
const addHours = (date, hours) => new Date(date.getTime() + hours * 60 * 60 * 1000);

export async function GET(request) {
    // Basic security check (you should add a CRON_SECRET in headers for production)
    // const authHeader = request.headers.get('authorization');
    // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) { return new Response('Unauthorized', { status: 401 }); }

    const now = new Date();
    // Use Brazil Time (UTC-3) approximation if server is UTC. 
    // Ideally, deal with ISO strings. Here assuming server time is synced or UTC.

    // We look for appointments in windows
    const start24h = addHours(now, 23.5).toISOString(); // 23.5h from now
    const end24h = addHours(now, 24.5).toISOString();   // 24.5h from now

    const start2h = addHours(now, 1.5).toISOString();   // 1.5h from now
    const end2h = addHours(now, 2.5).toISOString();     // 2.5h from now

    try {
        // --- 1. PROCESS 24H REMINDERS ---
        const { data: reminders24h } = await supabase
            .from('appointments')
            .select('*')
            // Filter: Status is 'Confirmado' or 'Pendente' (we want to remind them even if pending confirmation)
            .in('status', ['Confirmado', 'Pendente'])
            // Logic: Is "sent_24h" column exists? Ideally yes. 
            // If we can't alter DB, we rely on time window precision (cron running hourly).
            // Filter by date+time combined column (assuming you store full ISO or combine date+time)
            // Since we store 'date' (YYYY-MM-DD) and 'time' (HH:mm), we need to fetch range and filter in JS
            .gte('date', start24h.split('T')[0]);

        let count24h = 0;

        // Filter in memory because of split date/time columns
        for (const appt of (reminders24h || [])) {
            const apptDate = new Date(`${appt.date}T${appt.time}:00`);
            // Check if it's within the 24h window (approx)
            const diffHours = (apptDate - now) / (1000 * 60 * 60);

            if (diffHours >= 23 && diffHours <= 25) {
                // It's tomorrow around this time!
                const msg = WA_TEMPLATES.CONFIRMATION_24H(
                    appt.patient_name.split(' ')[0],
                    appt.date,
                    appt.time,
                    appt.dentist_name || 'Inova'
                );
                await sendWhatsApp(appt.phone, msg);
                count24h++;
                console.log(`[CRON] Sent 24h reminder to ${appt.patient_name}`);
            }
        }

        // --- 2. PROCESS 2H REMINDERS ---
        const { data: reminders2h } = await supabase
            .from('appointments')
            .select('*')
            .eq('status', 'Confirmado') // Only for confirmed
            .gte('date', start2h.split('T')[0]);

        let count2h = 0;

        for (const appt of (reminders2h || [])) {
            const apptDate = new Date(`${appt.date}T${appt.time}:00`);
            const diffHours = (apptDate - now) / (1000 * 60 * 60);

            if (diffHours >= 1.5 && diffHours <= 2.5) {
                // It's in ~2 hours!
                const msg = WA_TEMPLATES.REMINDER_2H(
                    appt.patient_name.split(' ')[0],
                    appt.time
                );
                await sendWhatsApp(appt.phone, msg);
                count2h++;
                console.log(`[CRON] Sent 2h reminder to ${appt.patient_name}`);
            }
        }

        return NextResponse.json({
            success: true,
            processed: {
                reminder_24h: count24h,
                reminder_2h: count2h
            }
        });

    } catch (error) {
        console.error('CRON Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
