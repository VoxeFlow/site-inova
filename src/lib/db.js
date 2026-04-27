// localStorage utilities for data persistence
const STORAGE_KEYS = {
    APPOINTMENTS: 'inova_appointments',
    DENTISTS: 'inova_dentists',
    PATIENTS: 'inova_patients'
};

// Generic storage functions
export const storage = {
    get: (key) => {
        if (typeof window === 'undefined') return [];
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    },

    set: (key, value) => {
        if (typeof window === 'undefined') return;
        localStorage.setItem(key, JSON.stringify(value));
    },

    add: (key, item) => {
        const items = storage.get(key);
        const newItem = { ...item, id: Date.now() };
        items.push(newItem);
        storage.set(key, items);
        return newItem;
    },

    update: (key, id, updates) => {
        const items = storage.get(key);
        const index = items.findIndex(item => item.id === id);
        if (index !== -1) {
            items[index] = { ...items[index], ...updates };
            storage.set(key, items);
            return items[index];
        }
        return null;
    },

    delete: (key, id) => {
        const items = storage.get(key);
        const filtered = items.filter(item => item.id !== id);
        storage.set(key, filtered);
        return true;
    }
};

// Appointments
export const appointmentsDB = {
    getAll: () => storage.get(STORAGE_KEYS.APPOINTMENTS),
    getById: (id) => storage.get(STORAGE_KEYS.APPOINTMENTS).find(a => a.id === id),
    create: (appointment) => storage.add(STORAGE_KEYS.APPOINTMENTS, appointment),
    update: (id, updates) => storage.update(STORAGE_KEYS.APPOINTMENTS, id, updates),
    delete: (id) => storage.delete(STORAGE_KEYS.APPOINTMENTS, id)
};

// Dentists
export const dentistsDB = {
    getAll: () => storage.get(STORAGE_KEYS.DENTISTS),
    getById: (id) => storage.get(STORAGE_KEYS.DENTISTS).find(d => d.id === id),
    create: (dentist) => storage.add(STORAGE_KEYS.DENTISTS, dentist),
    update: (id, updates) => storage.update(STORAGE_KEYS.DENTISTS, id, updates),
    delete: (id) => storage.delete(STORAGE_KEYS.DENTISTS, id)
};

// Patients
export const patientsDB = {
    getAll: () => storage.get(STORAGE_KEYS.PATIENTS),
    getById: (id) => storage.get(STORAGE_KEYS.PATIENTS).find(p => p.id === id),
    create: (patient) => storage.add(STORAGE_KEYS.PATIENTS, patient),
    update: (id, updates) => storage.update(STORAGE_KEYS.PATIENTS, id, updates),
    delete: (id) => storage.delete(STORAGE_KEYS.PATIENTS, id)
};

// Initialize with sample data if empty
export const initializeSampleData = () => {
    if (typeof window === 'undefined') return;

    // Sample dentists
    if (dentistsDB.getAll().length === 0) {
        dentistsDB.create({
            name: 'Dr. Jefferson Reis',
            specialty: 'Implantodontia',
            cro: 'CRO-MG 12345',
            phone: '(31) 99999-0001',
            email: 'jefferson@clinicainova.com',
            avatar: 'JR'
        });
        dentistsDB.create({
            name: 'Dra. Ana Silva',
            specialty: 'Ortodontia',
            cro: 'CRO-MG 54321',
            phone: '(31) 99999-0002',
            email: 'ana@clinicainova.com',
            avatar: 'AS'
        });
    }
};
