import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export async function GET() {
    const { data, error } = await supabase
        .from('patients')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
}

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, phone, email, address } = body;

        // Validação básica
        if (!name || !phone) {
            return NextResponse.json({
                error: 'Nome e telefone são obrigatórios'
            }, { status: 400 });
        }

        // NOVO: Verificar se já existe paciente com este telefone
        const { data: existing, error: checkError } = await supabase
            .from('patients')
            .select('id, name, phone')
            .eq('phone', phone)
            .single();

        if (existing) {
            console.log(`⚠️ [Patients] Paciente já existe: ${existing.name} (${existing.phone})`);
            return NextResponse.json({
                error: 'Já existe um paciente cadastrado com este telefone',
                existing: existing
            }, { status: 409 }); // 409 Conflict
        }

        // Se não existe, criar novo paciente
        const { data, error } = await supabase
            .from('patients')
            .insert([{ name, phone, email, address }])
            .select()
            .single();

        if (error) {
            // Se erro for de constraint UNIQUE, retornar mensagem amigável
            if (error.code === '23505') {
                return NextResponse.json({
                    error: 'Já existe um paciente cadastrado com este telefone'
                }, { status: 409 });
            }
            throw error;
        }

        console.log(`✅ [Patients] Novo paciente criado: ${data.name} (${data.phone})`);
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error('Error creating patient:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(request) {
    try {
        const body = await request.json();
        const { id, name, phone, email, address } = body;

        if (!id) {
            return NextResponse.json({ error: 'ID é obrigatório' }, { status: 400 });
        }

        // NOVO: Se mudando telefone, verificar se novo telefone já existe
        if (phone) {
            const { data: existing } = await supabase
                .from('patients')
                .select('id')
                .eq('phone', phone)
                .neq('id', id)
                .single();

            if (existing) {
                return NextResponse.json({
                    error: 'Já existe outro paciente com este telefone'
                }, { status: 409 });
            }
        }

        const { data, error } = await supabase
            .from('patients')
            .update({ name, phone, email, address })
            .eq('id', id)
            .select()
            .single();

        if (error) {
            if (error.code === '23505') {
                return NextResponse.json({
                    error: 'Já existe outro paciente com este telefone'
                }, { status: 409 });
            }
            throw error;
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error updating patient:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({ error: 'ID é obrigatório' }, { status: 400 });
        }

        const { error } = await supabase
            .from('patients')
            .delete()
            .eq('id', id);

        if (error) throw error;

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting patient:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
