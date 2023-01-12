import { data } from './../repository/DataRepository';

const { repos } = data
let repoURLs : string[] = [];
repos.forEach(element => {
    repoURLs.push(`http://127.0.0.1:8000/api/gh_repo?owner=${data.githubUserID}&repo=${element}`)
});

export { repoURLs }