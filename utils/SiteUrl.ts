import type { IncomingHttpHeaders } from "http";

function firstHeaderValue(value: string | string[] | undefined): string {
  const headerValue = Array.isArray(value) ? value[0] : value;

  return headerValue?.split(",")[0].trim() ?? "";
}

function normalizeSiteUrl(value: string): string {
  const url = /^https?:\/\//i.test(value) ? value : `https://${value}`;

  return new URL(url).origin;
}

export function getSiteUrl(headers: IncomingHttpHeaders): string {
  const configuredUrl =
    process.env.NEXT_PUBLIC_BASE_URL?.trim() ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();

  if (configuredUrl) {
    return normalizeSiteUrl(configuredUrl);
  }

  const host =
    firstHeaderValue(headers["x-forwarded-host"]) ||
    firstHeaderValue(headers.host) ||
    "localhost:3000";
  const protocol =
    firstHeaderValue(headers["x-forwarded-proto"]) ||
    (host.startsWith("localhost") ? "http" : "https");

  return normalizeSiteUrl(`${protocol}://${host}`);
}
