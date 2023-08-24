import Head from "next/head";
import { data } from "../repository/DataRepository";
import ElasticText from "../components/ElasticText";
import { useEffect } from "react";
import { HtmlTags } from "../components/HtmlTags";
import {
  addAnimationClass,
  removeAnimationClass,
} from "../utils/CommonFunctions";
import styles from "../styles/Index.module.css";

export default function Home() {
  useEffect(() => {
    const toAnimate = 4;
    const addAnimationClassReturn = addAnimationClass({ animate: 4 });

    return () => {
      clearInterval(addAnimationClassReturn.interval);
      for (let i = 0; i < toAnimate; i++) {
        removeAnimationClass({ index: addAnimationClassReturn.index[i] });
      }
    };
  }, []);

  return (
    <>
      <Head key="home-page">
        <title>{`Meet ${data.intro.split(" ")[0]}`}</title>
        <meta name="description" content={`${data.about.substring(0, 160)}`} />
        <meta
          property="og:title"
          content={`Meet ${data.intro.split(" ")[0]}`}
        />
        <meta
          property="og:description"
          content={`${data.about.substring(0, 160)}`}
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}`}
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
      <div className="d-flex flex-column margin-left">
        {HtmlTags(`<h>`, "")}
        <span className="margin-left">
          {ElasticText("Hi, I'm", "subtitle")}
        </span>
        <span className="margin-left">{ElasticText(data.intro, "title")}</span>
        {HtmlTags(`</h>`, "")}
        <div className="d-flex flex-column">
          {HtmlTags(`<span>`, "")}
          {data.tagline.map((i, index) => {
            return (
              <div className="margin-left" key={`${index}${i}`}>
                {ElasticText(i, "subtitle")}
              </div>
            );
          })}
          {HtmlTags(`</span>`, "")}
        </div>
        <div className={`${styles.mobile__resume__block}`}>
          {HtmlTags(`<a`, "")}
          <span className="d-flex flex-row margin-left align-items-center">
            {HtmlTags(`href="`, "")}
            <a
              className="w-fc cursor-pointer text-decoration-none button-effect"
              href={data.resume}
              target="_blank"
              rel="noreferrer"
            >
              My Resume!
            </a>
            {HtmlTags(`" >`, "")}
          </span>
          {HtmlTags(`</a>`, "")}
        </div>
      </div>
    </>
  );
}
