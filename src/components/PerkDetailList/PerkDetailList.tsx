import { PERKS } from "@/lib/perkData";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PerkDetail from "./PerkDetail";
import type { PerkKey } from "@/lib/perks";

interface Props {
  selectedKeys: Array<PerkKey>;
};
const PerkDetailList = (props: Props) => {
  return (
    <React.Fragment>
      <Text>Details</Text>
      {props.selectedKeys.map((key) => {
        const perk = PERKS[key];
        return (
          <Box key={key} mb={3}>
            <PerkDetail perk={perk} />
          </Box>
        );
      })}
    </React.Fragment>
  )
};

export default PerkDetailList;