import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import { ReactNode, useState } from "react";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import path from "path";
import fs from "fs";
import { InferGetStaticPropsType } from "next";
import styles from "../styles/Experience.module.css";

export async function getStaticProps() {
  const mdxToBeSerialized: Promise<
    MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
  >[] = [];

  {
    data.experience.forEach((experience, index) => {
      const source = fs.readFileSync(
        path.join("static/experience", `${index + 1}.mdx`),
        "utf8"
      );
      mdxToBeSerialized.push(
        serialize(source, {
          parseFrontmatter: true,
        })
      );
    });
  }

  const mdxSource = await Promise.all(mdxToBeSerialized);

  return { props: { source: mdxSource } };
}

export default function Experience({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const experiences: ReactNode[] = [];

  {
    data.experience.forEach((experience, index) => {
      experiences.push(
        <div
          className={`d-flex flex-column margin-left ${styles.experience__container}`}
        >
          <div
            key={`${experience["company"]}${experience}`}
            className="d-flex flex-column"
          >
            {HtmlTags("<title> ", "white-space-nowrap")}
            <div className="d-flex flex-row margin-left">
              <span className="primary-font-color text">{`${experience["title"]}`}</span>
              &emsp;
              <a
                href={`${experience["company_url"]}`}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none secondary-font-color text button-effect"
              >
                {`@${experience["company"]}`}
              </a>
            </div>
            {HtmlTags(" </title>", "white-space-nowrap")}
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row align-items-center">
              {HtmlTags("<date>", "white-space-nowrap")}
              <span className="primary-font-color text-small">
                &nbsp;
                {`${experience["duration"]}`}&nbsp;
              </span>
              {HtmlTags("</date>", "white-space-nowrap")}
            </div>
            <div className="d-flex flex-column align-items-start">
              {HtmlTags("<details>", "white-space-nowrap")}
              <div className="margin-left margin-right primary-font-color text-small">
                <MDXRemote {...source[index]} />
              </div>
              {HtmlTags("</details>", "white-space-nowrap")}
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <Head>
        <title>{`${data.intro.split(" ")[0]}'s Experience`}</title>
        <meta
          name="description"
          content={`${data.experience[0]["title"]} - ${data.experience[0]["company"]}`}
        />
        <meta
          property="og:title"
          content={`${data.intro.split(" ")[0]}'s Experience`}
        />
        <meta
          property="og:description"
          content={`${data.experience[0]["title"]} - ${data.experience[0]["company"]}`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}experience`}
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
      <main key="experience-page">
        <div className="d-flex flex-row justify-content-start align-items-center margin-left">
          {HtmlTags(`<!--`, "white-space-nowrap")}
          {FallInTextEntry(
            "02. My Experience",
            "subtitle secondary-font-color text-shadow"
          )}
          {HtmlTags(`-->`, "white-space-nowrap")}
        </div>
        <br></br>
        <br></br>
        <div className={`d-flex ${styles.experience} align-items-start`}>
          <div
            className={`d-flex ${styles.experience__selection__button__container} justify-content-start margin-left primary-font-color text`}
            style={{
              flexWrap: "wrap",
            }}
          >
            {data.experience.map((experience, index) => {
              return (
                <button
                  key={`${experience["company"]}${index}`}
                  onClick={() => setSelectedExperience(index)}
                  className={`d-flex cursor-pointer bg-primary border-none ${
                    styles.experience__selection__button
                  } ${
                    index === selectedExperience
                      ? "secondary-font-color"
                      : "primary-font-color"
                  }`}
                >
                  {HtmlTags("<button>", "white-space-nowrap")}
                  <span className="text-small button-effect">
                    {`${index + 1}. ${experience["company"]}`}
                  </span>
                  {HtmlTags("</button>", "white-space-nowrap")}
                </button>
              );
            })}
          </div>
          {experiences[selectedExperience]}
        </div>
      </main>
    </>
  );
}
