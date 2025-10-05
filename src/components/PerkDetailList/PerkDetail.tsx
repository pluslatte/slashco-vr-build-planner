import type { Perk } from "@/lib/perks";
import { Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  perk: Perk;
}
const PerkDetail = (props: Props) => {
  return (
    <React.Fragment>
      <Text fontWeight="bold">{props.perk.name.en}</Text>
      {props.perk.effectsPositive.map((eff, i) => (
        <Text key={i} fontSize="sm" color="green.300">+ {eff.en}</Text>
      ))}
      {props.perk.effectsNegative.map((eff, i) => (
        <Text key={`neg-${i}`} fontSize="sm" color="red.300">- {eff.en}</Text>
      ))}
    </React.Fragment>
  );
};

export default PerkDetail;