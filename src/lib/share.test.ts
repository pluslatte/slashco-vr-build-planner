import { describe, expect, it } from "vitest";
import { buildShareSearchParams, parseBuildFromSearchParams, sanitizePerkKeys } from "./share";
import { localeCodes, PERK_KEY, type PerkKey } from "./perks";
import { DEFAULT_LEVEL, MAX_LEVEL } from "./constants";

describe("共有ユーティリティ", () => {
  describe("コンパクトエンコーディング", () => {
    it("buildShareSearchParams はコンパクトなbase64url形式を生成する", () => {
      const params = buildShareSearchParams({
        perks: [PERK_KEY.MECHANIC, PERK_KEY.HEALTHY],
        level: 10,
        lang: localeCodes.ja,
      });

      expect(params.has("b")).toBe(true);
      expect(params.get("b")).toBeTruthy();
      // コンパクト形式は短い（従来の形式より大幅に短い）
      const compactLength = params.toString().length;
      expect(compactLength).toBeLessThan(30);
    });

    it("buildShareSearchParams と parseBuildFromSearchParams はラウンドトリップする", () => {
      const original = {
        perks: [PERK_KEY.MECHANIC_3, PERK_KEY.MECHANIC, PERK_KEY.HEALTHY] as PerkKey[],
        level: 50,
        lang: localeCodes.en,
      };

      const params = buildShareSearchParams(original);
      const parsed = parseBuildFromSearchParams(params);

      expect(parsed).not.toBeNull();
      expect(parsed?.level).toBe(50);
      expect(parsed?.lang).toBe(localeCodes.en);
      // パークは順序が異なる可能性があるため、セットとして比較
      expect(new Set(parsed?.perks)).toEqual(new Set([PERK_KEY.MECHANIC_3, PERK_KEY.MECHANIC, PERK_KEY.HEALTHY]));
    });

    it("buildShareSearchParams は値をクランプする", () => {
      const params = buildShareSearchParams({
        perks: [PERK_KEY.MECHANIC],
        level: 120,
        lang: localeCodes.en,
      });

      const parsed = parseBuildFromSearchParams(params);
      expect(parsed?.level).toBe(MAX_LEVEL);
    });

    it("buildShareSearchParams は重複したパークを処理する", () => {
      const params = buildShareSearchParams({
        perks: [PERK_KEY.MECHANIC, PERK_KEY.MECHANIC, PERK_KEY.HEALTHY] as PerkKey[],
        level: 10,
        lang: localeCodes.ja,
      });

      const parsed = parseBuildFromSearchParams(params);
      expect(parsed?.perks.length).toBe(2);
      expect(new Set(parsed?.perks)).toEqual(new Set([PERK_KEY.MECHANIC, PERK_KEY.HEALTHY]));
    });

    it("buildShareSearchParams は空のパークリストを処理する", () => {
      const params = buildShareSearchParams({
        perks: [],
        level: DEFAULT_LEVEL,
        lang: localeCodes.en,
      });

      const parsed = parseBuildFromSearchParams(params);
      expect(parsed?.perks).toEqual([]);
      expect(parsed?.level).toBe(DEFAULT_LEVEL);
      expect(parsed?.lang).toBe(localeCodes.en);
    });
  });

  it("parseBuildFromSearchParams は共有パラメータが存在しない場合に null を返す", () => {
    expect(parseBuildFromSearchParams(new URLSearchParams())).toBeNull();
  });

  it("parseBuildFromSearchParams は無効なbase64urlの場合に null を返す", () => {
    const parsed = parseBuildFromSearchParams(new URLSearchParams({ b: "invalid!!!" }));
    expect(parsed).toBeNull();
  });

  it("sanitizePerkKeys は重複および無効なキーを削除する", () => {
    const result = sanitizePerkKeys(["MECHANIC", "INVALID", "MECHANIC", "HEALTHY"]);
    expect(result).toEqual([PERK_KEY.MECHANIC, PERK_KEY.HEALTHY]);
  });

  it("parseBuildFromSearchParams はサポートされていないバージョンの場合に null を返す", () => {
    // バージョン2 (未サポート) をシミュレート
    const bytes = new Uint8Array([2, 0, 0, 0, 0, 0, 1, 0]);
    const base64 = btoa(String.fromCharCode(...bytes))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');

    const params = new URLSearchParams();
    params.set("b", base64);

    const parsed = parseBuildFromSearchParams(params);
    expect(parsed).toBeNull();
  });
});
