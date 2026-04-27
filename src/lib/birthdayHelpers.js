export function calculateAge(birthDate) {
    if (!birthDate) return null;

    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
        age--;
    }

    return age;
}

export function isBirthdayToday(birthDate) {
    if (!birthDate) return false;

    const today = new Date();
    const birth = new Date(birthDate);

    return today.getDate() === birth.getDate() &&
        today.getMonth() === birth.getMonth();
}

export function isBirthdayThisWeek(birthDate) {
    if (!birthDate) return false;

    const today = new Date();
    const birth = new Date(birthDate);
    const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

    // Create dates with current year
    const birthdayThisYear = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

    return birthdayThisYear >= today && birthdayThisYear <= weekFromNow;
}

export function isBirthdayThisMonth(birthDate) {
    if (!birthDate) return false;

    const today = new Date();
    const birth = new Date(birthDate);

    return today.getMonth() === birth.getMonth();
}

export function getUpcomingBirthdays(patients, days = 30) {
    const today = new Date();
    const upcoming = [];

    for (const patient of patients) {
        if (!patient.birth_date) continue;

        const birth = new Date(patient.birth_date);
        const birthdayThisYear = new Date(today.getFullYear(), birth.getMonth(), birth.getDate());

        // If birthday already passed this year, check next year
        if (birthdayThisYear < today) {
            birthdayThisYear.setFullYear(today.getFullYear() + 1);
        }

        const daysUntil = Math.ceil((birthdayThisYear - today) / (1000 * 60 * 60 * 24));

        if (daysUntil >= 0 && daysUntil <= days) {
            upcoming.push({
                ...patient,
                daysUntil,
                birthdayDate: birthdayThisYear,
                age: calculateAge(patient.birth_date) + (birthdayThisYear.getFullYear() > today.getFullYear() ? 1 : 0)
            });
        }
    }

    return upcoming.sort((a, b) => a.daysUntil - b.daysUntil);
}

export function formatBirthday(birthDate) {
    if (!birthDate) return '';

    const date = new Date(birthDate);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
}

export function replaceBirthdayVariables(template, patient) {
    const age = calculateAge(patient.birth_date);
    const today = new Date().toLocaleDateString('pt-BR');

    return template
        .replace(/\{nome\}/g, patient.name)
        .replace(/\{idade\}/g, age || '')
        .replace(/\{data\}/g, today);
}

export function parseBirthDate(dateString) {
    // Try multiple formats: DD/MM/YYYY, YYYY-MM-DD, DD-MM-YYYY
    const formats = [
        /^(\d{2})\/(\d{2})\/(\d{4})$/, // DD/MM/YYYY
        /^(\d{4})-(\d{2})-(\d{2})$/, // YYYY-MM-DD
        /^(\d{2})-(\d{2})-(\d{4})$/, // DD-MM-YYYY
    ];

    for (const format of formats) {
        const match = dateString.match(format);
        if (match) {
            if (format === formats[0] || format === formats[2]) {
                // DD/MM/YYYY or DD-MM-YYYY
                const [, day, month, year] = match;
                return `${year}-${month}-${day}`;
            } else {
                // YYYY-MM-DD
                return dateString;
            }
        }
    }

    return null;
}

export function validateBirthDate(dateString) {
    const parsed = parseBirthDate(dateString);
    if (!parsed) return { valid: false, error: 'Formato inválido' };

    const date = new Date(parsed);
    const today = new Date();

    if (isNaN(date.getTime())) {
        return { valid: false, error: 'Data inválida' };
    }

    if (date > today) {
        return { valid: false, error: 'Data no futuro' };
    }

    const age = calculateAge(parsed);
    if (age > 120) {
        return { valid: false, error: 'Idade muito alta' };
    }

    return { valid: true, date: parsed };
}
