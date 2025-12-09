import { buildShareSearchParams, DEFAULT_LEVEL, parseBuildFromSearchParams } from "../src/lib/share";
import { PERKS } from "../src/lib/perkData";
import { localeCodes } from "../src/lib/perks";

const escapeHtml = (value: string) =>
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
  const parsed = parseBuildFromSearchParams(url.searchParams) ?? {
    perks: [],
    level: DEFAULT_LEVEL,
    lang: localeCodes.ja,
  };

  const params = buildShareSearchParams(parsed);
  const origin = `${url.protocol}//${url.host}`;
  const appUrl = `${origin}/?${params.toString()}`;
  const imageUrl = `${origin}/api/og?${params.toString()}`;

  const perkNames = parsed.perks
    .map((key) => PERKS[key]?.name[parsed.lang])
    .filter((name): name is string => Boolean(name));
  const perkSummary = perkNames.slice(0, 6).join(", ");

  const title = "SlashCo VR Build Planner";
  const description = perkSummary
    ? `Lv.${parsed.level} | ${perkSummary}`
    : (parsed.lang === localeCodes.en
      ? `Lv.${parsed.level} build`
      : `Lv.${parsed.level} のパーク構成`);
  const redirectText = parsed.lang === localeCodes.en
    ? "Redirecting to the shared build..."
    : "共有リンクにリダイレクトしています...";
  const clickHereText = parsed.lang === localeCodes.en ? "Click here" : "こちら";

  const html = `<!doctype html>
<html lang="${parsed.lang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:image" content="${escapeHtml(imageUrl)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${escapeHtml(url.toString())}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta http-equiv="refresh" content="0; url=${escapeHtml(appUrl)}" />
</head>
<body style="background:#0f172a; color:#e2e8f0; font-family: sans-serif;">
  <p>${escapeHtml(redirectText)} <a href="${escapeHtml(appUrl)}">${escapeHtml(clickHereText)}</a></p>
  <script>window.location.replace(${JSON.stringify(appUrl)});</script>
</body>
</html>`;

  return new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
};
