import type { PerkKey } from "@/lib/perks";
import { useState } from "react";

export const usePerkSelector = () => {
  const [selectedKeys, setSelectedKeys] = useState<Array<PerkKey>>([]);
  const onTogglePerk = (key: PerkKey) => {
    if (selectedKeys.includes(key)) {
      setSelectedKeys(selectedKeys.filter(k => k !== key));
    } else {
      setSelectedKeys([...selectedKeys, key]);
    }
  };
  return { selectedKeys, onTogglePerk };
};
