import { PERKS } from "@/lib/perkData";
import { PerkKey } from "@/lib/perks";
import { Grid } from "@chakra-ui/react";
import PerkEntry from "./PerkEntry/PerkEntry";

interface Props {
  selectedKeys: Array<PerkKey>;
  onTogglePerk: (key: PerkKey) => void;
};
const PerkList = (props: Props) => (
  <Grid templateColumns="repeat(5, 0fr)" gap="6">
    <PerkEntry perkKey={PerkKey.MECHANIC} isSelected={props.selectedKeys.includes(PerkKey.MECHANIC)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.HEALTHY} isSelected={props.selectedKeys.includes(PerkKey.HEALTHY)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.ADRENALINE_RUSH} isSelected={props.selectedKeys.includes(PerkKey.ADRENALINE_RUSH)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.HYPERPERCEPTIVE} isSelected={props.selectedKeys.includes(PerkKey.HYPERPERCEPTIVE)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.UNCLE_SINK} isSelected={props.selectedKeys.includes(PerkKey.UNCLE_SINK)} onToggle={props.onTogglePerk} />

    <PerkEntry perkKey={PerkKey.MECHANIC_2} isSelected={props.selectedKeys.includes(PerkKey.MECHANIC_2)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.BOUNTY_HUNTER} isSelected={props.selectedKeys.includes(PerkKey.BOUNTY_HUNTER)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.MCNALLY_HANDS} isSelected={props.selectedKeys.includes(PerkKey.MCNALLY_HANDS)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.SPEED_ADDICT} isSelected={props.selectedKeys.includes(PerkKey.SPEED_ADDICT)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.SHADOWBORN} isSelected={props.selectedKeys.includes(PerkKey.SHADOWBORN)} onToggle={props.onTogglePerk} />

    <PerkEntry perkKey={PerkKey.MERCHANT} isSelected={props.selectedKeys.includes(PerkKey.MERCHANT)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.LIGHTFOOT} isSelected={props.selectedKeys.includes(PerkKey.LIGHTFOOT)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.HEALTHY_2} isSelected={props.selectedKeys.includes(PerkKey.HEALTHY_2)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.HEAVY} isSelected={props.selectedKeys.includes(PerkKey.HEAVY)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.CLOSE_ENCOUNTER} isSelected={props.selectedKeys.includes(PerkKey.CLOSE_ENCOUNTER)} onToggle={props.onTogglePerk} />

    <PerkEntry perkKey={PerkKey.MECHANIC_3} isSelected={props.selectedKeys.includes(PerkKey.MECHANIC_3)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.LIGHTFOOT_2} isSelected={props.selectedKeys.includes(PerkKey.LIGHTFOOT_2)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.BATTER_UP} isSelected={props.selectedKeys.includes(PerkKey.BATTER_UP)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.GLUTTON} isSelected={props.selectedKeys.includes(PerkKey.GLUTTON)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.ACCOUNTANT} isSelected={props.selectedKeys.includes(PerkKey.ACCOUNTANT)} onToggle={props.onTogglePerk} />

    <PerkEntry perkKey={PerkKey.STEALTH_CAMO} isSelected={props.selectedKeys.includes(PerkKey.STEALTH_CAMO)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.RABBIT_FEET} isSelected={props.selectedKeys.includes(PerkKey.RABBIT_FEET)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.ATHLETE} isSelected={props.selectedKeys.includes(PerkKey.ATHLETE)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.EXTERMINATOR_FLASHLIGHT} isSelected={props.selectedKeys.includes(PerkKey.EXTERMINATOR_FLASHLIGHT)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.ALIVE_HARD} isSelected={props.selectedKeys.includes(PerkKey.ALIVE_HARD)} onToggle={props.onTogglePerk} />

    <PerkEntry perkKey={PerkKey.GROUCH_BEHAVIOR} isSelected={props.selectedKeys.includes(PerkKey.GROUCH_BEHAVIOR)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.EXTREMELY_BUFF} isSelected={props.selectedKeys.includes(PerkKey.EXTREMELY_BUFF)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.BALKAN_WARRIOR} isSelected={props.selectedKeys.includes(PerkKey.BALKAN_WARRIOR)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.LEAD_BELLY} isSelected={props.selectedKeys.includes(PerkKey.LEAD_BELLY)} onToggle={props.onTogglePerk} />
    <PerkEntry perkKey={PerkKey.SOLID_JOHN} isSelected={props.selectedKeys.includes(PerkKey.SOLID_JOHN)} onToggle={props.onTogglePerk} />
  </Grid>
);

export default PerkList;