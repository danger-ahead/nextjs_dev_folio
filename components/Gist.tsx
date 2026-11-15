// What gist.github.com/<id>.json returns: the same markup and stylesheet GitHub's <script> embed writes.
export type GistEmbed = { div: string; stylesheet: string };

// Usage in a blog .mdx: <Gist id="<hex id from the gist URL>" />. The embed is fetched at build time (utils/Blog.ts).
export default function Gist({ id, embed }: { id: string; embed?: GistEmbed }) {
  if (!embed) {
    return (
      <a href={`https://gist.github.com/${id}`} target="_blank" rel="noreferrer">
        View gist
      </a>
    );
  }

  return (
    <>
      <link rel="stylesheet" href={embed.stylesheet} precedence="default" />
      <div dangerouslySetInnerHTML={{ __html: embed.div }} />
    </>
  );
}
