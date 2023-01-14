import Head from "next/head";
import { data } from "../repository/DataRepository";
import PageBody from "../components/PageBody";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import { useState } from "react";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(0);
  const experiences = [];

  for (let experience in data.experience) {
    experiences.push(
      <div className="d-flex flex-column margin-left experience-container">
        <div
          key={`${data.experience[experience]["company"]}${experience}`}
          className="d-flex flex-column"
        >
          {HtmlTags("<title> ", "white-space-nowrap")}
          <div className="d-flex flex-row margin-left">
            <span className="primary-font-color text">{`${data.experience[experience]["title"]}`}</span>
            &emsp;
            <a
              href={`${data.experience[experience]["company_url"]}`}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none secondary-font-color text button-effect"
            >
              {`@${data.experience[experience]["company"]}`}
            </a>
          </div>
          {HtmlTags(" </title>", "white-space-nowrap")}
        </div>
        <div className="d-flex flex-column">
          <div className="d-flex flex-row align-items-center">
            {HtmlTags("<date>", "white-space-nowrap")}
            <span className="primary-font-color text-small">
              &nbsp;
              {`${data.experience[experience]["duration"]}`}&nbsp;
            </span>
            {HtmlTags("</date>", "white-space-nowrap")}
          </div>
          <div className="d-flex flex-column align-items-start">
            {HtmlTags("<details>", "white-space-nowrap")}
            <div className="margin-left margin-right primary-font-color text-small white-space-preline">
              {`${data.experience[experience]["description"]}`}
            </div>
            {HtmlTags("</details>", "white-space-nowrap")}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{`${data.intro.split(" ")[0]}'s Experience`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div key="experience-page">
        <div className="d-flex flex-row justify-content-start align-items-center margin-left">
          {HtmlTags(`<!--`, "white-space-nowrap")}
          {FallInTextEntry(
            "02. my experience",
            "subtitle secondary-font-color text-shadow"
          )}
          {HtmlTags(`-->`, "white-space-nowrap")}
        </div>
        <br></br>
        <br></br>
        <div className="d-flex experience align-items-start">
          <div className="d-flex experience-selection-button-container justify-content-start margin-left primary-font-color text">
            {data.experience.map((experience, index) => {
              return (
                <div
                  key={`${experience["company"]}${index}`}
                  className="d-flex flex-row align-items-center justify-content-between cursor-pointer"
                  role="button"
                  onClick={() => setSelectedExperience(index)}
                >
                  <div
                    className={`d-flex experience-selection-button ${
                      index === selectedExperience
                        ? "secondary-font-color"
                        : "primary-font-color"
                    }`}
                  >
                    {HtmlTags("<button>", "white-space-nowrap")}
                    <span className="text-small button-effect">
                      {experience["company"]}
                    </span>
                    {HtmlTags("</button>", "white-space-nowrap")}
                  </div>
                </div>
              );
            })}
          </div>
          {experiences[selectedExperience]}
        </div>
      </div>
    </>
  );
}
