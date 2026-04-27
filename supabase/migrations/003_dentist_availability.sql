-- Tabela de disponibilidade dos dentistas
CREATE TABLE IF NOT EXISTS dentist_availability (
  id SERIAL PRIMARY KEY,
  dentist_id INTEGER REFERENCES dentists(id) ON DELETE CASCADE,
  day_of_week INTEGER NOT NULL CHECK (day_of_week >= 0 AND day_of_week <= 6),
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_dentist_availability_dentist ON dentist_availability(dentist_id);
CREATE INDEX IF NOT EXISTS idx_dentist_availability_day ON dentist_availability(day_of_week);
CREATE INDEX IF NOT EXISTS idx_dentist_availability_active ON dentist_availability(is_available) WHERE is_available = true;

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_dentist_availability_updated_at BEFORE UPDATE
    ON dentist_availability FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Dados iniciais: Dr. Lucas Vilela (assumindo dentist_id = 1)
-- Segunda, Quarta, Sexta (8h-12h e 14h-18h)
INSERT INTO dentist_availability (dentist_id, day_of_week, start_time, end_time) VALUES
(1, 1, '08:00', '12:00'),  -- Segunda manhã
(1, 1, '14:00', '18:00'),  -- Segunda tarde
(1, 3, '08:00', '12:00'),  -- Quarta manhã
(1, 3, '14:00', '18:00'),  -- Quarta tarde
(1, 5, '08:00', '12:00'),  -- Sexta manhã
(1, 5, '14:00', '18:00')   -- Sexta tarde
ON CONFLICT DO NOTHING;

-- Dados iniciais: Dr. Arthur (assumindo dentist_id = 2)
-- Terça, Quinta (8h-12h e 14h-18h)
INSERT INTO dentist_availability (dentist_id, day_of_week, start_time, end_time) VALUES
(2, 2, '08:00', '12:00'),  -- Terça manhã
(2, 2, '14:00', '18:00'),  -- Terça tarde
(2, 4, '08:00', '12:00'),  -- Quinta manhã
(2, 4, '14:00', '18:00')   -- Quinta tarde
ON CONFLICT DO NOTHING;

-- Comentários
COMMENT ON TABLE dentist_availability IS 'Armazena os horários de disponibilidade dos dentistas por dia da semana';
COMMENT ON COLUMN dentist_availability.day_of_week IS '0=Domingo, 1=Segunda, 2=Terça, 3=Quarta, 4=Quinta, 5=Sexta, 6=Sábado';
COMMENT ON COLUMN dentist_availability.is_available IS 'Flag para ativar/desativar disponibilidade sem deletar o registro';
