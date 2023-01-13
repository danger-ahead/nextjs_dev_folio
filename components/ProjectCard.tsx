import Head from "next/head";
import React from "react";
import FallInTextEntry from "./FallInTextEntry";
import { HtmlTags } from "./HtmlTags";
import fork from "../public/images/fork.webp";
import star from "../public/images/star.webp";
import Image from "next/image";
import Github from "../public/images/github.webp";
import Link from "../public/images/link.webp";
import ElasticText from "./ElasticText";

type projectCardProps = {
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

const Card = (props: projectCardProps) => {
  const handleGithubURL = () => {
    window.open(props.html_url, "about:blank");
  };

  const handleDeployedLink = () => {
    window.open(props.homepage, "about:blank");
  };

  return (
    <div className="project-card">
      {HtmlTags("<Project>", "margin-top-2p d-block")}
      <div className="project-card-container">
        <div className="project-header">
          <div className="project-top">
            <div className="popularity-count">
              <div className="fork-count">
                <Image src={fork} alt="fork" className="fork-image d-block" />
                <p className="fork-num">{props.forks_count}</p>
              </div>
              <div className="star-count">
                <Image src={star} alt="" className="star-image d-block" />
                <p className="star-count">{props.star_gazers}</p>
              </div>
            </div>
            <div className="project-links">
              <div
                className="github-link"
                onClick={handleGithubURL}
                role={"button"}
              >
                <Image src={Github} alt={"Github"} />
              </div>
              <div
                className="deployed-link"
                onClick={handleDeployedLink}
                role={"button"}
              >
                <Image src={Link} alt={"Link"} />
              </div>
            </div>
          </div>
          <div className="project-name">{ElasticText(`${props.name}`, "")}</div>
          <div className="project-description">
            <p>{props.description}</p>
          </div>
        </div>
        <div className="project-footer">
          <ul className="project-tech-topics">
            {props.topics?.map((item, index) => {
              return (
                <li style={{ fontSize: "12px" }} key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {HtmlTags("</Project>", "margin-bottom-2p d-block")}
    </div>
  );
};

export default Card;
