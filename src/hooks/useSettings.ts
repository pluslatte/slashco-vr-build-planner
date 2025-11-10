import { useState, useEffect } from "react";

const SETTINGS_STORAGE_KEY = "slashco-vr-settings";

export const useSettings = () => {
    const [level, setLevel] = useState<number>(() => {
        try {
            const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                return parsed.level || 30;
            }
        } catch (error) {
            console.error("Failed to load settings from localStorage:", error);
        }
        return 30;
    });

    const [lang, setLang] = useState<'en' | 'ja'>(() => {
        try {
            const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                return parsed.lang || 'ja';
            }
        } catch (error) {
            console.error("Failed to load settings from localStorage:", error);
        }
        return 'ja';
    });

    useEffect(() => {
        try {
            localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify({ level, lang }));
        } catch (error) {
            console.error("Failed to save settings to localStorage:", error);
        }
    }, [level, lang]);

    return { level, setLevel, lang, setLang };
};
