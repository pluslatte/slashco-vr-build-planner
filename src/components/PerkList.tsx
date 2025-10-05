import { PERKS } from "@/lib/perkData";
import { PerkKey } from "@/lib/perks";
import { Grid } from "@chakra-ui/react";
import PerkEntry from "./PerkEntry/PerkEntry";

const PerkList = () => (
  <Grid templateColumns="repeat(5, 1fr)" gap="6">
    <PerkEntry perk={PERKS[PerkKey.MECHANIC]} />
    <PerkEntry perk={PERKS[PerkKey.HEALTHY]} />
    <PerkEntry perk={PERKS[PerkKey.ADRENALINE_RUSH]} />
    <PerkEntry perk={PERKS[PerkKey.HYPERPERCEPTIVE]} />
    <PerkEntry perk={PERKS[PerkKey.UNCLE_SINK]} />

    <PerkEntry perk={PERKS[PerkKey.MECHANIC_2]} />
    <PerkEntry perk={PERKS[PerkKey.BOUNTY_HUNTER]} />
    <PerkEntry perk={PERKS[PerkKey.MCNALLY_HANDS]} />
    <PerkEntry perk={PERKS[PerkKey.SPEED_ADDICT]} />
    <PerkEntry perk={PERKS[PerkKey.SHADOWBORN]} />

    <PerkEntry perk={PERKS[PerkKey.MERCHANT]} />
    <PerkEntry perk={PERKS[PerkKey.LIGHTFOOT]} />
    <PerkEntry perk={PERKS[PerkKey.HEALTHY_2]} />
    <PerkEntry perk={PERKS[PerkKey.HEAVY]} />
    <PerkEntry perk={PERKS[PerkKey.CLOSE_ENCOUNTER]} />

    <PerkEntry perk={PERKS[PerkKey.MECHANIC_3]} />
    <PerkEntry perk={PERKS[PerkKey.LIGHTFOOT_2]} />
    <PerkEntry perk={PERKS[PerkKey.BATTER_UP]} />
    <PerkEntry perk={PERKS[PerkKey.GLUTTON]} />
    <PerkEntry perk={PERKS[PerkKey.ACCOUNTANT]} />

    <PerkEntry perk={PERKS[PerkKey.STEALTH_CAMO]} />
    <PerkEntry perk={PERKS[PerkKey.RABBIT_FEET]} />
    <PerkEntry perk={PERKS[PerkKey.ATHLETE]} />
    <PerkEntry perk={PERKS[PerkKey.EXTERMINATOR_FLASHLIGHT]} />
    <PerkEntry perk={PERKS[PerkKey.ALIVE_HARD]} />

    <PerkEntry perk={PERKS[PerkKey.GROUCH_BEHAVIOR]} />
    <PerkEntry perk={PERKS[PerkKey.EXTREMELY_BUFF]} />
    <PerkEntry perk={PERKS[PerkKey.BALKAN_WARRIOR]} />
    <PerkEntry perk={PERKS[PerkKey.LEAD_BELLY]} />
    <PerkEntry perk={PERKS[PerkKey.SOLID_JOHN]} />
  </Grid>
);

export default PerkList;