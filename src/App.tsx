import { Box, Container, Field, Grid, GridItem, Heading, NumberInput } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PERKS } from "./lib/perkData";
import PerkDetailList from "./components/PerkDetailList/PerkDetailList";
import { usePerkSelector } from "./hooks/usePerkSelector";
import { useState } from "react";

const App = () => {
  const { selectedKeys, onTogglePerk } = usePerkSelector();
  const [level, setLevel] = useState(30);

  const ppUsed = selectedKeys.reduce((total, key) => total + PERKS[key].pp, 0);
  const maxPp = Math.min(Math.floor(level / 2), 15);
  return (
    <Container maxW="4xl">
      <Box p={4}>
        <Heading>SlashCo VR Build Planner</Heading>
      </Box>
      <Grid templateColumns="repeat(2, 0fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box p={4}>
            <PerkList
              selectedKeys={selectedKeys}
              onTogglePerk={onTogglePerk}
            />
            <Box h={4} />
            <PpGauge ppUsed={ppUsed} maxPp={maxPp} />
            <Box h={4} />
            <Field.Root>
              <Field.Label>Level</Field.Label>
              <NumberInput.Root
                value={level.toString()}
                width="100px"
                min={0}
                max={100}
                onValueChange={(e) => {
                  const num = parseInt(e.value);
                  if (!isNaN(num)) {
                    setLevel(num)
                  } else {
                    setLevel(0)
                  }
                }}
              >
                <NumberInput.Label />
                <NumberInput.Control />
                <NumberInput.Input />
              </NumberInput.Root>
              <Field.HelperText>Max PP: {maxPp}</Field.HelperText>
            </Field.Root>
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
