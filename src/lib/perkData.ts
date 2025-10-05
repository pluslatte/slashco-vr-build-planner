import type { Perk, PerkKey } from "./perks";

export const PERKS: Record<PerkKey, Perk> = {
  MECHANIC: {
    name: { en: "Mechanic I", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Fueling speed is increased by 50%.",
        ja: "Fueling speed is increased by 50%."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_mech1.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  HEALTHY: {
    name: { en: "Healthy I", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Consumable items heal 50% more.",
        ja: "Consumable items heal 50% more."
      },
      {
        en: "You can consume Costco Frozen Pizza for slight healing.",
        ja: "You can consume Costco Frozen Pizza for slight healing."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_healthy1.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  ADRENALINE_RUSH: {
    name: { en: "Adrenaline Rush", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "When the helicopter arrives, minor healing and a brief speed boost will be applied.",
        ja: "When the helicopter arrives, minor healing and a brief speed boost will be applied."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_adr.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  HYPERPERCEPTIVE: {
    name: { en: "Hyperperceptive", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "The footsteps of Slashers are louder to you.",
        ja: "The footsteps of Slashers are louder to you."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_hyper.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  UNCLE_SINK: {
    name: { en: "Uncle Sink", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "You can consume Glass Bottles for slight healing.",
        ja: "You can consume Glass Bottles for slight healing."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_uncle.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  MECHANIC_2: {
    name: { en: "Mechanic II", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "The difficulty of Battery Insertion is decreased.",
        ja: "The difficulty of Battery Insertion is decreased."
      },
      {
        en: "Failing Battery Insertion does not hurt you.",
        ja: "Failing Battery Insertion does not hurt you."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_mech2.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  BOUNTY_HUNTER: {
    name: { en: "Bounty Hunter", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "All items related to Informal Assignments will faintly glow.",
        ja: "All items related to Informal Assignments will faintly glow."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_treasure.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  CLOSE_ENCOUNTER: {
    name: { en: "Close Encounter", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Your movement speed is slightly increased the lower your health is.",
        ja: "Your movement speed is slightly increased the lower your health is."
      }
    ],
    effectsNegative: [
      {
        en: "Heavy items will slow you down more drastically the lower your health is.",
        ja: "Heavy items will slow you down more drastically the lower your health is."
      }
    ],
    iconUrl: "perk_encounter.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  SPEED_ADDICT: {
    name: { en: "Speed Addict", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "You will no longer be affected by effects which slow down your movement speed.",
        ja: "You will no longer be affected by effects which slow down your movement speed."
      }
    ],
    effectsNegative: [
      {
        en: "Effects which increase your movement speed will deplete 25% faster.",
        ja: "Effects which increase your movement speed will deplete 25% faster."
      }
    ],
    iconUrl: "perk_addict.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  SHADOWBORN: {
    name: { en: "Shadowborn", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Increase the ability to see in the dark.",
        ja: "Increase the ability to see in the dark."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_shadow.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  MERCHANT: {
    name: { en: "Merchant", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Increase Item Buyback rate to 50%.",
        ja: "Increase Item Buyback rate to 50%."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_merchant.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  LIGHTFOOT: {
    name: { en: "Lightfoot I", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "The loudness of your footsteps is reduced 50%.",
        ja: "The loudness of your footsteps is reduced 50%."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_lightfoot.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  HEALTHY_2: {
    name: { en: "Healthy II", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Consumable items heal 50% more.",
        ja: "Consumable items heal 50% more."
      },
      {
        en: "Receive slow health regeneration when under 50% health.",
        ja: "Receive slow health regeneration when under 50% health."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_healthy2.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  HEAVY: {
    name: { en: "Heavy", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Your maximum health is slightly increased.",
        ja: "Your maximum health is slightly increased."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_heavy.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  MCNALLY_HANDS: {
    name: { en: "McNally Hands", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "The Master Lock 607 will have a lower chance of breaking when used.",
        ja: "The Master Lock 607 will have a lower chance of breaking when used."
      },
      {
        en: "Gain a small CREDIT and EXP reward when successfully opening a locked door.",
        ja: "Gain a small CREDIT and EXP reward when successfully opening a locked door."
      }
    ],
    effectsNegative: [
      {
        en: "Credits gained from Objectives are slightly reduced.",
        ja: "Credits gained from Objectives are slightly reduced."
      }
    ],
    iconUrl: "perk_mcnallyhands.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  MECHANIC_3: {
    name: { en: "Mechanic III", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Pouring Fuel after the Battery has been inserted will not cause a fail-start.",
        ja: "Pouring Fuel after the Battery has been inserted will not cause a fail-start."
      },
      {
        en: "Failing Fuel Pouring does not create a loud noise.",
        ja: "Failing Fuel Pouring does not create a loud noise."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_mech3.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  LIGHTFOOT_2: {
    name: { en: "Lightfoot II", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Entering and exiting Lockers is completely silent.",
        ja: "Entering and exiting Lockers is completely silent."
      },
      {
        en: "The loudness of your footsteps is reduced 50%.",
        ja: "The loudness of your footsteps is reduced 50%."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_lightfoot2.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  BATTER_UP: {
    name: { en: "Batter Up", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Gain a brief speed boost when blinding a Slasher.",
        ja: "Gain a brief speed boost when blinding a Slasher."
      },
      {
        en: "Blinding Slashers will reward you with a CREDIT and EXP bonus.",
        ja: "Blinding Slashers will reward you with a CREDIT and EXP bonus."
      }
    ],
    effectsNegative: [
      {
        en: "Increases the difficulty of Fuel Pouring and Battery Insertion.",
        ja: "Increases the difficulty of Fuel Pouring and Battery Insertion."
      }
    ],
    iconUrl: "perk_batterup.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  GLUTTON: {
    name: { en: "Glutton", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "All consumable item effects deplete 50% slower.",
        ja: "All consumable item effects deplete 50% slower."
      }
    ],
    effectsNegative: [
      {
        en: "Consumable items heal 50% less.",
        ja: "Consumable items heal 50% less."
      }
    ],
    iconUrl: "perk_glutton.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  ACCOUNTANT: {
    name: { en: "Accountant", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Gain the ability to hear faint sounds coming from Documents.",
        ja: "Gain the ability to hear faint sounds coming from Documents."
      },
      {
        en: "Collecting Documents will award you with double CREDITS and EXP.",
        ja: "Collecting Documents will award you with double CREDITS and EXP."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_account.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  STEALTH_CAMO: {
    name: { en: "Stealth Camo", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Slashers cannot spot you as easily.",
        ja: "Slashers cannot spot you as easily."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_stealth.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  RABBIT_FEET: {
    name: { en: "Rabbit Feet", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "The first Bear Trap you would trigger gets immediately disarmed.",
        ja: "The first Bear Trap you would trigger gets immediately disarmed."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_rabbit.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  ATHLETE: {
    name: { en: "Athlete", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Increases overall movement speed for the first 8 minutes of the round.",
        ja: "Increases overall movement speed for the first 8 minutes of the round."
      }
    ],
    effectsNegative: [
      {
        en: "Heavy items will slow you down more.",
        ja: "Heavy items will slow you down more."
      }
    ],
    iconUrl: "perk_athlete.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  EXTERMINATOR_FLASHLIGHT: {
    name: { en: "Exterminator (Flashlight)", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Flashlight range is doubled.",
        ja: "Flashlight range is doubled."
      },
      {
        en: "Flashlight toggling will not be heard by Slashers.",
        ja: "Flashlight toggling will not be heard by Slashers."
      }
    ],
    effectsNegative: [
      {
        en: "Flashlight beam is narrowed by 50%.",
        ja: "Flashlight beam is narrowed by 50%."
      }
    ],
    iconUrl: "perk_flashlight.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  ALIVE_HARD: {
    name: { en: "Alive Hard", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Gain the ability to survive certain death only once.",
        ja: "Gain the ability to survive certain death only once."
      }
    ],
    effectsNegative: [
      {
        en: "All healing is drastically reduced.",
        ja: "All healing is drastically reduced."
      },
      {
        en: "The ability is inactive once the helicopter is set to arrive.",
        ja: "The ability is inactive once the helicopter is set to arrive."
      }
    ],
    iconUrl: "perk_alive.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  GROUCH_BEHAVIOR: {
    name: { en: "Grouch Behavior", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "While hiding in a locker, you gain small passive health regeneration.",
        ja: "While hiding in a locker, you gain small passive health regeneration."
      },
      {
        en: "Every 4 minutes you can take a sip of Fuel for a short boost to overall movement speed.",
        ja: "Every 4 minutes you can take a sip of Fuel for a short boost to overall movement speed."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_itsmyturntoplayxbox.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  EXTREMELY_BUFF: {
    name: { en: "Extremely Buff", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "Carrying heavy items no longer slows you down.",
        ja: "Carrying heavy items no longer slows you down."
      }
    ],
    effectsNegative: [
      {
        en: "All incoming damage is increased by 50%.",
        ja: "All incoming damage is increased by 50%."
      }
    ],
    iconUrl: "perk_zyzz.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  BALKAN_WARRIOR: {
    name: { en: "Balkan Warrior", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "The after-effect of Balkan Boost no longer cripples you.",
        ja: "The after-effect of Balkan Boost no longer cripples you."
      }
    ],
    effectsNegative: [
      {
        en: "The Fueling Speed bonus of Balkan Boost is decreased.",
        ja: "The Fueling Speed bonus of Balkan Boost is decreased."
      }
    ],
    iconUrl: "perk_balkan.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  LEAD_BELLY: {
    name: { en: "Lead Belly", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "All incoming damage is reduced by 50%.",
        ja: "All incoming damage is reduced by 50%."
      }
    ],
    effectsNegative: [
      {
        en: "The loudness of your footsteps is increased by 50%.",
        ja: "The loudness of your footsteps is increased by 50%."
      }
    ],
    iconUrl: "perk_lead.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  SOLID_JOHN: {
    name: { en: "Solid John", ja: "PLACEHOLDER" },
    effectsPositive: [
      {
        en: "The first time the Slasher inspects the locker you're in, they are guaranteed not to kill you.",
        ja: "The first time the Slasher inspects the locker you're in, they are guaranteed not to kill you."
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_john.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
} as const;