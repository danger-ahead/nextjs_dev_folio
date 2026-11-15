import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import rehypeShiki from "@shikijs/rehype";
import { data } from "../repository/DataRepository";
import { BlogPost } from "../models/DataTypes";
import type { GistEmbed } from "../components/Gist";

// lowercase words joined by hyphens, e.g. "home-network": keeps post and tag URLs SEO friendly
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

// Newest first. Throws on a bad data.json entry so `next build` fails instead of shipping a bad URL.
export function getPosts(): BlogPost[] {
  const slugs = new Set<string>();
  for (const { slug, date, tags } of data.blog) {
    if (
      !SLUG.test(slug) ||
      slugs.has(slug) ||
      !tags.every((tag) => SLUG.test(tag)) ||
      !/^\d{4}-\d{2}-\d{2}$/.test(date) ||
      isNaN(Date.parse(date))
    ) {
      throw new Error(
        `data.json blog "${slug}": slug must be unique, slug and tags lowercase-hyphenated, date YYYY-MM-DD`
      );
    }
    slugs.add(slug);
  }
  return [...data.blog].sort((a, b) => b.date.localeCompare(a.date));
}

export async function getPostContent(slug: string) {
  const mdx = fs.readFileSync(path.join("static/blog", `${slug}.mdx`), "utf8");
  const gistIds = new Set(
    [...mdx.matchAll(/<Gist\s+id=["']([a-f0-9]+)["']/gi)].map((m) => m[1])
  );
  const [source, gists] = await Promise.all([
    serialize(mdx, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        // build-time syntax colors in GitHub's dark theme, matching the gist embeds
        rehypePlugins: [
          [
            rehypeShiki,
            {
              theme: "github-dark-default",
              defaultLanguage: "text",
              fallbackLanguage: "text",
            },
          ],
        ],
      },
    }),
    getGists([...gistIds]),
  ]);
  return { source, gists };
}

// Fetched at build time so the gist's code is in the page HTML (indexable) instead of written in by a script.
async function getGists(ids: string[]): Promise<Record<string, GistEmbed>> {
  const entries = await Promise.all(
    ids.map(async (id) => {
      const res = await fetch(`https://gist.github.com/${id}.json`);
      if (!res.ok) {
        throw new Error(`Gist ${id}: gist.github.com responded ${res.status}`);
      }
      const { div, stylesheet }: GistEmbed = await res.json();
      return [id, { div, stylesheet }] as const;
    })
  );
  return Object.fromEntries(entries);
}
