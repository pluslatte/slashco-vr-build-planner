import { localeCodes, type Locale } from "@/lib/perks";
import { useState, useEffect } from "react";
import { DEFAULT_LEVEL, parseBuildFromSearchParams } from "@/lib/share";

const SETTINGS_STORAGE_KEY = "slashco-vr-settings";

export const useSettings = () => {
    const [level, setLevel] = useState<number>(() => {
        try {
            if (typeof window !== "undefined") {
                const params = new URLSearchParams(window.location.search);
                const parsed = parseBuildFromSearchParams(params);
                if (parsed) {
                    return parsed.level;
                }
            }
        } catch (error) {
            console.error("Failed to load level from URL:", error);
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
        try {
            if (typeof window !== "undefined") {
                const params = new URLSearchParams(window.location.search);
                const parsed = parseBuildFromSearchParams(params);
                if (parsed) {
                    return parsed.lang;
                }
            }
        } catch (error) {
            console.error("Failed to load lang from URL:", error);
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
