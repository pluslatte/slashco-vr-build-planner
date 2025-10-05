import { Box, Container, Field, Grid, GridItem, Group, NumberInput, Text } from "@chakra-ui/react"
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
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={1}>
          <Box p={4}>
            <PerkList
              selectedKeys={selectedKeys}
              onTogglePerk={onTogglePerk}
            />
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box py={4}>
            <PerkDetailList selectedKeys={selectedKeys} />
          </Box>
        </GridItem>
      </Grid>
      <Group grow p={4}>
        <PpGauge ppUsed={ppUsed} maxPp={maxPp} />
        <Field.Root>
          <Field.Label>Level</Field.Label>
          <NumberInput.Root
            value={level.toString()}
            width="200px"
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
      </Group>
    </Container >
  )
};

export default App;
