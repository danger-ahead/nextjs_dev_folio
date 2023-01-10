import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import Image from "next/image";
import BlinkingCursor from "../components/BlinkingCursor";
import React, { useState } from "react";

export default function Contact() {
  const [nameValue, setName] = useState<string>("");
  const [subjectValue, setSubject] = useState<string>("");

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleSubjectChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSubject(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: check if name and subject are empty
    // TODO: mailto seems to be broken
    let mailstr: string = `mailto:${data.email}?subject=${subjectValue} &body=${nameValue}\n\n`;
    window.open(mailstr);
    setName("");
    setSubject("");
  };

  const inputNamePlaceholder = "<enter name />";
  const inputSubjectPlaceholder = "<enter subject />";

  return (
    <>
      <Head>
        <title>{`Contact Me || The Average Developer`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="margin-left d-flex flex-column margin-right">
        <div className="d-flex flex-row align-items-center">
          {HtmlTags(`<!--`, "white-space-nowrap")}
          {FallInTextEntry(
            "04. contact me",
            "subtitle primary-font-color text-shadow"
          )}
          {HtmlTags(`-->`, "white-space-nowrap")}
        </div>
        <br></br>
        {HtmlTags(`<form>`, "white-space-nowrap")}
        <br></br>
        <form
          className="d-flex flex-column contact-page-form"
          onSubmit={handleSubmit}
        >
          <div className="d-flex flex-row">
            <input
              placeholder="<Enter Name  />"
              className="d-block margin-left bg-primary outline-none border-none default-font-family primary-font-color"
              value={nameValue}
              onChange={handleNameChange}
              type={"text"}
              style={{
                width: `${
                  nameValue.length === 0
                    ? inputNamePlaceholder.length
                    : nameValue.length
                }ch`,
              }}
            />
            {nameValue && <BlinkingCursor id={"blinking-cursor-name"} />}
          </div>
          <div className="d-flex flex-row">
            <input
              placeholder="<Enter Subject />"
              className="d-block margin-left bg-primary outline-none border-none default-font-family primary-font-color"
              value={subjectValue}
              onChange={handleSubjectChange}
              type={"text"}
              style={{
                width: `${
                  subjectValue.length === 0
                    ? inputSubjectPlaceholder.length
                    : subjectValue.length
                }ch`,
              }}
            />
            {subjectValue && <BlinkingCursor id={"blinking-cursor-subject"} />}
          </div>
          <button
            className={`text-small text-decoration-none primary-font-color button-effect bg-primary default-font-family outline-none border-none cursor-pointer margin-top-10px margin-left w-fc`}
            type={"submit"}
          >
            {HtmlTags("<", "secondary-font-color")}
            hire me
            {HtmlTags("/>", "secondary-font-color")}
          </button>
        </form>
        <br></br>
        {HtmlTags(`</form>`, "white-space-nowrap")}
      </div>
    </>
  );
}
