
export const localeCodes = {
  ja: 'ja',
  en: 'en',
} as const;
export type Locale = keyof typeof localeCodes;
export const isLocale = (value: string | null): value is Locale =>
  Object.values(localeCodes).some((locale) => locale === value);

export type LocalizedText = Record<Locale, string>;

export interface Perk {
  name: LocalizedText;
  effectsPositive: Array<LocalizedText>;
  effectsNegative: Array<LocalizedText>;
  iconUrl: string;
  pp: number;
  creditsToUnlock: number;
  levelToUnlock: number;
};

export const PERK_KEY = {
  // Line 1
  MECHANIC: "MECHANIC",
  HEALTHY: "HEALTHY",
  ADRENALINE_RUSH: "ADRENALINE_RUSH",
  HYPERPERCEPTIVE: "HYPERPERCEPTIVE",
  UNCLE_SINK: "UNCLE_SINK",
  PANIC_SENSE: "PANIC_SENSE",

  // Line 2
  MECHANIC_2: "MECHANIC_2",
  BOUNTY_HUNTER: "BOUNTY_HUNTER",
  MCNALLY_HANDS: "MCNALLY_HANDS",
  SPEED_ADDICT: "SPEED_ADDICT",
  SHADOWBORN: "SHADOWBORN",
  MUKBANG_CHAMPION: "MUKBANG_CHAMPION",

  // Line 3
  MERCHANT: "MERCHANT",
  LIGHTFOOT: "LIGHTFOOT",
  HEALTHY_2: "HEALTHY_2",
  HEAVY: "HEAVY",
  CLOSE_ENCOUNTER: "CLOSE_ENCOUNTER",
  FIRST_RESPONDER: "FIRST_RESPONDER",

  // Line 4
  MECHANIC_3: "MECHANIC_3",
  LIGHTFOOT_2: "LIGHTFOOT_2",
  BATTER_UP: "BATTER_UP",
  GLUTTON: "GLUTTON",
  ACCOUNTANT: "ACCOUNTANT",
  DEITY_SWINDLER: "DEITY_SWINDLER",

  // Line 5
  STEALTH_CAMO: "STEALTH_CAMO",
  RABBIT_FEET: "RABBIT_FEET",
  ATHLETE: "ATHLETE",
  EXTERMINATOR_FLASHLIGHT: "EXTERMINATOR_FLASHLIGHT",
  ALIVE_HARD: "ALIVE_HARD",
  SCAPEGOAT: "SCAPEGOAT",

  // Line 6
  GROUCH_BEHAVIOR: "GROUCH_BEHAVIOR",
  EXTREMELY_BUFF: "EXTREMELY_BUFF",
  BALKAN_WARRIOR: "BALKAN_WARRIOR",
  LEAD_BELLY: "LEAD_BELLY",
  SOLID_JOHN: "SOLID_JOHN",
  FREAKY_DOCTOR: "FREAKY_DOCTOR",
} as const;

export type PerkKey = keyof typeof PERK_KEY;

const PERK_KEYS_SET = new Set(Object.values(PERK_KEY));
export const isPerkKey = (value: string): value is PerkKey => PERK_KEYS_SET.has(value as PerkKey);