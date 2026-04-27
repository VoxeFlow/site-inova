'use client';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userName, setUserName] = useState(() => {
        if (typeof window === 'undefined') return '';
        return localStorage.getItem('inova_user_name') || '';
    });

    const updateName = (name) => {
        setUserName(name);
        if (name) {
            localStorage.setItem('inova_user_name', name);
            return;
        }
        localStorage.removeItem('inova_user_name');
    };

    const clearName = () => {
        setUserName('');
        localStorage.removeItem('inova_user_name');
    };

    return (
        <UserContext.Provider value={{ userName, updateName, clearName }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    return useContext(UserContext);
}
