import type { Perk } from "@/lib/perks";
import PerkIcon from "./PerkIcon";
import { Box, Circle, Float, Text, VStack } from "@chakra-ui/react";

interface Props {
  perk: Perk;
}
const PerkEntry = (props: Props) => {
  return (
    <Box position="relative">
      <Float placement="bottom-center">
        <Circle size="5" bg="gray.700" color="gray.300">
          {props.perk.pp}
        </Circle>
      </Float>
      <PerkIcon imgUrl={props.perk.iconUrl} />
    </Box>
  );
};

export default PerkEntry;