import { localeCodes, type Locale, type PerkKey } from "./perks";
import { PERKS } from "./perkData";

export interface SharedBuild {
  perks: PerkKey[];
  level: number;
  lang: Locale;
}

export const DEFAULT_LEVEL = 30;
const MAX_LEVEL = 100;

const PERK_KEYS = new Set<PerkKey>(Object.keys(PERKS) as Array<PerkKey>);
const isPerkKey = (value: string): value is PerkKey => PERK_KEYS.has(value as PerkKey);
const isLocale = (value: string | null): value is Locale =>
  value === localeCodes.en || value === localeCodes.ja;

const clampLevel = (level: number) =>
  Math.min(Math.max(0, Number.isFinite(level) ? Math.trunc(level) : 0), MAX_LEVEL);

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

export const parseBuildFromSearchParams = (params: URLSearchParams): SharedBuild | null => {
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

  const perks = sanitizePerkKeys(build.perks).sort();
  if (perks.length) {
    params.set("perks", perks.join(","));
  }

  params.set("level", clampLevel(build.level).toString());
  params.set("lang", build.lang);

  return params;
};
