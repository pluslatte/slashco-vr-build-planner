import { PERKS } from "@/lib/perkData";
import { PerkKey } from "@/lib/perks";
import { Grid } from "@chakra-ui/react";
import PerkEntry from "./PerkEntry/PerkEntry";

interface Props {
  selectedKeys: Array<PerkKey>;
  setSelectedKeys: (keys: Array<PerkKey>) => void;
};
const PerkList = (props: Props) => (
  <Grid templateColumns="repeat(5, 0fr)" gap="6">
    <PerkEntry perkKey={PerkKey.MECHANIC} isSelected={props.selectedKeys.includes(PerkKey.MECHANIC)} />
    <PerkEntry perkKey={PerkKey.HEALTHY} isSelected={props.selectedKeys.includes(PerkKey.HEALTHY)} />
    <PerkEntry perkKey={PerkKey.ADRENALINE_RUSH} isSelected={props.selectedKeys.includes(PerkKey.ADRENALINE_RUSH)} />
    <PerkEntry perkKey={PerkKey.HYPERPERCEPTIVE} isSelected={props.selectedKeys.includes(PerkKey.HYPERPERCEPTIVE)} />
    <PerkEntry perkKey={PerkKey.UNCLE_SINK} isSelected={props.selectedKeys.includes(PerkKey.UNCLE_SINK)} />

    <PerkEntry perkKey={PerkKey.MECHANIC_2} isSelected={props.selectedKeys.includes(PerkKey.MECHANIC_2)} />
    <PerkEntry perkKey={PerkKey.BOUNTY_HUNTER} isSelected={props.selectedKeys.includes(PerkKey.BOUNTY_HUNTER)} />
    <PerkEntry perkKey={PerkKey.MCNALLY_HANDS} isSelected={props.selectedKeys.includes(PerkKey.MCNALLY_HANDS)} />
    <PerkEntry perkKey={PerkKey.SPEED_ADDICT} isSelected={props.selectedKeys.includes(PerkKey.SPEED_ADDICT)} />
    <PerkEntry perkKey={PerkKey.SHADOWBORN} isSelected={props.selectedKeys.includes(PerkKey.SHADOWBORN)} />

    <PerkEntry perkKey={PerkKey.MERCHANT} isSelected={props.selectedKeys.includes(PerkKey.MERCHANT)} />
    <PerkEntry perkKey={PerkKey.LIGHTFOOT} isSelected={props.selectedKeys.includes(PerkKey.LIGHTFOOT)} />
    <PerkEntry perkKey={PerkKey.HEALTHY_2} isSelected={props.selectedKeys.includes(PerkKey.HEALTHY_2)} />
    <PerkEntry perkKey={PerkKey.HEAVY} isSelected={props.selectedKeys.includes(PerkKey.HEAVY)} />
    <PerkEntry perkKey={PerkKey.CLOSE_ENCOUNTER} isSelected={props.selectedKeys.includes(PerkKey.CLOSE_ENCOUNTER)} />

    <PerkEntry perkKey={PerkKey.MECHANIC_3} isSelected={props.selectedKeys.includes(PerkKey.MECHANIC_3)} />
    <PerkEntry perkKey={PerkKey.LIGHTFOOT_2} isSelected={props.selectedKeys.includes(PerkKey.LIGHTFOOT_2)} />
    <PerkEntry perkKey={PerkKey.BATTER_UP} isSelected={props.selectedKeys.includes(PerkKey.BATTER_UP)} />
    <PerkEntry perkKey={PerkKey.GLUTTON} isSelected={props.selectedKeys.includes(PerkKey.GLUTTON)} />
    <PerkEntry perkKey={PerkKey.ACCOUNTANT} isSelected={props.selectedKeys.includes(PerkKey.ACCOUNTANT)} />

    <PerkEntry perkKey={PerkKey.STEALTH_CAMO} isSelected={props.selectedKeys.includes(PerkKey.STEALTH_CAMO)} />
    <PerkEntry perkKey={PerkKey.RABBIT_FEET} isSelected={props.selectedKeys.includes(PerkKey.RABBIT_FEET)} />
    <PerkEntry perkKey={PerkKey.ATHLETE} isSelected={props.selectedKeys.includes(PerkKey.ATHLETE)} />
    <PerkEntry perkKey={PerkKey.EXTERMINATOR_FLASHLIGHT} isSelected={props.selectedKeys.includes(PerkKey.EXTERMINATOR_FLASHLIGHT)} />
    <PerkEntry perkKey={PerkKey.ALIVE_HARD} isSelected={props.selectedKeys.includes(PerkKey.ALIVE_HARD)} />

    <PerkEntry perkKey={PerkKey.GROUCH_BEHAVIOR} isSelected={props.selectedKeys.includes(PerkKey.GROUCH_BEHAVIOR)} />
    <PerkEntry perkKey={PerkKey.EXTREMELY_BUFF} isSelected={props.selectedKeys.includes(PerkKey.EXTREMELY_BUFF)} />
    <PerkEntry perkKey={PerkKey.BALKAN_WARRIOR} isSelected={props.selectedKeys.includes(PerkKey.BALKAN_WARRIOR)} />
    <PerkEntry perkKey={PerkKey.LEAD_BELLY} isSelected={props.selectedKeys.includes(PerkKey.LEAD_BELLY)} />
    <PerkEntry perkKey={PerkKey.SOLID_JOHN} isSelected={props.selectedKeys.includes(PerkKey.SOLID_JOHN)} />
  </Grid>
);

export default PerkList;