import { DEFAULT_LEVEL, MAX_LEVEL, MIN_LEVEL } from "./constants";
import { isLocale, isPerkKey, localeCodes, PERK_KEY, type Locale, type PerkKey } from "./perks";

export interface SharedBuild {
  perks: PerkKey[];
  level: number;
  lang: Locale;
}

// Ordered list of perk keys for bitmap encoding (must remain stable)
const PERK_ORDER: PerkKey[] = [
  PERK_KEY.MECHANIC,
  PERK_KEY.HEALTHY,
  PERK_KEY.ADRENALINE_RUSH,
  PERK_KEY.HYPERPERCEPTIVE,
  PERK_KEY.UNCLE_SINK,
  PERK_KEY.PANIC_SENSE,
  PERK_KEY.MECHANIC_2,
  PERK_KEY.BOUNTY_HUNTER,
  PERK_KEY.MCNALLY_HANDS,
  PERK_KEY.SPEED_ADDICT,
  PERK_KEY.SHADOWBORN,
  PERK_KEY.MUKBANG_CHAMPION,
  PERK_KEY.MERCHANT,
  PERK_KEY.LIGHTFOOT,
  PERK_KEY.HEALTHY_2,
  PERK_KEY.HEAVY,
  PERK_KEY.CLOSE_ENCOUNTER,
  PERK_KEY.FIRST_RESPONDER,
  PERK_KEY.MECHANIC_3,
  PERK_KEY.LIGHTFOOT_2,
  PERK_KEY.BATTER_UP,
  PERK_KEY.GLUTTON,
  PERK_KEY.ACCOUNTANT,
  PERK_KEY.DEITY_SWINDLER,
  PERK_KEY.STEALTH_CAMO,
  PERK_KEY.RABBIT_FEET,
  PERK_KEY.ATHLETE,
  PERK_KEY.EXTERMINATOR_FLASHLIGHT,
  PERK_KEY.ALIVE_HARD,
  PERK_KEY.SCAPEGOAT,
  PERK_KEY.GROUCH_BEHAVIOR,
  PERK_KEY.EXTREMELY_BUFF,
  PERK_KEY.BALKAN_WARRIOR,
  PERK_KEY.LEAD_BELLY,
  PERK_KEY.SOLID_JOHN,
  PERK_KEY.FREAKY_DOCTOR,
];

const PERK_INDEX_MAP = new Map(PERK_ORDER.map((key, index) => [key, index]));

export const getBuildFromCurrentUrl = () => {
  try {
    if (typeof window === "undefined") return null;
    return parseBuildFromSearchParams(new URLSearchParams(window.location.search));
  } catch (error) {
    console.error("Failed to load build from URL:", error);
    return null;
  }
};

const clampLevel = (level: number) =>
  Math.min(Math.max(MIN_LEVEL, Number.isFinite(level) ? Math.trunc(level) : MIN_LEVEL), MAX_LEVEL);

export const sanitizePerkKeys = (keys: Iterable<string>): PerkKey[] => {
  const seen = new Set<PerkKey>();
  const result: PerkKey[] = [];

  for (const key of keys) {
    if (isPerkKey(key) && !seen.has(key)) {
      seen.add(key);
      result.push(key);
    }
  }

  return result;
};

/**
 * Encodes a build configuration into a compact base64url string
 * Format: 4 bytes for perks bitmap + 1 byte for level + language bit in last byte
 */
const encodeBuildCompact = (build: SharedBuild): string => {
  const sanitizedPerks = sanitizePerkKeys(build.perks);
  
  // Create a bitmap for perks (32 perks = 4 bytes)
  const perkBitmap = new Uint8Array(4);
  for (const perk of sanitizedPerks) {
    const index = PERK_INDEX_MAP.get(perk);
    if (index !== undefined) {
      const byteIndex = Math.floor(index / 8);
      const bitIndex = index % 8;
      perkBitmap[byteIndex] |= 1 << bitIndex;
    }
  }
  
  // Encode level (1 byte) and language (1 bit in the 6th byte)
  const level = clampLevel(build.level);
  const langBit = build.lang === localeCodes.en ? 1 : 0;
  
  // Pack into 6 bytes: 4 for perks + 1 for level + 1 for lang
  const bytes = new Uint8Array(6);
  bytes.set(perkBitmap, 0);
  bytes[4] = level;
  bytes[5] = langBit;
  
  // Convert to base64url
  return bytesToBase64Url(bytes);
};

/**
 * Decodes a compact base64url string into a build configuration
 */
const decodeBuildCompact = (encoded: string): SharedBuild | null => {
  try {
    const bytes = base64UrlToBytes(encoded);
    if (bytes.length !== 6) {
      return null;
    }
    
    // Extract perks from bitmap
    const perks: PerkKey[] = [];
    for (let i = 0; i < 32; i++) {
      const byteIndex = Math.floor(i / 8);
      const bitIndex = i % 8;
      if (bytes[byteIndex] & (1 << bitIndex)) {
        const perk = PERK_ORDER[i];
        if (perk) {
          perks.push(perk);
        }
      }
    }
    
    // Extract level and language
    const level = clampLevel(bytes[4]);
    const lang = bytes[5] === 1 ? localeCodes.en : localeCodes.ja;
    
    return { perks, level, lang };
  } catch (error) {
    console.error("Failed to decode compact build:", error);
    return null;
  }
};

/**
 * Convert Uint8Array to base64url string
 */
const bytesToBase64Url = (bytes: Uint8Array): string => {
  const base64 = btoa(String.fromCharCode(...bytes));
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
};

/**
 * Convert base64url string to Uint8Array
 */
const base64UrlToBytes = (base64url: string): Uint8Array => {
  // Restore standard base64
  let base64 = base64url.replace(/-/g, '+').replace(/_/g, '/');
  // Add padding if needed
  while (base64.length % 4) {
    base64 += '=';
  }
  const binaryString = atob(base64);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

export const parseBuildFromSearchParams = (params: URLSearchParams): SharedBuild | null => {
  // Try compact format first (new format)
  const compactParam = params.get("b");
  if (compactParam) {
    const decoded = decodeBuildCompact(compactParam);
    if (decoded) {
      return decoded;
    }
  }

  // Fall back to legacy format for backward compatibility
  const hasAnyShareParam = ["perks", "level", "lang"].some((key) => params.has(key));
  if (!hasAnyShareParam) {
    return null;
  }

  const perksParam = params.get("perks");
  const levelParam = params.get("level");
  const langParam = params.get("lang");

  const perks = perksParam ? sanitizePerkKeys(perksParam.split(",")) : [];
  const level = clampLevel(levelParam ? parseInt(levelParam, 10) : DEFAULT_LEVEL);
  const lang = isLocale(langParam) ? langParam : localeCodes.ja;

  return { perks, level, lang };
};

export const buildShareSearchParams = (build: SharedBuild) => {
  const params = new URLSearchParams();
  
  // Use compact encoding format
  const compactEncoded = encodeBuildCompact(build);
  params.set("b", compactEncoded);

  return params;
};
