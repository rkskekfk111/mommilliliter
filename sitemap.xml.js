import { BRANDS, GUIDES, SITE_URL } from "../lib/data";

function generateSiteMap() {
  const staticPaths = [
    "", // 홈
    "brands",
    "guide",
    "about",
    "contact",
    "privacy",
    "terms",
    "disclaimer",
  ];

  const brandPaths = BRANDS.map((b) => `brands/${b.id}`);
  const guidePaths = GUIDES.map((g) => `guide/${g.slug}`);

  const allPaths = [...staticPaths, ...brandPaths, ...guidePaths];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPaths
  .map((path) => {
    return `  <url>
    <loc>${SITE_URL}/${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "" ? "1.0" : "0.7"}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  // getServerSideProps가 응답을 직접 작성하므로 컴포넌트는 렌더링되지 않음
  return null;
}
