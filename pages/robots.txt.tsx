import type { GetServerSideProps } from "next";
import { getSiteUrl } from "../utils/SiteUrl";

function createRobotsTxt(siteUrl: string): string {
  return `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${siteUrl}/sitemap.xml
`;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=86400, stale-while-revalidate=604800"
  );
  res.write(createRobotsTxt(getSiteUrl(req.headers)));
  res.end();

  return { props: {} };
};

export default function RobotsTxt() {
  return null;
}
