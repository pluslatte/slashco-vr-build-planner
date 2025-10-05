import type { Perk } from "@/lib/perks";
import PerkIcon from "./PerkIcon";
import { Box, Circle, Float } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";

interface Props {
  perk: Perk;
}
const PerkEntry = (props: Props) => {
  return (
    <Tooltip content={props.perk.name.en}>
      <Box position="relative">
        <Float placement="bottom-center">
          <Circle size="5" bg="gray.700" color="gray.300">
            {props.perk.pp}
          </Circle>
        </Float>
        <PerkIcon imgUrl={props.perk.iconUrl} />
      </Box>
    </Tooltip>
  );
};

export default PerkEntry;