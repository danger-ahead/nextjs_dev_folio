import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import Image from "next/image";

export default function About() {
  function onClick() {
    const element = document.getElementById("about-picture");

    if (element) {
      element.classList.add("about-picture-clicked");
    }
  }

  return (
    <>
      <Head>
        <title>{`About ${data.intro.split(" ")[0]}`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
                id="about-picture"
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
