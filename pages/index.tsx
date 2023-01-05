import Head from "next/head";
import { data } from "../repository/DataRepository";
import BouncingText from "../components/BouncingText";
import PageBody from "../components/PageBody";
import { useEffect } from "react";
import { HtmlTags } from "../components/HtmlTags";
// import UseOnScreen from "../hooks/UseOnScreen";

export default function Home() {
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const aboutRefValue = UseOnScreen(aboutRef);

  useEffect(() => {
    // set an interval to animate the elements
    const elements = document.getElementsByClassName("elastic");

    // variables to store the random indexes of the elements that we will animate
    var index1: number, index2: number, index3: number, index4: number;
    const interval = setInterval(() => {
      try {
        // get random indexes
        index1 = Math.floor(Math.random() * (elements.length - 0));
        index2 = Math.floor(Math.random() * (elements.length - 0));
        index3 = Math.floor(Math.random() * (elements.length - 0));
        index4 = Math.floor(Math.random() * (elements.length - 0));

        // add the animation class to the elements
        elements[index1].classList.add("elasticAnimate");
        removeClass(index1); // remove the animation class after 1 second
        elements[index2].classList.add("elasticAnimate");
        removeClass(index2);
        elements[index3].classList.add("elasticAnimate");
        removeClass(index3);
        elements[index4].classList.add("elasticAnimate");
        removeClass(index4);
      } catch {
        console.error("Error animating elements");
      }
    }, 1000);
    return () => {
      clearInterval(interval);
      removeClass(index1);
      removeClass(index2);
      removeClass(index3);
      removeClass(index4);
    };
  }, []);

  function removeClass(index: number) {
    setTimeout(() => {
      const elements = document.getElementsByClassName("elastic");
      try {
        elements[index].classList.remove("elasticAnimate");
      } catch {
        console.error("Error removing animation class");
      }
    }, 1000);
  }

  return (
    <>
      <Head>
        <title>{`About Me || The Average Developer`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {PageBody(
        <div key="home-page" className="margin-left">
          {HtmlTags(`<h>`, "")}
          {BouncingText("Hi, I'm", "subtitle")}
          {BouncingText(data.intro, "title")}
          {HtmlTags(`</h>`, "")}
          <div className="d-flex flex-column">
            {HtmlTags(`<span>`, "")}
            {data.tagline.map((i, index) => {
              return (
                <div key={`${index}${i}`}>{BouncingText(i, "subtitle")}</div>
              );
            })}
            {HtmlTags(`</span>`, "")}
          </div>
        </div>
      )}
      {/* <div id={`${data.paths[0]}`} ref={aboutRef}>
        {aboutRefValue && <About />}
      </div> */}
    </>
  );
}
