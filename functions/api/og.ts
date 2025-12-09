import { PERKS } from "../../src/lib/perkData";
import { localeCodes } from "../../src/lib/perks";
import { DEFAULT_LEVEL, parseBuildFromSearchParams } from "../../src/lib/share";

const escapeXml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return char;
    }
  });

export const onRequest = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const build = parseBuildFromSearchParams(url.searchParams) ?? {
    perks: [],
    level: DEFAULT_LEVEL,
    lang: localeCodes.ja,
  };

  const perkNames = build.perks.map((key) => PERKS[key]?.name[build.lang] ?? key);
  const ppUsed = build.perks.reduce((total, key) => total + PERKS[key].pp, 0);
  const maxPp = Math.min(Math.floor(build.level / 2), 15);

  const headline = build.lang === localeCodes.ja
    ? "SlashCo VR パーク構成"
    : "SlashCo VR Build Planner";

  const summaryLine = build.lang === localeCodes.ja
    ? `レベル ${build.level} / PP ${ppUsed} / ${maxPp}`
    : `Level ${build.level} / PP ${ppUsed} / ${maxPp}`;

  const list = perkNames.length > 0 ? perkNames : [
    build.lang === localeCodes.ja ? "パーク未選択" : "No perks selected",
  ];

  const maxVisible = 10;
  const visiblePerks = list.slice(0, maxVisible);
  if (list.length > maxVisible) {
    const rest = list.length - maxVisible;
    visiblePerks.push(build.lang === localeCodes.ja ? `他 ${rest} 件` : `+${rest} more`);
  }

  const perkLines = visiblePerks.map((text, index) => {
    const y = 240 + index * 36;
    return `<text x="64" y="${y}" font-size="28" fill="#e2e8f0">${escapeXml(text)}</text>`;
  }).join("");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630" role="img">
    <defs>
      <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#0f172a" />
        <stop offset="100%" stop-color="#1f2937" />
      </linearGradient>
    </defs>
    <rect width="1200" height="630" rx="24" fill="url(#bg)" />
    <text x="64" y="120" font-size="46" font-weight="700" fill="#f8fafc">${escapeXml(headline)}</text>
    <text x="64" y="170" font-size="30" fill="#a5b4fc">${escapeXml(summaryLine)}</text>
    ${perkLines}
  </svg>`;

  return new Response(svg, {
    headers: {
      "content-type": "image/svg+xml",
      "cache-control": "public, max-age=600",
    },
  });
};
