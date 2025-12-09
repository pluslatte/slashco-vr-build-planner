import { describe, expect, it } from "vitest";
import { buildShareSearchParams, DEFAULT_LEVEL, parseBuildFromSearchParams } from "./share";
import { localeCodes, PERK_KEY, type PerkKey } from "./perks";

describe("share utilities", () => {
  it("buildShareSearchParams sorts and clamps values", () => {
    const params = buildShareSearchParams({
      perks: [PERK_KEY.MECHANIC_3, PERK_KEY.MECHANIC, PERK_KEY.MECHANIC] as PerkKey[],
      level: 120,
      lang: localeCodes.en,
    });

    expect(params.get("perks")).toBe("MECHANIC,MECHANIC_3");
    expect(params.get("level")).toBe("100");
    expect(params.get("lang")).toBe(localeCodes.en);
  });

  it("parseBuildFromSearchParams returns null when no share params are present", () => {
    expect(parseBuildFromSearchParams(new URLSearchParams())).toBeNull();
  });

  it("parseBuildFromSearchParams filters invalid perks and applies defaults", () => {
    const parsed = parseBuildFromSearchParams(new URLSearchParams({
      perks: "INVALID,HEALTHY,UNKNOWN",
      level: "-5",
      lang: "unknown",
    }));

    expect(parsed?.perks).toEqual([PERK_KEY.HEALTHY]);
    expect(parsed?.level).toBe(0);
    expect(parsed?.lang).toBe(localeCodes.ja);
  });

  it("parseBuildFromSearchParams uses defaults when values are missing", () => {
    const parsed = parseBuildFromSearchParams(new URLSearchParams({
      perks: "",
    }));

    expect(parsed?.perks).toEqual([]);
    expect(parsed?.level).toBe(DEFAULT_LEVEL);
    expect(parsed?.lang).toBe(localeCodes.ja);
  });
});
