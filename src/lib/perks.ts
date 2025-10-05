export type LocalizedText = {
  ja: string;
  en: string;
};

export interface Perk {
  name: LocalizedText;
  description: LocalizedText;
  iconUrl: string;
  pp: number;
  creditsToUnlock: number;
  levelToUnlock: number;
};

export const PERK_KEYS: Array<string> = [
  "MECHANIC",
  "HEALTHY",
  "ADRENALINE_RUSH",
  "HYPERPERCEPTIVE",
  "UNCLE_SINK",
  "MECHANIC_2",
  "BOUNTY_HUNTER",
  "CLOSE_ENCOUNTER",
  "SPEED_ADDICT",
  "SHADOWBORN",
  "MERCHANT",
  "LIGHTFOOT",
  "HEALTHY_2",
  "HEAVY",
  "MCNALLY_HANDS",
  "MECHANIC_3",
  "LIGHTFOOT_2",
  "BATTER_UP",
  "GLUTTON",
  "ACCOUNTANT",
  "STEALTH_CAMO",
  "RABBIT_FEET",
  "ATHLETE",
  "EXTERMINATOR_FLASHLIGHT",
  "ALIVE_HARD",
  "GROUCH_BEHAVIOR",
  "EXTREMELY_BUFF",
  "BALKAN_WARRIOR",
  "LEAD_BELLY",
  "SOLID_JOHN"
] as const;
export type PerkKey = typeof PERK_KEYS[number];


export type Locale = 'ja' | 'en';