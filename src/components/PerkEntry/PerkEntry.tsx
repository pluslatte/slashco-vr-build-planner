import type { Perk, PerkKey } from "@/lib/perks";
import PerkIcon from "./PerkIcon";
import { Box, Circle, Float } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { PERKS } from "@/lib/perkData";

interface Props {
  perkKey: PerkKey;
  isSelected: boolean;
}
const PerkEntry = (props: Props) => {
  const perk: Perk = PERKS[props.perkKey];
  return (
    <Tooltip content={perk.name.en}>
      <Box position="relative">
        <Float placement="bottom-center">
          <Circle size="5" bg="gray.700" color="gray.300">
            {perk.pp}
          </Circle>
        </Float>
        <PerkIcon imgUrl={perk.iconUrl} active={props.isSelected} />
      </Box>
    </Tooltip>
  );
};

export default PerkEntry;