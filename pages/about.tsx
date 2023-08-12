import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import Image from "next/image";
import { useRef } from "react";

export default function About() {
  function onClick() {
    aboutPicture.current!.classList.add("about-picture-clicked");
  }

  const aboutPicture = useRef<HTMLImageElement | null>(null);

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
      <div key="about-page" className="d-flex about justify-content-start">
        <div className="margin-left d-flex flex-column about-text">
          <div className="d-flex flex-row align-items-center">
            {HtmlTags(`<!--`, "white-space-nowrap")}
            {FallInTextEntry(
              "01. about me",
              "subtitle secondary-font-color text-shadow"
            )}
            {HtmlTags(`-->`, "white-space-nowrap")}
          </div>
          <br></br>
          <br></br>
          {HtmlTags("<textarea>", "white-space-nowrap")}
          <span className="white-space-preline primary-font-color">
            <br></br>
            <div className="margin-left text-align-justify">{data.about}</div>
            <br></br>
            <br></br>
          </span>
          {HtmlTags("<textarea>", "white-space-nowrap")}
        </div>
        {HtmlTags(
          <div className="d-flex about-picture align-items-center">
            {`<img src=`}
            <div className="d-flex flex-row align-items-center">
              {HtmlTags(`"`, "")}
              <Image
                ref={aboutPicture}
                className="border-radius-5"
                src={data.picture}
                width="400"
                height="400"
                alt="picture"
                onClick={onClick}
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
