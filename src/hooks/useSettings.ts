import { localeCodes, type Locale } from "@/lib/perks";
import { useState, useEffect } from "react";
import { DEFAULT_LEVEL, getBuildFromCurrentUrl } from "@/lib/share";

const SETTINGS_STORAGE_KEY = "slashco-vr-settings";

export const useSettings = () => {
    const [level, setLevel] = useState<number>(() => {
        const fromUrl = getBuildFromCurrentUrl();
        if (fromUrl) {
            return fromUrl.level;
        }
        try {
            const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                return parsed.level || DEFAULT_LEVEL;
            }
        } catch (error) {
            console.error("Failed to load settings from localStorage:", error);
        }
        return DEFAULT_LEVEL;
    });

    const [lang, setLang] = useState<Locale>(() => {
        const fromUrl = getBuildFromCurrentUrl();
        if (fromUrl) {
            return fromUrl.lang;
        }
        try {
            const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
            if (stored) {
                const parsed = JSON.parse(stored);
                return parsed.lang || localeCodes.ja;
            }
        } catch (error) {
            console.error("Failed to load settings from localStorage:", error);
        }
        return localeCodes.ja;
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
