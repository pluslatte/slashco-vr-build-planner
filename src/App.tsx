import { Box, Container, Grid, GridItem, Heading, Link, Text, ButtonGroup, Button } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PERKS } from "./lib/perkData";
import PerkDetailList from "./components/PerkDetailList/PerkDetailList";
import { usePerkSelector } from "./hooks/usePerkSelector";
import { useState, useEffect } from "react";
import LevelSelector from "./components/LevelSelector";
import { LuExternalLink } from "react-icons/lu";

const SETTINGS_STORAGE_KEY = "slashco-vr-settings";

const App = () => {
  const { selectedKeys, onTogglePerk } = usePerkSelector();
  const [level, setLevel] = useState(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.level || 30;
      }
    } catch (error) {
      console.error("Failed to load settings from localStorage:", error);
    }
    return 30;
  });
  const [lang, setLang] = useState<'en' | 'ja'>(() => {
    try {
      const stored = localStorage.getItem(SETTINGS_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.lang || 'ja';
      }
    } catch (error) {
      console.error("Failed to load settings from localStorage:", error);
    }
    return 'ja';
  });

  useEffect(() => {
    try {
      localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify({ level, lang }));
    } catch (error) {
      console.error("Failed to save settings to localStorage:", error);
    }
  }, [level, lang]);

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
            <Box display="flex" alignItems="center" mb={2}>
              <LevelSelector
                level={level}
                setLevel={setLevel}
                maxPp={maxPp}
              />
              <ButtonGroup ml={4} size="sm" attached>
                <Button
                  variant={lang === 'ja' ? 'solid' : 'outline'}
                  onClick={() => setLang('ja')}
                >日本語</Button>
                <Button
                  variant={lang === 'en' ? 'solid' : 'outline'}
                  onClick={() => setLang('en')}
                >English</Button>
              </ButtonGroup>
            </Box>
            <PerkList
              selectedKeys={selectedKeys}
              onTogglePerk={onTogglePerk}
              lang={lang}
            />
            <Box h={4} />
            <PpGauge ppUsed={ppUsed} maxPp={maxPp} />
            <Box h={4} />
            <Link pr={2} color="gray.500" href="https://virtualkemomimi.net/@pluslatte" target="_blank" rel="noopener noreferrer">連絡先: pluslatte<LuExternalLink /></Link>
            <Text color="gray.500">パークの内容、画像は以下のサイトより</Text>
            <Link pr={2} color="gray.500" href="https://slashco-vr.fandom.com/wiki/Perks" target="_blank" rel="noopener noreferrer">SlashCo VR Wiki<LuExternalLink /></Link>
            <Link color="gray.500" href="https://wikiwiki.jp/slashco/PERKS" target="_blank" rel="noopener noreferrer">SlashCoVR Wiki*<LuExternalLink /></Link>
          </Box>
        </GridItem>
        <GridItem colSpan={1}>
          <Box py={4}>
            <PerkDetailList selectedKeys={selectedKeys} lang={lang} />
          </Box>
        </GridItem>
      </Grid>
    </Container >
  )
};

export default App;
