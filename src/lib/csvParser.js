import Papa from 'papaparse';
import * as XLSX from 'xlsx';

export async function parseCSV(file) {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                resolve(results.data);
            },
            error: (error) => {
                reject(error);
            }
        });
    });
}

export async function parseExcel(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(firstSheet);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        };

        reader.onerror = () => reject(reader.error);
        reader.readAsArrayBuffer(file);
    });
}

export async function parsePatientFile(file) {
    const extension = file.name.split('.').pop().toLowerCase();

    if (extension === 'csv') {
        return parseCSV(file);
    } else if (extension === 'xlsx' || extension === 'xls') {
        return parseExcel(file);
    } else {
        throw new Error('Formato de arquivo não suportado. Use CSV ou Excel.');
    }
}

export function normalizePatientData(rawData) {
    // Map common column names to standard format
    const columnMappings = {
        // Name variations
        'nome': 'name',
        'name': 'name',
        'paciente': 'name',
        'patient': 'name',

        // Phone variations
        'telefone': 'phone',
        'phone': 'phone',
        'celular': 'phone',
        'whatsapp': 'phone',

        // Birth date variations
        'data_nascimento': 'birth_date',
        'data nascimento': 'birth_date',
        'nascimento': 'birth_date',
        'birth_date': 'birth_date',
        'birthday': 'birth_date',
        'aniversario': 'birth_date',
        'aniversário': 'birth_date',

        // Email variations
        'email': 'email',
        'e-mail': 'email',

        // CPF variations
        'cpf': 'cpf',

        // Address variations
        'endereco': 'address',
        'endereço': 'address',
        'address': 'address'
    };

    return rawData.map(row => {
        const normalized = {};

        for (const [key, value] of Object.entries(row)) {
            const normalizedKey = columnMappings[key.toLowerCase().trim()] || key;
            normalized[normalizedKey] = value;
        }

        return normalized;
    });
}

export function cleanPhoneNumber(phone) {
    if (!phone) return '';

    // Remove all non-digit characters
    const cleaned = phone.toString().replace(/\D/g, '');

    // Remove country code if present
    if (cleaned.startsWith('55')) {
        return cleaned.substring(2);
    }

    return cleaned;
}

export function validatePatientRow(patient) {
    const errors = [];

    // Required: name
    if (!patient.name || patient.name.trim() === '') {
        errors.push('Nome é obrigatório');
    }

    // Required: phone
    if (!patient.phone || patient.phone.toString().trim() === '') {
        errors.push('Telefone é obrigatório');
    } else {
        const cleaned = cleanPhoneNumber(patient.phone);
        if (cleaned.length < 10 || cleaned.length > 11) {
            errors.push('Telefone inválido');
        }
    }

    // Optional but validated: birth_date
    if (patient.birth_date) {
        const { valid, error } = validateBirthDate(patient.birth_date);
        if (!valid) {
            errors.push(`Data de nascimento: ${error}`);
        }
    }

    // Optional but validated: email
    if (patient.email && patient.email.trim() !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(patient.email)) {
            errors.push('Email inválido');
        }
    }

    return {
        valid: errors.length === 0,
        errors: errors.join(', ')
    };
}

function validateBirthDate(dateString) {
    // Reuse from birthdayHelpers
    const formats = [
        /^(\d{2})\/(\d{2})\/(\d{4})$/,
        /^(\d{4})-(\d{2})-(\d{2})$/,
        /^(\d{2})-(\d{2})-(\d{4})$/,
    ];

    for (const format of formats) {
        const match = dateString.toString().match(format);
        if (match) {
            return { valid: true };
        }
    }

    return { valid: false, error: 'Formato inválido (use DD/MM/AAAA)' };
}
