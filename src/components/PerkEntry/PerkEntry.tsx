import type { Locale, Perk, PerkKey } from "@/lib/perks";
import PerkIcon from "./PerkIcon";
import { Box, Circle, Float } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import { PERKS } from "@/lib/perkData";

interface Props {
  perkKey: PerkKey;
  isSelected: boolean;
  onToggle: (key: PerkKey) => void;
  lang: Locale;
}
const PerkEntry = (props: Props) => {
  const perk: Perk = PERKS[props.perkKey];
  return (
    <Tooltip content={perk.name[props.lang]}>
      <Box position="relative">
        <Float placement="bottom-center">
          <Circle size="5" bg="gray.700" color="gray.300">
            {perk.pp}
          </Circle>
        </Float>
        <button onClick={() => props.onToggle(props.perkKey)} style={{ all: "unset" }}>
          <PerkIcon imgUrl={perk.iconUrl} active={props.isSelected} />
        </button>
      </Box>
    </Tooltip>
  );
};

export default PerkEntry;