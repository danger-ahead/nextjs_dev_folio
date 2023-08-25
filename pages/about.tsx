import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import Image from "next/image";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import path from "path";
import fs from "fs";
import { InferGetStaticPropsType } from "next";
import styles from "../styles/About.module.css";
import Title from "../components/title";

export async function getStaticProps() {
  const source = fs.readFileSync(path.join("static", "about.mdx"), "utf8");
  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
  });
  return { props: { source: mdxSource } };
}

export default function About({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`About ${data.intro.split(" ")[0]}`}</title>
        <meta name="description" content={`${data.about.substring(0, 160)}`} />
        <meta
          property="og:title"
          content={`About ${data.intro.split(" ")[0]}`}
        />
        <meta
          property="og:description"
          content={`${data.about.substring(0, 160)}`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}about`}
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
      </Head>
      <div
        key="about-page"
        className={`d-flex ${styles.about} justify-content-start`}
      >
        <div className={`margin-left d-flex flex-column ${styles.about__text}`}>
          <Title title="About Me" />
          <br></br>
          <br></br>
          {HtmlTags("<textarea>", "white-space-nowrap")}
          <span className="primary-font-color">
            <br></br>
            <div className="margin-left">
              <MDXRemote {...source} />
            </div>
            <br></br>
            <br></br>
          </span>
          {HtmlTags("<textarea>", "white-space-nowrap")}
        </div>
        {HtmlTags(
          <div className={`d-flex ${styles.about__picture} align-items-center`}>
            {`<img src=`}
            <div className="d-flex flex-row align-items-center">
              {HtmlTags(`"`, "")}
              <Image
                className="border-radius-5"
                src={data.picture}
                width="400"
                height="400"
                alt="picture"
              />
              {HtmlTags(`"`, "")}
            </div>
            {`alt="pic" />`}
          </div>,
          "margin-left"
        )}
      </div>
    </>
  );
}
