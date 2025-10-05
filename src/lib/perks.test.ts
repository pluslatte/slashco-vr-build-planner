import { PERKS } from "./perkData";
import { PERK_KEYS } from "./perks";

it("全ての PERK_KEYS が使用されていること", () => {
  PERK_KEYS.forEach((key) => {
    expect(key).toBeDefined();
    expect(PERKS[key]).toBeDefined();
  });
});