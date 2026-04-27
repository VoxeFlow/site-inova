-- ============================================
-- LIMPEZA DE DUPLICATAS - VERSÃO CORRIGIDA
-- ============================================
-- Execute este script no Supabase SQL Editor
-- ============================================

-- PASSO 1: Ver duplicatas atuais
SELECT name, phone, COUNT(*) as total
FROM patients
WHERE phone IS NOT NULL AND phone != ''
GROUP BY name, phone
HAVING COUNT(*) > 1
ORDER BY total DESC;

-- PASSO 2: Remover duplicatas (VERSÃO SIMPLIFICADA)
-- Esta versão usa DELETE FROM com subquery
DELETE FROM patients
WHERE id NOT IN (
    SELECT MIN(id)
    FROM patients
    WHERE phone IS NOT NULL AND phone != ''
    GROUP BY phone
)
AND phone IS NOT NULL 
AND phone != '';

-- PASSO 3: Adicionar constraint UNIQUE
-- Primeiro, verificar se já existe
DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM pg_constraint 
        WHERE conname = 'unique_patient_phone'
    ) THEN
        ALTER TABLE patients 
        ADD CONSTRAINT unique_patient_phone UNIQUE (phone);
    END IF;
END $$;

-- PASSO 4: Verificar resultado
SELECT 
    COUNT(*) as total_pacientes,
    COUNT(DISTINCT phone) as pacientes_unicos
FROM patients;

-- Deve retornar o mesmo número para ambos!

-- ============================================
-- RESULTADO ESPERADO
-- ============================================
-- ANTES:
--   total_pacientes: ~50
--   pacientes_unicos: ~15
--
-- DEPOIS:
--   total_pacientes: ~15
--   pacientes_unicos: ~15
-- ============================================
