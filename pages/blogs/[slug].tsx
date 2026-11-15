import Head from "next/head";
import Link from "next/link";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { MDXRemote } from "next-mdx-remote";
import { Source_Serif_4 } from "next/font/google";
import { data } from "../../repository/DataRepository";
import { HtmlTags } from "../../components/HtmlTags";
import { BlogDate, BlogTags } from "../../components/BlogMeta";
import Gist from "../../components/Gist";
import Title from "../../components/title";
import { getPostContent, getPosts } from "../../utils/Blog";
import { getSiteUrl } from "../../utils/SiteUrl";
import styles from "../../styles/Blog.module.css";

// proportional body font for long-form reading; loaded here so only post pages download it
const bodyFont = Source_Serif_4({ subsets: ["latin"] });

export function getStaticPaths() {
  return {
    paths: getPosts().map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<{ slug: string }>) {
  // fallback: false, so params.slug is always one of getPosts()
  const post = getPosts().find(({ slug }) => slug === params!.slug)!;
  const { source, gists } = await getPostContent(post.slug);
  return { props: { post, source, gists, siteUrl: getSiteUrl({}) } };
}

export default function BlogPostPage({
  post,
  source,
  gists,
  siteUrl,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const url = `${siteUrl}/blogs/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    keywords: post.tags,
    url,
    mainEntityOfPage: url,
    author: { "@type": "Person", name: `${data.intro}`, url: siteUrl },
  };

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          // "<" escaped so post text can never close the script tag
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </Head>
      <div className="d-flex flex-column">
        <Title title={post.title} as="h1" />
        <br></br>
        <div className="margin-left">
          <BlogDate date={post.date} />
        </div>
        <br></br>
        <div className="margin-left d-flex flex-column">
          {HtmlTags("<article>", "white-space-nowrap")}
          <article
            className={`margin-left margin-right primary-font-color ${bodyFont.className} ${styles.blog__content}`}
          >
            <MDXRemote
              {...source}
              components={{
                Gist: ({ id }: { id: string }) => (
                  <Gist id={id} embed={gists[id]} />
                ),
              }}
            />
            <div className={styles.blog__post__tags}>
              <BlogTags tags={post.tags} />
            </div>
          </article>
          {HtmlTags("</article>", "white-space-nowrap")}
        </div>
        <Link
          href="/blogs"
          className={`margin-left text-small text-decoration-none primary-font-color button-effect w-fc ${styles.blog__back}`}
        >
          {HtmlTags("<", "secondary-font-color")}
          all posts
          {HtmlTags("/>", "secondary-font-color")}
        </Link>
      </div>
    </>
  );
}
