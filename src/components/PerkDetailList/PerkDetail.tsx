import type { Perk } from "@/lib/perks";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import PerkIcon from "../PerkEntry/PerkIcon";

interface Props {
  perk: Perk;
}
const PerkDetail = (props: Props) => {
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={0} alignItems="center">
      <GridItem colSpan={1}>
        <Box pl={1}>
          <PerkIcon imgUrl={props.perk.iconUrl} active={false} size="md" />
        </Box>
      </GridItem>
      <GridItem colSpan={5}>
        <Text fontWeight="bold">{props.perk.name.en}</Text>
        {props.perk.effectsPositive.map((eff, i) => (
          <Text key={i} fontSize="sm" color="green.300">+ {eff.en}</Text>
        ))}
        {props.perk.effectsNegative.map((eff, i) => (
          <Text key={`neg-${i}`} fontSize="sm" color="red.300">- {eff.en}</Text>
        ))}
      </GridItem>
    </Grid>
  );
};

export default PerkDetail;