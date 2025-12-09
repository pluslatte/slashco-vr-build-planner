import { useMemo, useState } from "react";
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

const App = () => {
  const { selectedKeys, onTogglePerk } = usePerkSelector();
  const { level, setLevel, lang, setLang } = useSettings();
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    const params = buildShareSearchParams({ perks: selectedKeys, level, lang });
    return `${window.location.origin}/share?${params.toString()}`;
  }, [selectedKeys, level, lang]);

  const handleCopyShare = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopyStatus("copied");
      setTimeout(() => setCopyStatus("idle"), 2000);
    } catch (error) {
      console.error("Failed to copy share link:", error);
      setCopyStatus("error");
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
            leftIcon={<LuShare />}
            onClick={handleCopyShare}
          >
            {lang === localeCodes.en ? "Copy share link" : "共有リンクをコピー"}
          </Button>
          {shareUrl && (
            <Text mt={2} fontSize="sm" wordBreak="break-all">
              <Link href={shareUrl} color="blue.200" target="_blank" rel="noopener noreferrer">
                {shareUrl}
                <Box as={LuExternalLink} aria-hidden="true" display="inline" ml={1} />
              </Link>
            </Text>
          )}
          <Text mt={1} fontSize="sm" color={copyStatus === "error" ? "red.300" : "gray.400"}>
            {copyStatus === "copied"
              ? (lang === localeCodes.en ? "Copied!" : "コピーしました")
              : copyStatus === "error"
                ? (lang === localeCodes.en
                  ? "Failed to copy. Please copy the link manually."
                  : "コピーに失敗しました。手動でリンクを選択してコピーしてください。")
                : (lang === localeCodes.en
                  ? "Open the link to view your perks with an auto-generated OGP image."
                  : "リンクを開くと選択したパーク構成が表示され、OGP画像としてシェアできます。")}
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
