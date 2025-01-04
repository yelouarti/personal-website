
const  PREFIX = 'pws_'

const StorageKeys = {
    LANGUAGE: PREFIX + 'appLanguage',
};

// Utility function to safely get items
const safeGetItem = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.error(`Error getting item ${key} from localStorage`, error);
        return null;
    }
};

// Utility function to safely set items
const safeSetItem = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {
        console.error(`Error setting item ${key} to localStorage`, error);
    }
};

// Getter and Setter for Language
export const getLanguage = () => {
    return safeGetItem(StorageKeys.LANGUAGE);
};

export const setLanguage = (language) => {
    safeSetItem(StorageKeys.LANGUAGE, language);
};

export const removeLanguage = () => {
    try {
        localStorage.removeItem(StorageKeys.LANGUAGE);
    } catch (error) {
        console.error(`Error removing item ${StorageKeys.LANGUAGE} from localStorage`, error);
    }
};

// Clear all storage (use with caution)
export const clearAllStorage = () => {
    Object.values(StorageKeys).forEach((key) => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing item ${key} from localStorage`, error);
        }
    });
};

export const LocalStorageWrapper = {
    getLanguage,
    setLanguage,
    removeLanguage,
    clearAllStorage,
};