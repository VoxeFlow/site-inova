-- Adicionar campo para rastrear follow-ups enviados
ALTER TABLE appointments ADD COLUMN IF NOT EXISTS follow_up_sent TIMESTAMP;

COMMENT ON COLUMN appointments.follow_up_sent IS 'Data/hora em que o follow-up automático foi enviado';
