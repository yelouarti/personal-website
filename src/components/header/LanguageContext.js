import React, { createContext, useState, useEffect } from 'react';
import i18n from 'i18next';
import {LocalStorageWrapper} from "../../localStorageWrapper";


const getCurrentLanguage = () => {
    const storedLanguage = LocalStorageWrapper.getLanguage();
    if (storedLanguage) {
        return storedLanguage;
    }
    // Fallback to browser language
    const browserLanguage = navigator.language.split('-')[0]; // e.g., 'en' from 'en-US'
    return browserLanguage || 'de'; // Default to 'de' if detection fails
};

const setLanguagePreference = (newLanguage) => {
    LocalStorageWrapper.setLanguage(newLanguage);
    window.dispatchEvent(new Event('languageChanged'));
};

// Create the context
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(getCurrentLanguage());

    const switchLanguage = (lng) => {
        setLanguagePreference(lng);
        setLanguageState(lng);
        i18n.changeLanguage(lng);
    };

    // Listen for language changes (e.g., from other tabs)
    useEffect(() => {
        const handleLanguageChange = () => {
            const newLanguage = getCurrentLanguage();
            setLanguageState(newLanguage);
            i18n.changeLanguage(newLanguage);
        };

        window.addEventListener('languageChanged', handleLanguageChange);
        return () => {
            window.removeEventListener('languageChanged', handleLanguageChange);
        };
    }, []);

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
