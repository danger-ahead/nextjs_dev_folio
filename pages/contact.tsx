import Head from "next/head";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "../components/HtmlTags";
import FallInTextEntry from "../components/FallInTextEntry";
import Image from "next/image";
import BlinkingCursor from "../components/BlinkingCursor";
import React, { useState } from "react";

export default function Contact() {
  const [nameValue, setName] = useState<string>("");
  const [messageValue, setMessage] = useState<string>("");
  const [subjectValue, setSubject] = useState<string>("");

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };

  const handleMessageChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubjectChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSubject(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let mailstr: string = `mailto:${data.email}?subject=${subjectValue} &body=${messageValue}`;
    window.open(mailstr, "about:blank");
    setName("");
    setMessage("");
    setSubject("");
  };
  return (
    <>
      <Head>
        <title>{`About Me || The Average Developer`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div key="about-page" className="d-flex about justify-content-start">
        <div className="margin-left d-flex flex-column about-text">
          <div className="d-flex flex-row align-items-center">
            {HtmlTags(`<!--`, "white-space-nowrap")}
            {FallInTextEntry(
              "04. contact me",
              "subtitle primary-font-color text-shadow"
            )}
            {HtmlTags(`-->`, "white-space-nowrap")}
          </div>
          <br></br>
          {/* <br></br> */}
          {HtmlTags(`<form>`, "white-space-nowrap")}
          <br></br>
          <form onSubmit={handleSubmit}>
            <div className="d-flex name-subject-container">
              <div className="">
                <div className="d-flex ">
                  {nameValue && <BlinkingCursor />}
                  <input
                    placeholder="<Enter Name  />"
                    className="d-block margin-left bg-primary outline-none border-none default-font-family primary-font-color"
                    value={nameValue}
                    onChange={handleNameChange}
                    type={"text"}
                  />
                </div>
              </div>
              <div className="">
                <div className="d-flex ">
                  {subjectValue && <BlinkingCursor />}
                  <input
                    placeholder="<Enter Subject  />"
                    className="d-block margin-left bg-primary outline-none border-none default-font-family primary-font-color"
                    value={subjectValue}
                    onChange={handleSubjectChange}
                    type={"text"}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex message-btn-container">
              <div className="d-flex margin-left-3x margin-top-5x message-container">
                {messageValue && <BlinkingCursor width={"11px"} />}
                <textarea
                  placeholder="<Enter Message  />"
                  className="d-block margin-left bg-primary outline-none border-none default-font-family primary-font-color"
                  rows={1}
                  value={messageValue}
                  onChange={handleMessageChange}
                />
              </div>
              <button
                className={`text-small text-decoration-none primary-font-color button-effect bg-primary default-font-family outline-0 border-0 cursor-pointer margin-left-33px margin-top-10px hire-me-btn`}
                type={"submit"}
              >
                {HtmlTags("<", "secondary-font-color")}
                hire me
                {HtmlTags("/>", "secondary-font-color")}
              </button>
            </div>
          </form>
          <br></br>
          {HtmlTags(`</form>`, "white-space-nowrap")}
        </div>
      </div>
    </>
  );
}
