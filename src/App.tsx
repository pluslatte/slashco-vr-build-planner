import { Box, Container, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PERKS } from "./lib/perkData";
import PerkDetailList from "./components/PerkDetailList/PerkDetailList";
import { usePerkSelector } from "./hooks/usePerkSelector";
import { useState } from "react";
import LevelSelector from "./components/LevelSelector";
import { LuExternalLink } from "react-icons/lu";

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
            <Box h={4} />
            <Text color="gray.500">各種表記は以下のサイトを参考にしています。</Text>
            <Link pr={2} color="gray.500" href="https://slashco-vr.fandom.com/wiki/Perks" target="_blank" rel="noopener noreferrer">SlashCo VR Wiki<LuExternalLink /></Link>
            <Link color="gray.500" href="https://wikiwiki.jp/slashco/PERKS" target="_blank" rel="noopener noreferrer">SlashCoVR Wiki*<LuExternalLink /></Link>
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
