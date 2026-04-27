import { NextResponse } from 'next/server';

const EVOLUTION_API_URL = process.env.EVOLUTION_API_URL;
const EVOLUTION_API_KEY = process.env.EVOLUTION_API_KEY;

export async function GET() {
    try {
        // Tenta conectar na Evolution API
        const response = await fetch(`${EVOLUTION_API_URL}/instance/fetchInstances`, {
            method: 'GET',
            headers: {
                'apikey': EVOLUTION_API_KEY
            }
        });

        if (response.ok) {
            return NextResponse.json({ status: 'online', message: 'WhatsApp API Conectada' });
        } else {
            return NextResponse.json({ status: 'error', message: 'WhatsApp API com Erro (Non-200)' }, { status: 503 });
        }
    } catch (error) {
        return NextResponse.json({ status: 'offline', message: 'WhatsApp API Desligada' }, { status: 503 });
    }
}
