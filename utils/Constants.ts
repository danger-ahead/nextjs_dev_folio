import { data } from "./../repository/DataRepository";

const { repos } = data;

let repoURLs: string[] = [];

repos.forEach((element) => {
  repoURLs.push(
    `${process.env.NEXT_PUBLIC_BASE_URL}api/gh_repo?owner=${data.githubUserID}&repo=${element}`
  );
});

export { repoURLs };
