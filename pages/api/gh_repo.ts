/* needs github personal access token in .env with appropriate scopes */

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { owner, repo } = req.query;

    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("Content-Type", "application/json");
    requestHeaders.set("Authorization", `Bearer ${process.env.GH_PAT}`);

    const result = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        method: "GET",
        headers: requestHeaders,
      }
    );

    const data = await result.json();

    const responseData = {
      name: data["name"],
      description: data["description"],
      star_gazers: data["stargazers_count"],
      forks_count: data["forks_count"],
      html_url: data["html_url"],
      homepage: data["homepage"],
      language: data["language"],
      open_issues: data["open_issues"],
      topics: data["topics"],
    };

    return res
      .status(result.status)
      .setHeader(
        "Access-Control-Allow-Origin",
        process.env.GH_REPO_ALLOW_ORIGIN ?? "*"
      )
      .json(responseData);
  } catch (e) {
    console.error(e);
    return res.status(500).json(e);
  }
}
