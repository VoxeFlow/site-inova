-- ============================================
-- FASE 1: ADICIONAR CAMPO OBSERVAÇÕES
-- ============================================

-- Adicionar campo de observações
ALTER TABLE appointments 
ADD COLUMN IF NOT EXISTS observations TEXT;

-- Comentário explicativo
COMMENT ON COLUMN appointments.observations IS 
'Observações do agendamento para o dentista visualizar';

-- Verificar
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'appointments' 
AND column_name = 'observations';
