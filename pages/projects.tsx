import Head from "next/head";
import React, { useEffect, useState } from "react";
import FallInTextEntry from "../components/FallInTextEntry";
import { HtmlTags } from "../components/HtmlTags";
import Card from "../components/ProjectCard";
import { ProjectDataArr } from "../models/DataTypes";
import { data } from "../repository/DataRepository";
import {
  addAnimationClass,
  removeAnimationClass,
} from "../utils/CommonFunctions";
import { repoURLs } from "../utils/Constants";

function Projects(): JSX.Element {
  const [projectDataArr, setProjectArr] = useState<ProjectDataArr[]>([
    {},
    {},
    {},
  ]);

  const getProjectData = async (url: string) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    const arrOfPromises: any[] = [];

    repoURLs.forEach((element) => {
      arrOfPromises.push(getProjectData(element));
    });

    Promise.all(arrOfPromises).then((values) => {
      setProjectArr(values);
    });

    const toAnimate = 2;
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
      <Head>
        <title>{`${data.intro.split(" ")[0]}'s Projects`}</title>
        <meta
          name="description"
          content={`Projects that ${data.intro} has previously worked on`}
        />
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
            "03. my projects",
            "subtitle secondary-font-color text-shadow"
          )}
          {HtmlTags(`-->`, "white-space-nowrap")}
        </div>
        <div className="d-grid projects-container margin-top-2p">
          {projectDataArr.map((item, index) => {
            return (
              <Card
                key={index}
                name={item.name}
                description={item.description}
                star_gazers={item.star_gazers}
                topics={item.topics}
                html_url={item.html_url}
                homepage={item.homepage}
                forks_count={item.forks_count}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
