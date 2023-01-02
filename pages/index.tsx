import Head from "next/head";
import { data } from "../repository/DataRepository";
import BouncingText from "../components/BouncingText";
import PageBody from "../components/PageBody";
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { HtmlTags } from "../components/HtmlTags";

export default function Home() {
  useEffect(() => {
    // set an interval to animate the elements
    const interval = setInterval(() => {
      const elements = document.getElementsByClassName("elastic");

      // variables to store the random indexes of the elements that we will animate
      var index1, index2, index3, index4;
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
    return () => clearInterval(interval);
  }, []);

  function removeClass(index: number) {
    setTimeout(() => {
      const elements = document.getElementsByClassName("elastic");
      elements[index].classList.remove("elasticAnimate");
    }, 1000);
  }

  return (
    <>
      <Head>
        <title>{`${data.intro} || The Average Developer`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {PageBody(
        <div className="margin-left">
          {HtmlTags(`<h>`, "")}
          {BouncingText(data.intro, "title")}
          {HtmlTags(`</h>`, "")}
          <div className="d-flex flex-column">
            {data.bio.map((i, index) => {
              return (
                <div key={`${index}${i}`}>
                  {HtmlTags(`<span>`, "")}
                  {BouncingText(i, "subtitle")}
                  {HtmlTags(`</span>`, "")}
                </div>
              );
            })}
          </div>
        </div>
      )}
      {Navbar()}
    </>
  );
}
