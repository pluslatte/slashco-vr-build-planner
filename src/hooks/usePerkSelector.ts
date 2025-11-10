import type { PerkKey } from "@/lib/perks";
import { useState, useEffect } from "react";

const STORAGE_KEY = "slashco-vr-perk-selection";

export const usePerkSelector = () => {
  const [selectedKeys, setSelectedKeys] = useState<Array<PerkKey>>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.selectedKeys || [];
      }
    } catch (error) {
      console.error("Failed to load perk selection from localStorage:", error);
    }
    return [];
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ selectedKeys }));
    } catch (error) {
      console.error("Failed to save perk selection to localStorage:", error);
    }
  }, [selectedKeys]);

  const onTogglePerk = (key: PerkKey) => {
    if (selectedKeys.includes(key)) {
      setSelectedKeys(selectedKeys.filter(k => k !== key));
    } else {
      setSelectedKeys([...selectedKeys, key]);
    }
  };

  return { selectedKeys, onTogglePerk };
};
