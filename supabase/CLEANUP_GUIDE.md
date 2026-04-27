# 🗄️ Executar Limpeza de Duplicatas

## ⚠️ IMPORTANTE: Faça Backup Primeiro!

Antes de executar, crie backup das tabelas:

```sql
CREATE TABLE patients_backup AS SELECT * FROM patients;
CREATE TABLE appointments_backup AS SELECT * FROM appointments;
```

---

## 📋 Passo a Passo

### 1. Acesse Supabase Dashboard
- URL: https://supabase.com/dashboard
- Projeto: Clínica Inova
- Menu: **SQL Editor**

### 2. Cole o Script
- Abra: `supabase/migrations/004_cleanup_duplicates.sql`
- Copie TODO o conteúdo
- Cole no SQL Editor

### 3. Execute
- Clique em **Run** ou `Ctrl+Enter`
- Aguarde conclusão (~5-10 segundos)

### 4. Verifique Resultados

Execute estas queries para conferir:

```sql
-- Deve retornar ~15
SELECT COUNT(DISTINCT phone) as pacientes_unicos FROM patients;

-- Deve retornar 0 (nenhuma duplicata)
SELECT name, phone, COUNT(*) as total
FROM patients
GROUP BY name, phone
HAVING COUNT(*) > 1;

-- Ver distribuição de agendamentos
SELECT status, COUNT(*) as total
FROM appointments
GROUP BY status;
```

---

## ✅ Resultado Esperado

**ANTES:**
- Pacientes: ~50 registros
- Alexandre: 12x
- Ana: 2x
- Cassio: 2x

**DEPOIS:**
- Pacientes: ~15 únicos
- Alexandre: 1x
- Ana: 1x
- Cassio: 1x
- **Impossível criar duplicatas** (UNIQUE constraint)

---

## 🔄 Se Algo Der Errado

Restaurar backup:

```sql
DROP TABLE patients;
CREATE TABLE patients AS SELECT * FROM patients_backup;

DROP TABLE appointments;
CREATE TABLE appointments AS SELECT * FROM appointments_backup;
```

---

**Depois de executar, me avise para continuar com a Fase 2!** 🚀
