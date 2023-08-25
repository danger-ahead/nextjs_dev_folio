import Head from "next/head";
import React, { useEffect, useState } from "react";
import Card from "../../components/ProjectCard";
import { ProjectDataArr } from "../../models/DataTypes";
import { data } from "../../repository/DataRepository";
import {
  addAnimationClass,
  removeAnimationClass,
} from "../../utils/CommonFunctions";
import { repoURLs } from "../../utils/Constants";
import styles from "../../styles/Projects.module.css";
import Title from "../../components/title";

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
        <meta name="description" content={`${data.repos.join(", ")}`} />
        <meta
          property="og:title"
          content={`${data.intro.split(" ")[0]}'s Projects`}
        />
        <meta property="og:description" content={`${data.repos.join(", ")}`} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}projects`}
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
      </Head>
      <main
        className={`margin-left d-flex flex-column ${styles.project__section__container}`}
      >
        <Title title="My Projects" />
        <div className={`d-grid ${styles.projects__container} margin-top-2p`}>
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
      </main>
    </>
  );
}

export default Projects;
