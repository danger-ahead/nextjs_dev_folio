import React from "react";
import { HtmlTags } from "./HtmlTags";
import fork from "../public/images/fork.webp";
import star from "../public/images/star.webp";
import Image from "next/image";
import Github from "../public/images/github.webp";
import Link from "../public/images/link.webp";
import ElasticText from "./ElasticText";
import { ProjectCardProps } from "../models/DataTypes";

const Card = (props: ProjectCardProps) => {
  if (
    props.name == undefined ||
    (props.name == "TypeError" && props.forks_count == undefined)
  ) {
    return (
      <div className="project-card empty-project-card d-flex flex-column justify-content-center">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }

  return (
    <div className="project-card d-flex flex-column justify-content-between">
      {HtmlTags("<project>", "d-block")}
      <div
        style={{ padding: `0rem 1.75rem` }}
        className="d-flex flex-column align-items-start primary-font-color"
      >
        <div className="w-100p d-flex flex-row justify-content-between">
          <div style={{ gap: "10px" }} className="d-flex align-items-center">
            <a
              className="d-flex flex-row align-items-center gap-2px text-decoration-none button-effect"
              href={`${props.html_url}/fork`}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={fork} alt="fork" className="fork-image d-block" />
              <span>{props.forks_count}</span>
            </a>
            <div className="d-flex gap-2px align-items-center">
              <Image src={star} alt="" className="star-image d-block" />
              <p className="star-count">{props.star_gazers}</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <a
              className="button-effect"
              href={`${props.html_url}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Github} alt={"Github"} />
            </a>
            <a
              className="button-effect"
              href={`${props.homepage}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Link} alt={"Homepage"} />
            </a>
          </div>
        </div>
        {ElasticText(`${props.name}`, "text")}
        <p>{props.description}</p>
        <div className="project-footer">
          <ul className="project-tech-topics d-flex">
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
      {HtmlTags("</project>", "d-block")}
    </div>
  );
};

export default Card;
