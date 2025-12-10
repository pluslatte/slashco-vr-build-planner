import { describe, expect, it } from "vitest";
import { buildShareSearchParams, DEFAULT_LEVEL, parseBuildFromSearchParams, sanitizePerkKeys } from "./share";
import { localeCodes, PERK_KEY, type PerkKey } from "./perks";

describe("共有ユーティリティ", () => {
  it("buildShareSearchParams は値をソートおよびクランプする", () => {
    const params = buildShareSearchParams({
      perks: [PERK_KEY.MECHANIC_3, PERK_KEY.MECHANIC, PERK_KEY.MECHANIC] as PerkKey[],
      level: 120,
      lang: localeCodes.en,
    });

    expect(params.get("perks")).toBe("MECHANIC,MECHANIC_3");
    expect(params.get("level")).toBe("100");
    expect(params.get("lang")).toBe(localeCodes.en);
  });

  it("buildShareSearchParams は空の場合 perks パラメータを省略する", () => {
    const params = buildShareSearchParams({
      perks: [],
      level: 30,
      lang: localeCodes.en,
    });

    expect(params.has("perks")).toBe(false);
    expect(params.get("level")).toBe("30");
    expect(params.get("lang")).toBe(localeCodes.en);
  });

  it("parseBuildFromSearchParams は共有パラメータが存在しない場合に null を返す", () => {
    expect(parseBuildFromSearchParams(new URLSearchParams())).toBeNull();
  });

  it("parseBuildFromSearchParams は無効なパークをフィルタリングし、デフォルトを適用する", () => {
    const parsed = parseBuildFromSearchParams(new URLSearchParams({
      perks: "INVALID,HEALTHY,UNKNOWN",
      level: "-5",
      lang: "unknown",
    }));

    expect(parsed?.perks).toEqual([PERK_KEY.HEALTHY]);
    expect(parsed?.level).toBe(0);
    expect(parsed?.lang).toBe(localeCodes.ja);
  });

  it("parseBuildFromSearchParams は値が欠落している場合にデフォルトを使用する", () => {
    const parsed = parseBuildFromSearchParams(new URLSearchParams({
      perks: "",
    }));

    expect(parsed?.perks).toEqual([]);
    expect(parsed?.level).toBe(DEFAULT_LEVEL);
    expect(parsed?.lang).toBe(localeCodes.ja);
  });

  it("sanitizePerkKeys は重複および無効なキーを削除する", () => {
    const result = sanitizePerkKeys(["MECHANIC", "INVALID", "MECHANIC", "HEALTHY"]);
    expect(result).toEqual([PERK_KEY.MECHANIC, PERK_KEY.HEALTHY]);
  });
});
