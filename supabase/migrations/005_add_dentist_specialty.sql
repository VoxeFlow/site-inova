-- ============================================
-- FASE 3: MELHORIAS NOS DENTISTAS
-- ============================================

-- Adicionar campo especialidade
ALTER TABLE dentists ADD COLUMN IF NOT EXISTS specialty VARCHAR(100);

-- Atualizar dentistas existentes com especialidades
UPDATE dentists SET specialty = 'Implantodontia' WHERE name LIKE '%Lucas%';
UPDATE dentists SET specialty = 'Implantodontia' WHERE name LIKE '%Arthur%';

-- Comentário
COMMENT ON COLUMN dentists.specialty IS 'Especialidade do dentista (ex: Implantodontia, Ortodontia, etc)';

-- Verificação
SELECT id, name, specialty FROM dentists;
