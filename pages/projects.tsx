import React, { useEffect, useState } from "react";
import { data } from "../repository/DataRepository";
import { repoURLs } from "../utils/Constants";

type projectDataArr = {
  name?: string;
  description?: string | null;
  star_gazers?: number;
  forks?: number;
  forks_count?: number;
  html_url?: string;
  homepage?: string | null;
  language?: string;
  open_issues?: number;
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
      console.log(values);
    });
  }, []);

  return <div>projects</div>;
}

export default Projects;
