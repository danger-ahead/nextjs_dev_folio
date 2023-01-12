import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import Image from "next/image";
import React from "react";
import linkedin from "../public/images/linkedin.webp";
import github from "../public/images/github.webp";
import instagram from "../public/images/instagram.webp";
import twitter from "../public/images/twitter.webp";
import stackoverflow from "../public/images/stackoverflow.webp";

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

  return (
    <>
      <Head>
        <title>{`Get in touch`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
        <span className="margin-left margin-right primary-font-color">
          I’m currently looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I’ll get
          back to you!
        </span>
        {HtmlTags("</span>", "margin-bottom-2p")}
        {HtmlTags("<button>", "")}
        <span className="d-flex flex-row margin-left">
          {HtmlTags("onClick={() => {", "")}
          <a
            className="primary-font-color button-effect text-decoration-none"
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
      </div>
    </>
  );
}
