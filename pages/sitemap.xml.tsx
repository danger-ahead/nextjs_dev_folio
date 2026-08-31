import type { GetServerSideProps } from "next";
import { getSiteUrl } from "../utils/SiteUrl";

const publicRoutes = [
  "/",
  "/about",
  "/experience",
  "/projects",
  "/contact",
  "/projects/flutter_dictionary/privacy-policy",
  "/projects/nearby_chat/privacy-policy",
];

function escapeXml(value: string): string {
  return value.replace(/[<>&'"]/g, (character) => {
    const entities: Record<string, string> = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      "'": "&apos;",
      '"': "&quot;",
    };

    return entities[character];
  });
}

function createSitemap(siteUrl: string): string {
  const urls = publicRoutes
    .map((route) => {
      const location = escapeXml(new URL(route, `${siteUrl}/`).toString());

      return `  <url>\n    <loc>${location}</loc>\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800"
  );
  res.write(createSitemap(getSiteUrl(req.headers)));
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
