import type { Perk, PerkKey } from "./perks";

export const PERKS: Record<PerkKey, Perk> = {
  MECHANIC: {
    name: { en: "Mechanic I", ja: "メカニック" },
    effectsPositive: [
      {
        en: "Fueling speed is increased by 50%.",
        ja: "給油速度が+50％"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_mech1.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  HEALTHY: {
    name: { en: "Healthy I", ja: "健康" },
    effectsPositive: [
      {
        en: "Consumable items heal 50% more.",
        ja: "消費アイテムの回復量が50％アップ。"
      },
      {
        en: "You can consume Costco Frozen Pizza for slight healing.",
        ja: "冷凍ピザが食べられるようになる。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_healthy1.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  ADRENALINE_RUSH: {
    name: { en: "Adrenaline Rush", ja: "アドレナリン・ラッシュ" },
    effectsPositive: [
      {
        en: "When the helicopter arrives, minor healing and a brief speed boost will be applied.",
        ja: "ヘリコプター着陸時に数十秒間小加速し、僅かな回復、軽度の視界効果を得る。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_adr.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  HYPERPERCEPTIVE: {
    name: { en: "Hyperperceptive", ja: "知覚過敏" },
    effectsPositive: [
      {
        en: "The footsteps of Slashers are louder to you.",
        ja: "Slasherの足音が大きくなる。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_hyper.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  UNCLE_SINK: {
    name: { en: "Uncle Sink", ja: "沈む流し台" },
    effectsPositive: [
      {
        en: "You can consume Glass Bottles for slight healing.",
        ja: "ボトルが食べる事が出来、僅かに回復できる。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_uncle.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  MECHANIC_2: {
    name: { en: "Mechanic II", ja: "メカニックII" },
    effectsPositive: [
      {
        en: "The difficulty of Battery Insertion is decreased.",
        ja: "バッテリー挿入の難易度が下がる。"
      },
      {
        en: "Failing Battery Insertion does not hurt you.",
        ja: "バッテリー挿入失敗時のダメージを無効化。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_mech2.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  BOUNTY_HUNTER: {
    name: { en: "Bounty Hunter", ja: "バウンティハンター" },
    effectsPositive: [
      {
        en: "All items related to Informal Assignments will faintly glow.",
        ja: "依頼に関連するすべてのアイテムがかすかに光る。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_treasure.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  CLOSE_ENCOUNTER: {
    name: { en: "Close Encounter", ja: "近接遭遇" },
    effectsPositive: [
      {
        en: "Your movement speed is slightly increased the lower your health is.",
        ja: "体力が低いほど移動速度が少し速くなる。"
      }
    ],
    effectsNegative: [
      {
        en: "Heavy items will slow you down more drastically the lower your health is.",
        ja: "体力が低いほど、重いアイテムを持った時の移動速度が極端に遅くなる。"
      }
    ],
    iconUrl: "perk_encounter.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  SPEED_ADDICT: {
    name: { en: "Speed Addict", ja: "スピード狂" },
    effectsPositive: [
      {
        en: "You will no longer be affected by effects which slow down your movement speed.",
        ja: "移動速度が遅くなる効果の影響を受けなくなる。"
      }
    ],
    effectsNegative: [
      {
        en: "Effects which increase your movement speed will deplete 25% faster.",
        ja: "移動速度増加の効果時間の減りが25%速くなる。"
      }
    ],
    iconUrl: "perk_addict.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  SHADOWBORN: {
    name: { en: "Shadowborn", ja: "影産まれ" },
    effectsPositive: [
      {
        en: "Increase the ability to see in the dark.",
        ja: "懐中電灯を使用していない間、徐々に暗闇での視力を高める。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_shadow.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  MERCHANT: {
    name: { en: "Merchant", ja: "商人" },
    effectsPositive: [
      {
        en: "Increase Item Buyback rate to 50%.",
        ja: "アイテムの買取率を50%に引き上げる。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_merchant.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  LIGHTFOOT: {
    name: { en: "Lightfoot I", ja: "軽い足取り" },
    effectsPositive: [
      {
        en: "The loudness of your footsteps is reduced 50%.",
        ja: "自身の足音の大きさが50%減少する。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_lightfoot.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  HEALTHY_2: {
    name: { en: "Healthy II", ja: "健康II" },
    effectsPositive: [
      {
        en: "Consumable items heal 50% more.",
        ja: "消費アイテムの回復量が50％アップ。"
      },
      {
        en: "Receive slow health regeneration when under 50% health.",
        ja: "体力が50%以下になると、20秒毎に僅かに体力が回復する。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_healthy2.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  HEAVY: {
    name: { en: "Heavy", ja: "ヘビー" },
    effectsPositive: [
      {
        en: "Your maximum health is slightly increased.",
        ja: "最大体力が少し増加。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_heavy.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  MCNALLY_HANDS: {
    name: { en: "McNally Hands", ja: "マックナリー・ハンズ" },
    effectsPositive: [
      {
        en: "The Master Lock 607 will have a lower chance of breaking when used.",
        ja: "マスターロック607を使用した際に壊れづらくなる。"
      },
      {
        en: "Gain a small CREDIT and EXP reward when successfully opening a locked door.",
        ja: "開錠した際に少しの経験値とクレジットを得る。"
      }
    ],
    effectsNegative: [
      {
        en: "Credits gained from Objectives are slightly reduced.",
        ja: "目標達成によって得られるクレジット報酬がわずかに減少する。"
      }
    ],
    iconUrl: "perk_mcnallyhands.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  MECHANIC_3: {
    name: { en: "Mechanic III", ja: "メカニックIII" },
    effectsPositive: [
      {
        en: "Pouring Fuel after the Battery has been inserted will not cause a fail-start.",
        ja: "バッテリーを挿入後に燃料を注いでも騒音が鳴らない。"
      },
      {
        en: "Failing Fuel Pouring does not create a loud noise.",
        ja: "燃料注入に失敗しても大きな音が出なくなる。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_mech3.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  LIGHTFOOT_2: {
    name: { en: "Lightfoot II", ja: "軽い足取りII" },
    effectsPositive: [
      {
        en: "Entering and exiting Lockers is completely silent.",
        ja: "ロッカーの出入りが完全に無音になる。"
      },
      {
        en: "The loudness of your footsteps is reduced 50%.",
        ja: "自身の足音の大きさが50%減少する。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_lightfoot2.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  BATTER_UP: {
    name: { en: "Batter Up", ja: "バッターアップ" },
    effectsPositive: [
      {
        en: "Gain a brief speed boost when blinding a Slasher.",
        ja: "スラッシャーをスタンさせると僅かに回復し、短時間加速する。"
      },
      {
        en: "Blinding Slashers will reward you with a CREDIT and EXP bonus.",
        ja: "スタン成功時にボーナスEXPとクレジットが手に入る。"
      }
    ],
    effectsNegative: [
      {
        en: "Increases the difficulty of Fuel Pouring and Battery Insertion.",
        ja: "給油速度が低下し、バッテリースキルチェックが難化する。"
      }
    ],
    iconUrl: "perk_batterup.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  GLUTTON: {
    name: { en: "Glutton", ja: "グルトン" },
    effectsPositive: [
      {
        en: "All consumable item effects deplete 50% slower.",
        ja: "消耗アイテムの効果時間が50%減少するのが遅くなる。"
      }
    ],
    effectsNegative: [
      {
        en: "Consumable items heal 50% less.",
        ja: "回復アイテムの効果が50%減少する。"
      }
    ],
    iconUrl: "perk_glutton.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  ACCOUNTANT: {
    name: { en: "Accountant", ja: "会計士" },
    effectsPositive: [
      {
        en: "Gain the ability to hear faint sounds coming from Documents.",
        ja: "機密文書からかすかな音が聞こえるようになる。"
      },
      {
        en: "Collecting Documents will award you with double CREDITS and EXP.",
        ja: "機密文書を入手した際の経験値とクレジットが倍になる。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_account.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  STEALTH_CAMO: {
    name: { en: "Stealth Camo", ja: "ステルス・カモフラージュ" },
    effectsPositive: [
      {
        en: "Slashers cannot spot you as easily.",
        ja: "Slasherに見つかりにくくなる。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_stealth.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  RABBIT_FEET: {
    name: { en: "Rabbit Feet", ja: "ウサギの足取り" },
    effectsPositive: [
      {
        en: "The first Bear Trap you would trigger gets immediately disarmed.",
        ja: "最初に踏んだトラバサミを無効化し、破壊できる。"
      },
      {
        en: "Bear Traps will emit a faint glow.",
        ja: "トラバサミがかすかに光る。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_rabbit.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  ATHLETE: {
    name: { en: "Athlete", ja: "アスリート" },
    effectsPositive: [
      {
        en: "Increases overall movement speed for the first 8 minutes of the round.",
        ja: "ラウンド開始から8分間、全ての行動速度が上がる。"
      }
    ],
    effectsNegative: [
      {
        en: "Heavy items will slow you down more.",
        ja: "重いアイテムを持つとより遅くなる。"
      }
    ],
    iconUrl: "perk_athlete.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  EXTERMINATOR_FLASHLIGHT: {
    name: { en: "Exterminator Flashlight", ja: "エクスタミネーター用の懐中電灯" },
    effectsPositive: [
      {
        en: "Flashlight range is doubled.",
        ja: "懐中電灯の照射距離が2倍になる。"
      },
      {
        en: "Flashlight toggling will not be heard by Slashers.",
        ja: "懐中電灯の点灯・消灯音がスラッシャーに聞こえなくなる。"
      }
    ],
    effectsNegative: [
      {
        en: "Flashlight beam is narrowed by 50%.",
        ja: "懐中電灯の光線が50%狭くなる。"
      }
    ],
    iconUrl: "perk_flashlight.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  ALIVE_HARD: {
    name: { en: "Alive Hard", ja: "窮地" },
    effectsPositive: [
      {
        en: "Gain the ability to survive certain death only once.",
        ja: "致死量のダメージを受けた際、1度だけダメージを無効化した後5秒間無敵になり、付近のスラッシャーにスタン・自身に加速効果を付与する。"
      }
    ],
    effectsNegative: [
      {
        en: "All healing is drastically reduced.",
        ja: "消費アイテムの回復量が大幅に低下する。"
      },
      {
        en: "The ability is inactive once the helicopter is set to arrive.",
        ja: "脱出フェーズに入ると、効果が無効化される。"
      }
    ],
    iconUrl: "perk_alive.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  GROUCH_BEHAVIOR: {
    name: { en: "Grouch Behavior", ja: "GROUCH化" },
    effectsPositive: [
      {
        en: "While hiding in a locker, you gain small passive health regeneration.",
        ja: "ロッカーへ隠れた際に徐々に回復"
      },
      {
        en: "Every 4 minutes you can take a sip of Fuel for a short boost to overall movement speed.",
        ja: "ガソリンを飲むと10秒間5m/s加速"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_itsmyturntoplayxbox.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  EXTREMELY_BUFF: {
    name: { en: "Extremely Buff", ja: "エクストリーム・バフ" },
    effectsPositive: [
      {
        en: "Carrying heavy items no longer slows you down.",
        ja: "重いアイテムを持っていても動きが遅くならない。"
      }
    ],
    effectsNegative: [
      {
        en: "All incoming damage is increased by 50%.",
        ja: "すべての被ダメージが50%増加"
      }
    ],
    iconUrl: "perk_zyzz.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  BALKAN_WARRIOR: {
    name: { en: "Balkan Warrior", ja: "バルカン・ウォリアー" },
    effectsPositive: [
      {
        en: "The after-effect of Balkan Boost no longer cripples you.",
        ja: "バルカン・ブーストの後遺症で動けなくならない。"
      }
    ],
    effectsNegative: [
      {
        en: "The Fueling Speed bonus of Balkan Boost is decreased.",
        ja: "バルカン・ブーストの注油速度ボーナスが減少する。"
      }
    ],
    iconUrl: "perk_balkan.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  LEAD_BELLY: {
    name: { en: "Lead Belly", ja: "リード・ベリー" },
    effectsPositive: [
      {
        en: "All incoming damage is reduced by 50%.",
        ja: "受けるダメージが50%減少する。"
      }
    ],
    effectsNegative: [
      {
        en: "The loudness of your footsteps is increased by 50%.",
        ja: "足音の大きさが50%増加する。"
      }
    ],
    iconUrl: "perk_lead.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  SOLID_JOHN: {
    name: { en: "Solid John", ja: "ソリッド・ジョン" },
    effectsPositive: [
      {
        en: "The first time the Slasher inspects the locker you're in, they are guaranteed not to kill you.",
        ja: "Slasherが自分が入っているロッカーを初めて見られた際にだけ殺されない。"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_john.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
} as const;
