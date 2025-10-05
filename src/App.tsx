import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PerkKey } from "./lib/perks";
import { PERKS } from "./lib/perkData";
import PerkDetailList from "./components/PerkDetailList/PerkDetailList";
import { useState } from "react";

const App = () => {
  const [selectedKeys, setSelectedKeys] = useState<Array<PerkKey>>([]);

  const level = 30;
  const ppUsed = selectedKeys.reduce((total, key) => total + PERKS[key].pp, 0);
  const maxPp = Math.min(Math.floor(level / 2), 15);
  return (
    <Container maxW="4xl">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box p={4}>
            <PerkList
              selectedKeys={selectedKeys}
              setSelectedKeys={setSelectedKeys}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Text>Item Section</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text>Level: {level}</Text>
          <PpGauge ppUsed={ppUsed} maxPp={maxPp} />
        </GridItem>
        <GridItem colSpan={2}>
          <PerkDetailList selectedKeys={selectedKeys} />
        </GridItem>
      </Grid>
    </Container>
  )
};

export default App;
