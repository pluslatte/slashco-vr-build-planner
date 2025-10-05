import { Box, Container, Field, Grid, GridItem, Heading, NumberInput } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PERKS } from "./lib/perkData";
import PerkDetailList from "./components/PerkDetailList/PerkDetailList";
import { usePerkSelector } from "./hooks/usePerkSelector";
import { useState } from "react";
import LevelSelector from "./components/LevelSelector";

const App = () => {
  const { selectedKeys, onTogglePerk } = usePerkSelector();
  const [level, setLevel] = useState(30);

  const ppUsed = selectedKeys.reduce((total, key) => total + PERKS[key].pp, 0);
  const maxPp = Math.min(Math.floor(level / 2), 15);
  return (
    <Container maxW="4xl">
      <Box px={8} pt={4}>
        <Heading>SlashCo VR Build Planner</Heading>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box p={8}>
            <PerkList
              selectedKeys={selectedKeys}
              onTogglePerk={onTogglePerk}
            />
            <Box h={4} />
            <PpGauge ppUsed={ppUsed} maxPp={maxPp} />
            <Box h={4} />
            <LevelSelector
              level={level}
              setLevel={setLevel}
              maxPp={maxPp}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box py={4}>
            <PerkDetailList selectedKeys={selectedKeys} />
          </Box>
        </GridItem>
      </Grid>
    </Container >
  )
};

export default App;
