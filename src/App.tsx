import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Container, Heading, Link, Text, ButtonGroup, Button, SimpleGrid } from "@chakra-ui/react"
import PerkList from "./components/PerkList"
import PpGauge from "./components/PpGauge";
import { PERKS } from "./lib/perkData";
import PerkDetailList from "./components/PerkDetailList/PerkDetailList";
import { usePerkSelector } from "./hooks/usePerkSelector";
import { useSettings } from "./hooks/useSettings";
import LevelSelector from "./components/LevelSelector";
import { LuExternalLink, LuShare } from "react-icons/lu";
import { localeCodes } from "./lib/perks";
import { buildShareSearchParams } from "./lib/share";

const COPY_STATUS_RESET_DELAY = 2000;

const App = () => {
  const { selectedKeys, onTogglePerk } = usePerkSelector();
  const { level, setLevel, lang, setLang } = useSettings();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");
  const copyResetRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const params = buildShareSearchParams({ perks: selectedKeys, level, lang });
    return `${window.location.origin}/share?${params.toString()}`;
  }, [selectedKeys, level, lang]);

  const shareStatusMessage = useMemo(() => {
    if (copyStatus === "copied") {
      return lang === localeCodes.en ? "Copied!" : "コピーしました";
    }
    if (copyStatus === "error") {
      return lang === localeCodes.en
        ? "Failed to copy. Please copy the link manually."
        : "コピーに失敗しました。手動でリンクを選択してコピーしてください。";
    }
    return lang === localeCodes.en
      ? "Open the link to view your perks with an auto-generated OGP image."
      : "リンクを開くと選択したパーク構成が表示され、OGP画像としてシェアできます。";
  }, [copyStatus, lang]);

  useEffect(() => {
    return () => {
      if (copyResetRef.current) {
        clearTimeout(copyResetRef.current);
      }
    };
  }, []);

  const handleCopyShare = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("copied");
      if (copyResetRef.current) {
        clearTimeout(copyResetRef.current);
      }
      copyResetRef.current = setTimeout(() => setCopyStatus("idle"), COPY_STATUS_RESET_DELAY);
    } catch (error) {
      console.error("Failed to copy share link:", error);
      setCopyStatus("error");
      if (copyResetRef.current) {
        clearTimeout(copyResetRef.current);
      }
      copyResetRef.current = setTimeout(() => setCopyStatus("idle"), COPY_STATUS_RESET_DELAY);
    }
  };

  const ppUsed = selectedKeys.reduce((total, key) => total + PERKS[key].pp, 0);
  const maxPp = Math.min(Math.floor(level / 2), 15);
  return (
    <Container maxW="6xl">
      <Box px={8} pt={4}>
        <Heading>SlashCo VR Build Planner</Heading>
      </Box>
      <SimpleGrid gap={6} minChildWidth="360px">
        <Box p={8}>
          <Box display="flex" alignItems="center" mb={2}>
            <LevelSelector
              level={level}
              setLevel={setLevel}
              maxPp={maxPp}
            />
            <ButtonGroup ml={4} size="sm" attached>
              <Button
                variant={lang === localeCodes.ja ? 'solid' : 'outline'}
                onClick={() => setLang(localeCodes.ja)}
              >日本語</Button>
              <Button
                variant={lang === localeCodes.en ? 'solid' : 'outline'}
                onClick={() => setLang(localeCodes.en)}
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
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyShare}
            aria-label={
              copyStatus === "copied"
                ? (lang === localeCodes.en ? "Link copied" : "リンクをコピーしました")
                : undefined
            }
          >
            <Box as={LuShare} aria-hidden="true" display="inline" mr={2} />
            {lang === localeCodes.en ? "Copy share link" : "共有リンクをコピー"}
          </Button>
          <Text
            mt={1}
            fontSize="sm"
            color={copyStatus === "error" ? "red.300" : "gray.400"}
            aria-live="polite"
          >
            {shareStatusMessage}
          </Text>
          <Box h={4} />
          <Link pr={2} color="gray.500" href="https://virtualkemomimi.net/@pluslatte" target="_blank" rel="noopener noreferrer">連絡先: pluslatte<LuExternalLink /></Link>
          <Text color="gray.500">パーク画像は以下のサイトより。翻訳は不正確かもしれません。</Text>
          <Link pr={2} color="gray.500" href="https://slashco-vr.fandom.com/wiki/Perks" target="_blank" rel="noopener noreferrer">SlashCo VR Wiki<LuExternalLink /></Link>
        </Box>
        <Box py={4}>
          <PerkDetailList selectedKeys={selectedKeys} lang={lang} />
        </Box>
      </SimpleGrid>
    </Container >
  )
};

export default App;
