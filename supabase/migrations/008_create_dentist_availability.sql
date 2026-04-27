-- ============================================
-- CRIAR TABELA DE DISPONIBILIDADE
-- ============================================

-- Criar tabela dentist_availability
CREATE TABLE IF NOT EXISTS dentist_availability (
    id BIGSERIAL PRIMARY KEY,
    dentist_id BIGINT NOT NULL REFERENCES dentists(id) ON DELETE CASCADE,
    day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    is_available BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(dentist_id, day_of_week, start_time, end_time)
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_dentist_availability_dentist 
ON dentist_availability(dentist_id);

CREATE INDEX IF NOT EXISTS idx_dentist_availability_day 
ON dentist_availability(day_of_week);

-- Comentários
COMMENT ON TABLE dentist_availability IS 'Horários de disponibilidade dos dentistas';
COMMENT ON COLUMN dentist_availability.day_of_week IS '0=Domingo, 1=Segunda, ..., 6=Sábado';
COMMENT ON COLUMN dentist_availability.start_time IS 'Horário de início do slot';
COMMENT ON COLUMN dentist_availability.end_time IS 'Horário de fim do slot';
COMMENT ON COLUMN dentist_availability.is_available IS 'Se o horário está disponível para agendamentos';

-- RLS (Row Level Security)
ALTER TABLE dentist_availability ENABLE ROW LEVEL SECURITY;

-- Política: Todos podem ler
CREATE POLICY "Disponibilidade é pública para leitura"
ON dentist_availability FOR SELECT
USING (true);

-- Política: Apenas autenticados podem inserir/atualizar
CREATE POLICY "Apenas autenticados podem modificar disponibilidade"
ON dentist_availability FOR ALL
USING (true)
WITH CHECK (true);
