import Head from "next/head";
import { data } from "../repository/DataRepository";
import PageBody from "../components/PageBody";
import { HtmlTags } from "../components/HtmlTags";
import { useEffect } from "react";
import BouncingTextEntry from "../components/FallInTextEntry";

export default function About() {
  useEffect(() => {});

  return (
    <>
      <Head>
        <title>{`About Me || The Average Developer`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {PageBody(
        <>
          <div className="margin-left d-flex flex-row align-items-center">
            {HtmlTags(`<!--`, "")}
            {BouncingTextEntry(
              "01. about me",
              "subtitle primary-font-color text-shadow"
            )}
            {HtmlTags(`-->`, "")}
          </div>
        </>
      )}
    </>
  );
}
