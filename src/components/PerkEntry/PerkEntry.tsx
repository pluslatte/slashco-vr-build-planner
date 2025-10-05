import type { Perk } from "@/lib/perks";
import PerkIcon from "./PerkIcon";

interface Props {
  perk: Perk;
}
const PerkEntry = (props: Props) => {
  return (
    <PerkIcon imgUrl={props.perk.iconUrl} />
  );
};

export default PerkEntry;