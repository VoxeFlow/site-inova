import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
    try {
        const { data, error } = await supabase
            .from('dentists')
            .select('*')
            .order('name');

        if (error) throw error;
        return NextResponse.json(data || []);
    } catch (error) {
        console.error('GET dentists error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const body = await req.json();
        const avatar = body.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

        const { data, error } = await supabase
            .from('dentists')
            .insert([{ ...body, avatar }])
            .select()
            .single();

        if (error) throw error;
        return NextResponse.json(data, { status: 201 });
    } catch (error) {
        console.error('POST dentist error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const { id, ...updates } = await req.json();

        const { data, error } = await supabase
            .from('dentists')
            .update(updates)
            .eq('id', id)
            .select()
            .single();

        if (error) throw error;
        return NextResponse.json(data);
    } catch (error) {
        console.error('PUT dentist error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function DELETE(req) {
    try {
        const { searchParams } = new URL(req.url);
        const id = parseInt(searchParams.get('id'));

        const { error } = await supabase
            .from('dentists')
            .delete()
            .eq('id', id);

        if (error) throw error;
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('DELETE dentist error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
