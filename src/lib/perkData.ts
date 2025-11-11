import type { Perk, PerkKey } from "./perks";

export const PERKS: Record<PerkKey, Perk> = {
  MECHANIC: {
    name: { en: "Mechanic I", ja: "メカニック" },
    effectsPositive: [
      {
        en: "Fueling speed is increased by 50%.",
        ja: "給油速度が50％増加する"
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
        ja: "消費アイテムの回復量が50％増加する"
      },
      {
        en: "You can consume Costco Frozen Pizza for slight healing.",
        ja: "冷凍ピザを食べることができ、わずかに回復できる"
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
        ja: "ヘリコプター着陸時、数十秒間の加速とわずかな回復を得る"
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
        ja: "スラッシャーの足音がより大きく聞こえる"
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
        ja: "ガラス瓶を食べることができ、わずかに回復できる"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_uncle.png",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  PANIC_SENSE: {
    name: { en: "Panic Sense", ja: "パニック・センス" },
    effectsPositive: [
      {
        en: "After 20 minutes of the round have passed, gain the ability to see a brief aura of the closest Fuel, Battery or Document every minute.",
        ja: "ラウンド開始から20分経過後、毎分最も近い燃料、バッテリー、または機密文書を少しの間感知できる"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_panicsense.webp",
    pp: 1,
    creditsToUnlock: 0,
    levelToUnlock: 1,
  },
  MECHANIC_2: {
    name: { en: "Mechanic II", ja: "メカニックII" },
    effectsPositive: [
      {
        en: "The difficulty of Battery Insertion is decreased.",
        ja: "バッテリー挿入の難易度が下がる"
      },
      {
        en: "Failing Battery Insertion does not hurt you.",
        ja: "バッテリー挿入失敗時にダメージを受けない"
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
        ja: "依頼に関連するすべてのアイテムがかすかに光る"
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
        en: "Your movement speed is slightly increased the lower your health is while not in direct line of sight of a Slasher.",
        ja: "スラッシャーの視界にない場合、体力が低いほど移動速度がわずかに上昇する"
      }
    ],
    effectsNegative: [
      {
        en: "Your vision will worsen slightly more the lower your health is.",
        ja: "体力が低いほど視界がわずかに悪化する"
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
        ja: "移動速度が遅くなる効果の影響を受けなくなる"
      }
    ],
    effectsNegative: [
      {
        en: "Effects which increase your movement speed will deplete 25% faster.",
        ja: "移動速度を増加させる効果の減りが25%速くなる"
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
        ja: "懐中電灯を使用していない間、徐々に暗闇での視力を高める"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_shadow.png",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  MUKBANG_CHAMPION: {
    name: { en: "Mukbang Champion", ja: "大食いチャンピオン" },
    effectsPositive: [
      {
        en: "Healing from a consumable item will be transferred to all players in a 6 meter radius.",
        ja: "回復アイテムからの回復効果が、半径6メートル以内のすべてのプレイヤーに転送される",
      },
    ],
    effectsNegative: [
      {
        en: "If transferred to at least 1 player, personal healing will be drastically reduced.",
        ja: "回復効果が1人以上のプレイヤーに転送された場合、自身の回復効果が大幅に減少する",
      },
    ],
    iconUrl: "perk_mukbang.webp",
    pp: 2,
    creditsToUnlock: 150,
    levelToUnlock: 3,
  },
  MERCHANT: {
    name: { en: "Merchant", ja: "商人" },
    effectsPositive: [
      {
        en: "Increase Item Buyback rate to 50%.",
        ja: "アイテムの買取率を50%に引き上げる"
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
        ja: "自身の足音の大きさが50%減少する"
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
        ja: "消費アイテムの回復量が50％増加する"
      },
      {
        en: "Receive slow health regeneration when under 50% health.",
        ja: "体力が50%以下になると、ゆっくりと体力が自動回復する"
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
        ja: "最大体力が少し増加する"
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
        ja: "マスターロック607が壊れる確率が低くなる"
      },
      {
        en: "Gain a small CREDIT and EXP reward when successfully opening a locked door.",
        ja: "閉ざされたドアを開けると、少量のクレジットと経験値が得られる"
      }
    ],
    effectsNegative: [
      {
        en: "Credits gained from Objectives are slightly reduced.",
        ja: "目標達成によって得られるクレジット報酬がわずかに減少する"
      }
    ],
    iconUrl: "perk_mcnallyhands.png",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  FIRST_RESPONDER: {
    name: { en: "First Responder", ja: "第一対応者" },
    effectsPositive: [
      {
        en: "Gain the ability to heal a player in CRITICAL condition. This action has a cooldown of 5 minutes, and rewards you with CREDITS and EXP.",
        ja: "瀕死状態のプレイヤーを回復させる能力を得る。この行動には5分のクールダウンがあり、クレジットと経験値が得られる"
      }
    ],
    effectsNegative: [
      {
        en: "All non-lethal damage will become lethal.",
        ja: "すべての非致死ダメージが致死ダメージに変わる"
      }
    ],
    iconUrl: "perk_firstresponder.webp",
    pp: 2,
    creditsToUnlock: 300,
    levelToUnlock: 5,
  },
  MECHANIC_3: {
    name: { en: "Mechanic III", ja: "メカニックIII" },
    effectsPositive: [
      {
        en: "Pouring Fuel after the Battery has been inserted will not cause a fail-start.",
        ja: "バッテリーを挿入後に燃料を注いでも騒音が鳴らなくなる"
      },
      {
        en: "Failing Fuel Pouring does not create a loud noise.",
        ja: "燃料注入に失敗しても大きな音が出なくなる"
      },
      {
        en: "Credits gained from Objectives are doubled.",
        ja: "目標達成によって得られるクレジット報酬が2倍になる"
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
        ja: "ロッカーの出入りが完全に無音になる"
      },
      {
        en: "The loudness of your footsteps is reduced 50%.",
        ja: "自身の足音の大きさが50%減少する"
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
        ja: "スラッシャーをスタンさせると少しの間加速を得る"
      },
      {
        en: "Blinding Slashers will reward you with a CREDIT and EXP bonus.",
        ja: "スラッシャーをスタンさせるとボーナスEXPとクレジットが手に入る"
      }
    ],
    effectsNegative: [
      {
        en: "Increases the difficulty of Fuel Pouring and Battery Insertion.",
        ja: "燃料注入とバッテリー挿入の難易度が上がる"
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
        ja: "消耗アイテムの効果時間減少が50%遅くなる"
      }
    ],
    effectsNegative: [
      {
        en: "Consumable items heal 50% less.",
        ja: "回復アイテムの効果が50%減少する"
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
        ja: "機密文書からかすかな音が聞こえるようになる"
      },
      {
        en: "Collecting Documents will award you with double CREDITS and EXP.",
        ja: "機密文書を入手した際の経験値とクレジットが倍になる"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_account.png",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  DEITY_SWINDLER: {
    name: { en: "Deity Swindler", ja: "神を騙す者" },
    effectsPositive: [
      {
        en: "Gain the ability to USE the Deathword, causing it to break, giving the closest player a temporary PASSIVE Deathword effect.",
        ja: "死のお守りを使用して最も近いプレイヤーに一時的なパッシブの死のお守り効果を与える能力を得る。この行動で死のお守りは破壊される"
      }
    ],
    effectsNegative: [
      {
        en: "You can no longer be revived by the Deathword.",
        ja: "あなたは死のお守りで復活できない"
      }
    ],
    iconUrl: "perk_deity.webp",
    pp: 3,
    creditsToUnlock: 500,
    levelToUnlock: 10,
  },
  STEALTH_CAMO: {
    name: { en: "Stealth Camo", ja: "ステルス・カモフラージュ" },
    effectsPositive: [
      {
        en: "Slashers cannot spot you as easily.",
        ja: "スラッシャーに見つかりにくくなる"
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
        ja: "最初に踏んだトラバサミを無効化し、破壊する"
      },
      {
        en: "Bear Traps will emit a faint glow.",
        ja: "トラバサミがかすかに光って見える"
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
        en: "Increases overall movement speed for the first 5 minutes of the round.",
        ja: "ラウンド開始から5分間、すべての行動速度が上がる"
      }
    ],
    effectsNegative: [
      {
        en: "Heavy items will slow you down more.",
        ja: "重いアイテムを持つとより動きが遅くなる"
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
        ja: "懐中電灯の照射距離が2倍になる"
      },
      {
        en: "Flashlight toggling will not be heard by Slashers.",
        ja: "懐中電灯の点灯・消灯音がスラッシャーに聞こえなくなる"
      }
    ],
    effectsNegative: [
      {
        en: "Flashlight beam is narrowed by 50%.",
        ja: "懐中電灯の光線が50%細くなる"
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
        ja: "一度だけ致命的なダメージを受けても生存できる"
      }
    ],
    effectsNegative: [
      {
        en: "All healing is drastically reduced.",
        ja: "すべての回復効果が大幅に減少する"
      },
      {
        en: "The ability is inactive once the helicopter is set to arrive.",
        ja: "ヘリコプターの到着が確定するとこの能力は無効になる"
      }
    ],
    iconUrl: "perk_alive.png",
    pp: 3,
    creditsToUnlock: 800,
    levelToUnlock: 15,
  },
  SCAPEGOAT: {
    name: { en: "Scapegoat", ja: "スケープゴート" },
    effectsPositive: [
      {
        en: "While in SATED condition and within 6 meters of a player, any damage inflicted on them will be transferred to you as non-lethal damage.",
        ja: "健康状態かつ6メートル以内にプレイヤーがいる場合、そのプレイヤーが受けるダメージが非致死ダメージとしてあなたに転送される"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_scapegoat.webp",
    pp: 3,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  GROUCH_BEHAVIOR: {
    name: { en: "Grouch Behavior", ja: "GROUCH化" },
    effectsPositive: [
      {
        en: "While hiding in a locker, you gain small passive health regeneration.",
        ja: "ロッカーに隠れている間、わずかに体力が自動回復する"
      },
      {
        en: "Every 4 minutes you can take a sip of Fuel for a short boost to overall movement speed.",
        ja: "4分ごとに燃料を一口飲むことで、すべての行動速度が短時間上昇する"
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
        ja: "重いアイテムを持っていても動きが遅くならない"
      }
    ],
    effectsNegative: [
      {
        en: "All incoming damage is increased by 50%.",
        ja: "すべての被ダメージが50％増加する"
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
        ja: "バルカン・ブーストの効果終了後に動きが鈍くならなくなる"
      }
    ],
    effectsNegative: [
      {
        en: "The Fueling Speed bonus of Balkan Boost is decreased.",
        ja: "バルカン・ブーストがもつ燃料注入速度の増加効果が減少する"
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
        ja: "すべての被ダメージが50％減少する"
      }
    ],
    effectsNegative: [
      {
        en: "The loudness of your footsteps is increased by 50%.",
        ja: "自身の足音の大きさが50％増加する"
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
        ja: "ロッカーに入っているところをスラッシャーが初めて確認した際、殺されずに済む"
      }
    ],
    effectsNegative: [],
    iconUrl: "perk_john.png",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  },
  FREAKY_DOCTOR: {
    name: { en: "Freaky Doctor", ja: "異常なドクター" },
    effectsPositive: [
      {
        en: "All players within a 20 meter radius: Gain minor damage resistance.",
        ja: "半径20メートル以内のすべてのプレイヤー: 少しのダメージ耐性"
      },
      {
        en: "All players within a 20 meter radius: Receive 25% more healing.",
        ja: "半径20メートル以内のすべてのプレイヤー: 回復量が25％増加"
      },
      {
        en: "All players within a 20 meter radius: Deplete effects 10% slower.",
        ja: "半径20メートル以内のすべてのプレイヤー: 効果の消耗速度が10％低下"
      },
      {
        en: "All players within a 20 meter radius: Fuel Generators 25% faster.",
        ja: "半径20メートル以内のすべてのプレイヤー: ジェネレーターの給油速度が25％向上"
      },
      {
        en: "Gain a tiny CREDIT and EXP bonus when a Player affected by your Freak completes an Objective.",
        ja: "あなたの Freak の影響を受けたプレイヤーが目標を達成すると、少量のCREDITとEXPボーナスを獲得する"
      }
    ],
    effectsNegative: [
      {
        en: "All incoming damage is doubled.",
        ja: "受けるすべてのダメージが倍増する"
      },
      {
        en: "Reduces movement speed by 20%.",
        ja: "移動速度が20％低下する"
      }
    ],
    iconUrl: "perk_freaky.webp",
    pp: 4,
    creditsToUnlock: 1200,
    levelToUnlock: 20,
  }
} as const;
