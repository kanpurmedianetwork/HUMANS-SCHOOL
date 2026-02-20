import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../utils/translations';

const LanguageContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
    // Load from local storage on mount (lazy init)
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('humansSchoolLanguage');
        return (saved === 'en' || saved === 'hi') ? saved : 'en';
    });

    // Save to local storage on change
    useEffect(() => {
        localStorage.setItem('humansSchoolLanguage', language);
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'en' ? 'hi' : 'en');
    };

    const t = (key) => {
        const langData = translations[language] || translations['en'];
        return langData[key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
