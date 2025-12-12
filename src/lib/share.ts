import { MAX_LEVEL, MIN_LEVEL } from "./constants";
import { isPerkKey, localeCodes, type Locale, type PerkKey } from "./perks";

export interface SharedBuild {
  perks: PerkKey[];
  level: number;
  lang: Locale;
}

// Ordered list of perk keys for bitmap encoding (must remain stable)
// - New perks: Add to the end
// - Deleted perks: Do NOT remove from this list (to maintain index stability)
// - Replaced perks: Keep the old ID here, add the new ID to the end
const PERK_ORDER: readonly string[] = [
  "MECHANIC",
  "HEALTHY",
  "ADRENALINE_RUSH",
  "HYPERPERCEPTIVE",
  "UNCLE_SINK",
  "PANIC_SENSE",
  "MECHANIC_2",
  "BOUNTY_HUNTER",
  "MCNALLY_HANDS",
  "SPEED_ADDICT",
  "SHADOWBORN",
  "MUKBANG_CHAMPION",
  "MERCHANT",
  "LIGHTFOOT",
  "HEALTHY_2",
  "HEAVY",
  "CLOSE_ENCOUNTER",
  "FIRST_RESPONDER",
  "MECHANIC_3",
  "LIGHTFOOT_2",
  "BATTER_UP",
  "GLUTTON",
  "ACCOUNTANT",
  "DEITY_SWINDLER",
  "STEALTH_CAMO",
  "RABBIT_FEET",
  "ATHLETE",
  "EXTERMINATOR_FLASHLIGHT",
  "ALIVE_HARD",
  "SCAPEGOAT",
  "GROUCH_BEHAVIOR",
  "EXTREMELY_BUFF",
  "BALKAN_WARRIOR",
  "LEAD_BELLY",
  "SOLID_JOHN",
  "FREAKY_DOCTOR",
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
 * Format: N bytes for perks bitmap + 1 byte for level + 1 byte for language
 */
const encodeBuildCompact = (build: SharedBuild): string => {
  const sanitizedPerks = sanitizePerkKeys(build.perks);

  // Create a bitmap for perks
  const bitmapBytes = Math.ceil(PERK_ORDER.length / 8);
  const perkBitmap = new Uint8Array(bitmapBytes);
  for (const perk of sanitizedPerks) {
    const index = PERK_INDEX_MAP.get(perk);
    if (index !== undefined) {
      const byteIndex = Math.floor(index / 8);
      const bitIndex = index % 8;
      perkBitmap[byteIndex] |= 1 << bitIndex;
    }
  }

  // Encode level (1 byte) and language (1 byte)
  const level = clampLevel(build.level);
  const langBit = build.lang === localeCodes.en ? 1 : 0;

  // Pack into N+2 bytes: N for perks + 1 for level + 1 for lang
  const bytes = new Uint8Array(bitmapBytes + 2);
  bytes.set(perkBitmap, 0);
  bytes[bitmapBytes] = level;
  bytes[bitmapBytes + 1] = langBit;

  // Convert to base64url
  return bytesToBase64Url(bytes);
};

/**
 * Decodes a compact base64url string into a build configuration
 */
const decodeBuildCompact = (encoded: string): SharedBuild | null => {
  try {
    const bytes = base64UrlToBytes(encoded);
    if (bytes.length < 2) {
      return null;
    }

    const bitmapBytes = bytes.length - 2;

    // Extract perks from bitmap
    const perks: PerkKey[] = [];
    for (let i = 0; i < PERK_ORDER.length; i++) {
      const byteIndex = Math.floor(i / 8);
      const bitIndex = i % 8;

      // Check if we have data for this bit
      if (byteIndex < bitmapBytes) {
        if (bytes[byteIndex] & (1 << bitIndex)) {
          const perk = PERK_ORDER[i];
          if (perk && isPerkKey(perk)) {
            perks.push(perk);
          }
        }
      }
    }

    // Extract level and language
    const level = clampLevel(bytes[bitmapBytes]);
    const lang = bytes[bitmapBytes + 1] === 1 ? localeCodes.en : localeCodes.ja;

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
  const compactParam = params.get("b");
  if (!compactParam) {
    return null;
  }

  return decodeBuildCompact(compactParam);
};

export const buildShareSearchParams = (build: SharedBuild) => {
  const params = new URLSearchParams();

  // Use compact encoding format
  const compactEncoded = encodeBuildCompact(build);
  params.set("b", compactEncoded);

  return params;
};
