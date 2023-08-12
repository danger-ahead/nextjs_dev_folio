import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import linkedin from "../public/images/linkedin.webp";
import github from "../public/images/github.webp";
import instagram from "../public/images/instagram.webp";
import twitter from "../public/images/twitter.webp";
import stackoverflow from "../public/images/stackoverflow.webp";
import { ProjectDataArr } from "../models/DataTypes";
import fork from "../public/images/fork.webp";
import star from "../public/images/star.webp";

export default function Contact() {
  const socialButtons = [];

  for (let i = 0; i < Object.keys(data.socials).length; i++) {
    const src = Object.keys(data.socials)[i];
    socialButtons.push(
      <a
        className="margin-right"
        key={src}
        href={`${data.socials[src]}`}
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="cursor-pointer social-buttons button-effect"
          src={
            src === "linkedin"
              ? linkedin
              : src === "github"
              ? github
              : src === "instagram"
              ? instagram
              : src === "stackoverflow"
              ? stackoverflow
              : twitter
          }
          width={40}
          height={40}
          alt={src}
        />
      </a>
    );
  }

  const [templateData, setTemplateData] = useState<ProjectDataArr>();

  useEffect(() => {
    try {
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/gh_repo?owner=danger-ahead&repo=nextjs_dev_folio`
      ).then((res) => {
        res.json().then((data) => {
          setTemplateData(data);
        });
      });
    } catch {}
  }, []);

  return (
    <>
      <Head>
        <title>{`Contact ${data.intro.split(" ")[0]}`}</title>
        <meta name="description" content={`How to reach ${data.intro}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
      </Head>
      <div className="margin-left d-flex flex-column">
        <div className="d-flex flex-row align-items-center">
          {HtmlTags(`<!--`, "white-space-nowrap")}
          {FallInTextEntry(
            "04. get in touch",
            "subtitle secondary-font-color text-shadow"
          )}
          {HtmlTags(`-->`, "white-space-nowrap")}
        </div>
        {HtmlTags("<span>", "margin-top-2p")}
        <span className="margin-left margin-right primary-font-color text">
          I’m currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I’ll get
          back to you!
        </span>
        {HtmlTags("</span>", "margin-bottom-2p")}
        {HtmlTags("<button>", "")}
        <span className="d-flex flex-row margin-left">
          {HtmlTags("onClick={() => {", "")}
          <a
            className="primary-font-color button-effect text-decoration-none text"
            href={`mailto:${data.email}`}
          >
            say hi!
          </a>
          {HtmlTags("} }", "")}
        </span>
        {HtmlTags("</button>", "margin-bottom-2p")}
        {HtmlTags(`<link`, "white-space-nowrap")}
        <div className="margin-left d-flex flex-row align-items-center">
          {HtmlTags(`href=`, "white-space-nowrap margin-right")}
          {socialButtons}
        </div>
        {HtmlTags(`>`, "white-space-nowrap")}
        {templateData?.name == undefined ? <></> : HtmlTags("<template>", "")}
        <div
          style={{
            display: templateData?.name == undefined ? "none" : "block",
          }}
          className="margin-left"
        >
          <a
            href={templateData?.html_url}
            target="_blank"
            className="primary-font-color text text-decoration-none button-effect"
            rel="noreferrer"
          >
            {templateData?.name}
          </a>
          <div style={{ gap: "10px" }} className="d-flex align-items-center">
            <a
              className="d-flex flex-row align-items-center gap-2px text-decoration-none button-effect"
              href={`${templateData?.html_url}/fork`}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={fork} alt="fork" className="fork-image d-block" />
              <span>{templateData?.forks_count}</span>
            </a>
            <div className="d-flex gap-2px align-items-center">
              <Image src={star} alt="" className="star-image d-block" />
              <p className="star-count primary-font-color">
                {templateData?.star_gazers}
              </p>
            </div>
          </div>
        </div>
        {templateData?.name == undefined ? <></> : HtmlTags("</template>", "")}
      </div>
    </>
  );
}
