-- ============================================
-- FASE 1: LIMPEZA DE DUPLICATAS
-- ============================================
-- Execute este script no Supabase SQL Editor
-- ============================================

-- 1. BACKUP (Opcional mas recomendado)
-- CREATE TABLE patients_backup AS SELECT * FROM patients;
-- CREATE TABLE appointments_backup AS SELECT * FROM appointments;

-- ============================================
-- 2. REMOVER PACIENTES DUPLICADOS
-- ============================================

-- Identificar e manter apenas o registro mais antigo de cada telefone
WITH duplicates AS (
  SELECT id, phone, 
    ROW_NUMBER() OVER (PARTITION BY phone ORDER BY created_at ASC) as rn
  FROM patients
  WHERE phone IS NOT NULL AND phone != ''
)
DELETE FROM patients
WHERE id IN (
  SELECT id FROM duplicates WHERE rn > 1
);

-- Resultado esperado: ~35 registros deletados
-- Alexandre: 12 → 1
-- Ana: 2 → 1
-- Cassio: 2 → 1
-- etc.

-- ============================================
-- 3. REMOVER AGENDAMENTOS DUPLICADOS
-- ============================================

-- Manter apenas o agendamento mais recente para cada combinação de:
-- telefone + data + horário
WITH duplicates AS (
  SELECT id, phone, date, time,
    ROW_NUMBER() OVER (
      PARTITION BY phone, date, time 
      ORDER BY created_at DESC
    ) as rn
  FROM appointments
  WHERE phone IS NOT NULL
)
DELETE FROM appointments
WHERE id IN (
  SELECT id FROM duplicates WHERE rn > 1
);

-- Resultado esperado: ~10-15 registros deletados
-- Alexandre: 5 agendamentos → 1

-- ============================================
-- 4. ADICIONAR CONSTRAINTS PARA PREVENIR DUPLICATAS
-- ============================================

-- Adicionar UNIQUE constraint no telefone dos pacientes
ALTER TABLE patients 
ADD CONSTRAINT unique_patient_phone UNIQUE (phone);

-- Adicionar índice composto para prevenir agendamentos duplicados
-- (permite mesmo paciente em horários diferentes, mas não no mesmo horário)
CREATE UNIQUE INDEX unique_appointment_slot 
ON appointments (phone, date, time) 
WHERE status != 'Cancelado';

-- ============================================
-- 5. VERIFICAÇÃO
-- ============================================

-- Contar pacientes únicos por telefone
SELECT COUNT(DISTINCT phone) as pacientes_unicos FROM patients;
-- Esperado: ~15

-- Listar pacientes que tinham duplicatas (para conferir)
SELECT name, phone, COUNT(*) as total
FROM patients
GROUP BY name, phone
HAVING COUNT(*) > 1;
-- Esperado: 0 resultados

-- Contar agendamentos
SELECT status, COUNT(*) as total
FROM appointments
GROUP BY status;

-- ============================================
-- RESULTADO ESPERADO
-- ============================================
-- ANTES:
--   - Pacientes: ~50 registros (muitos duplicados)
--   - Alexandre: 12 registros
--   - Agendamentos: ~20 (com duplicatas)
--
-- DEPOIS:
--   - Pacientes: ~15 registros únicos
--   - Alexandre: 1 registro
--   - Agendamentos: ~10 únicos
--   - Impossível criar duplicatas (constraints)
-- ============================================

COMMENT ON CONSTRAINT unique_patient_phone ON patients IS 
'Previne criação de pacientes duplicados com mesmo telefone';

COMMENT ON INDEX unique_appointment_slot IS 
'Previne agendamentos duplicados no mesmo horário (exceto cancelados)';
