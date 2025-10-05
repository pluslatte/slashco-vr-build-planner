import { Box, Container, Grid, GridItem, Text } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PerkKey } from "./lib/perks";
import { PERKS } from "./lib/perkData";

const App = () => {
  const selectedKeys: Array<PerkKey> = [
    PerkKey.ADRENALINE_RUSH,
    PerkKey.LIGHTFOOT,
    PerkKey.ATHLETE,
    PerkKey.ALIVE_HARD,
    PerkKey.EXTREMELY_BUFF,
  ];
  const level = 30;
  const ppUsed = selectedKeys.reduce((total, key) => total + PERKS[key].pp, 0);
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
          <Text>+:</Text>
          {selectedKeys.map((key) => {
            const perk = PERKS[key];
            return (
              <Box key={key} mb={3}>
                <Text fontWeight="bold">{perk.name.en}</Text>
                {perk.effectsPositive.map((eff, i) => (
                  <Text key={i} fontSize="sm" color="green.300">+ {eff.en}</Text>
                ))}
                {perk.effectsNegative.map((eff, i) => (
                  <Text key={`neg-${i}`} fontSize="sm" color="red.300">- {eff.en}</Text>
                ))}
              </Box>
            );
          })}
          <Text>-:</Text>
        </GridItem>
      </Grid>
    </Container>
  )
};

export default App;
