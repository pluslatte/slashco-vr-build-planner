import { PERKS } from "./perkData";
import { localeCodes } from "./perks";

describe("perkData", () => {
  it("PERKS の全ての項目の name が空でないこと", () => {
    Object.values(localeCodes).forEach((locale) => {
      Object.values(PERKS).forEach((perk) => {
        expect(perk.name[locale]).not.toBe("");
      });
    });
  });

  it("effectsPositive, effectsNegative の両方が空である PERKS の項目がないこと", () => {
    Object.values(PERKS).forEach((perk) => {
      expect(
        perk.effectsPositive.length === 0 &&
        perk.effectsNegative.length === 0
      ).toBe(false);
    });
  });

  it("effectsPositive について、各効果の localizedText がすべて空でないこと", () => {
    Object.values(localeCodes).forEach((locale) => {
      Object.values(PERKS).forEach((perk) => {
        perk.effectsPositive.forEach((effect) => {
          expect(effect[locale]).not.toBe("");
        });
      });
    });
  });

  it("effectsNegative について、各効果の localizedText がすべて空でないこと", () => {
    Object.values(localeCodes).forEach((locale) => {
      Object.values(PERKS).forEach((perk) => {
        perk.effectsNegative.forEach((effect) => {
          expect(effect[locale]).not.toBe("");
        });
      });
    });
  });
});