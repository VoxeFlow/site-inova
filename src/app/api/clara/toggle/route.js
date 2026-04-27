import { NextResponse } from 'next/server';

// Global state - shared across all requests in the same process
global.claraEnabled = global.claraEnabled ?? true;

export async function GET() {
    return NextResponse.json({
        enabled: global.claraEnabled,
        status: global.claraEnabled ? 'active' : 'inactive'
    });
}

export async function POST(request) {
    try {
        const { enabled } = await request.json();
        global.claraEnabled = enabled;

        console.log(`🤖 [Clara] ${enabled ? 'ATIVADA ✅' : 'DESATIVADA ⚠️'} - Timestamp: ${new Date().toISOString()}`);

        return NextResponse.json({
            success: true,
            enabled: global.claraEnabled,
            message: enabled ? 'Clara ativada' : 'Clara desativada'
        });
    } catch (error) {
        console.error('Error toggling Clara:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
