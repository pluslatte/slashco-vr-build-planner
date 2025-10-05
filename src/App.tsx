import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PerkKey, type Perk } from "./lib/perks";
import { PERKS } from "./lib/perkData";

const App = () => {
  const selectedPerks: Array<Perk> = [
    PERKS[PerkKey.ADRENALINE_RUSH],
    PERKS[PerkKey.LIGHTFOOT],
    PERKS[PerkKey.ATHLETE],
    PERKS[PerkKey.ALIVE_HARD],
    PERKS[PerkKey.EXTREMELY_BUFF],
  ];
  const level = 30;
  const ppUsed = selectedPerks.reduce((total, perk) => total + perk.pp, 0);
  const maxPp = Math.min(Math.floor(level / 2), 15);
  return (
    <Container maxW="4xl">
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box p={4}>
            <PerkList />
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
          <Text>Details</Text>
        </GridItem>
      </Grid>
    </Container>
  )
};

export default App;
