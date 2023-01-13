import Head from "next/head";
import React, { useEffect, useState } from "react";
import FallInTextEntry from "../components/FallInTextEntry";
import { HtmlTags } from "../components/HtmlTags";
import Card from "../components/ProjectCard";
import { data } from "../repository/DataRepository";
import { repoURLs } from "../utils/Constants";

type projectDataArr = {
  name?: string;
  description?: string | null;
  star_gazers?: number;
  forks?: number;
  forks_count?: number;
  html_url?: string;
  homepage?: string | URL | undefined;
  language?: string;
  open_issues?: number;
  topics?: any[] | null;
};

function Projects(): JSX.Element {
  const [projectDataArr, setProjectArr] = useState<projectDataArr[]>([]);

  const getProjectData = async (url: string) => {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      return error;
    }
  };
  useEffect(() => {
    let arrOfPromises: any[] = [];
    repoURLs.forEach((element) => {
      arrOfPromises.push(getProjectData(element));
    });
    Promise.all(arrOfPromises).then((values) => {
      setProjectArr(values);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{`Projects`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="margin-left d-flex flex-column">
        <div className="d-flex flex-row align-items-center">
          {HtmlTags(`<!--`, "white-space-nowrap")}
          {FallInTextEntry(
            "03. Projects",
            "subtitle secondary-font-color text-shadow"
          )}
          {HtmlTags(`-->`, "white-space-nowrap")}
        </div>
        <div className="projects-container">
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
