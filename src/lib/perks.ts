export type LocalizedText = {
  ja: string;
  en: string;
};

export interface Perk {
  name: LocalizedText;
  effectsPositive: Array<LocalizedText>;
  effectsNegative: Array<LocalizedText>;
  iconUrl: string;
  pp: number;
  creditsToUnlock: number;
  levelToUnlock: number;
};

export const PerkKey = {
  MECHANIC: "MECHANIC",
  HEALTHY: "HEALTHY",
  ADRENALINE_RUSH: "ADRENALINE_RUSH",
  HYPERPERCEPTIVE: "HYPERPERCEPTIVE",
  UNCLE_SINK: "UNCLE_SINK",
  MECHANIC_2: "MECHANIC_2",
  BOUNTY_HUNTER: "BOUNTY_HUNTER",
  CLOSE_ENCOUNTER: "CLOSE_ENCOUNTER",
  SPEED_ADDICT: "SPEED_ADDICT",
  SHADOWBORN: "SHADOWBORN",
  MERCHANT: "MERCHANT",
  LIGHTFOOT: "LIGHTFOOT",
  HEALTHY_2: "HEALTHY_2",
  HEAVY: "HEAVY",
  MCNALLY_HANDS: "MCNALLY_HANDS",
  MECHANIC_3: "MECHANIC_3",
  LIGHTFOOT_2: "LIGHTFOOT_2",
  BATTER_UP: "BATTER_UP",
  GLUTTON: "GLUTTON",
  ACCOUNTANT: "ACCOUNTANT",
  STEALTH_CAMO: "STEALTH_CAMO",
  RABBIT_FEET: "RABBIT_FEET",
  ATHLETE: "ATHLETE",
  EXTERMINATOR_FLASHLIGHT: "EXTERMINATOR_FLASHLIGHT",
  ALIVE_HARD: "ALIVE_HARD",
  GROUCH_BEHAVIOR: "GROUCH_BEHAVIOR",
  EXTREMELY_BUFF: "EXTREMELY_BUFF",
  BALKAN_WARRIOR: "BALKAN_WARRIOR",
  LEAD_BELLY: "LEAD_BELLY",
  SOLID_JOHN: "SOLID_JOHN"
} as const;

export type PerkKey = typeof PerkKey[keyof typeof PerkKey];

export type Locale = 'ja' | 'en';