# 🗄️ Executar Migration no Supabase

## Passo a Passo

1. **Acesse o Supabase Dashboard**
   - URL: https://supabase.com/dashboard
   - Projeto: Clínica Inova

2. **Vá para SQL Editor**
   - Menu lateral → SQL Editor
   - Ou: https://supabase.com/dashboard/project/YOUR_PROJECT_ID/sql

3. **Cole o SQL**
   - Copie todo o conteúdo de `supabase/migrations/003_dentist_availability.sql`
   - Cole no editor

4. **Execute**
   - Clique em "Run" ou `Ctrl+Enter`
   - Aguarde confirmação de sucesso

5. **Verifique**
   - Menu lateral → Table Editor
   - Procure por `dentist_availability`
   - Deve ter 10 registros (6 do Dr. Lucas + 4 do Dr. Arthur)

---

## ✅ Verificação Rápida

Execute esta query para confirmar:

```sql
SELECT 
  d.name as dentista,
  da.day_of_week,
  da.start_time,
  da.end_time
FROM dentist_availability da
JOIN dentists d ON d.id = da.dentist_id
ORDER BY da.dentist_id, da.day_of_week, da.start_time;
```

Deve retornar 10 linhas mostrando os horários de cada profissional.

---

**Depois de executar, me avise para continuar com as APIs!** 🚀
