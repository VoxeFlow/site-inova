import { createClient } from '@supabase/supabase-js';

// Criar cliente Supabase com configuração para forçar refresh do schema
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false
    },
    db: {
        schema: 'public'
    },
    global: {
        headers: {
            'Prefer': 'return=representation'
        }
    }
});

// Log para debug
console.log('🔗 Supabase client initialized');
console.log('📍 URL:', supabaseUrl);
