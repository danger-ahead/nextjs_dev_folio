import Head from "next/head";
import Link from "next/link";
import { BlogPost } from "../models/DataTypes";
import { HtmlTags } from "./HtmlTags";
import { BlogDate, BlogTags } from "./BlogMeta";
import Title from "./title";
import styles from "../styles/Blog.module.css";
import projectStyles from "../styles/Projects.module.css";

export default function BlogPostList({
  title,
  heading,
  description,
  url,
  posts,
}: {
  title: string;
  heading: string;
  description: string;
  url: string;
  posts: BlogPost[];
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="d-flex flex-column">
        <Title title={heading} as="h1" />
        {posts.length === 0 && (
          <span className="margin-left margin-top-2p primary-font-color text-small">
            No posts yet.
          </span>
        )}
        <div
          className={`d-grid margin-left margin-top-2p ${projectStyles.projects__container}`}
        >
          {posts.map(({ slug, title, description, date, tags }) => (
            <article
              key={slug}
              className={`d-flex flex-column justify-content-between ${projectStyles.project__card}`}
            >
              {HtmlTags("<blog>", "d-block")}
              <div className={`d-flex flex-column ${styles.blog__card__body}`}>
                <h2 className={`text ${styles.blog__card__title}`}>
                  <Link
                    href={`/blogs/${slug}`}
                    className="text-decoration-none primary-font-color button-effect"
                  >
                    {title}
                  </Link>
                </h2>
                <BlogDate date={date} />
                <p className={`primary-font-color-darker ${styles.text__smaller}`}>
                  {description}
                </p>
                <BlogTags tags={tags} />
              </div>
              {HtmlTags("</blog>", "d-block")}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
