-- Birthday Templates Table
CREATE TABLE IF NOT EXISTS birthday_templates (
    id SERIAL PRIMARY KEY,
    type VARCHAR(20) NOT NULL CHECK (type IN ('text', 'image', 'video')),
    content TEXT,
    media_url TEXT,
    send_time TIME DEFAULT '08:00',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);

-- Birthday Messages Sent Log
CREATE TABLE IF NOT EXISTS birthday_messages_sent (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id) ON DELETE CASCADE,
    template_id INTEGER REFERENCES birthday_templates(id),
    sent_at TIMESTAMP DEFAULT NOW(),
    status VARCHAR(20) CHECK (status IN ('sent', 'failed', 'pending')),
    error_message TEXT
);

-- Add birth_date to patients if not exists
ALTER TABLE patients ADD COLUMN IF NOT EXISTS birth_date DATE;

-- Create index for birthday queries
CREATE INDEX IF NOT EXISTS idx_patients_birth_date ON patients(birth_date);
CREATE INDEX IF NOT EXISTS idx_birthday_messages_sent_patient ON birthday_messages_sent(patient_id);

-- Insert default text template
INSERT INTO birthday_templates (type, content, is_active) VALUES (
    'text',
    '🎉 Parabéns {nome}!

A Clínica Inova deseja um feliz aniversário! 🎂

Que este novo ano de vida seja repleto de saúde, sorrisos e muitas conquistas! ✨

Estamos aqui para cuidar do seu sorriso sempre! 😊🦷

Equipe Clínica Inova
📞 (31) 3157-8001',
    true
) ON CONFLICT DO NOTHING;

-- Comments
COMMENT ON TABLE birthday_templates IS 'Templates de mensagens de aniversário (texto, imagem, vídeo)';
COMMENT ON TABLE birthday_messages_sent IS 'Log de mensagens de aniversário enviadas';
COMMENT ON COLUMN patients.birth_date IS 'Data de nascimento do paciente';
