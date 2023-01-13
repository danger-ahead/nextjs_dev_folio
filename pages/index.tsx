import Head from "next/head";
import { data } from "../repository/DataRepository";
import ElasticText from "../components/ElasticText";
import { useEffect } from "react";
import { HtmlTags } from "../components/HtmlTags";
import {
  addAnimationClass,
  removeAnimationClass,
} from "../utils/CommonFunctions";
// import UseOnScreen from "../hooks/UseOnScreen";

export default function Home() {
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const aboutRefValue = UseOnScreen(aboutRef);

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
        <title>{`About Me || The Average Developer`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
      </div>
      {/* <div id={`${data.paths[0]}`} ref={aboutRef}>
        {aboutRefValue && <About />}
      </div> */}
    </>
  );
}
