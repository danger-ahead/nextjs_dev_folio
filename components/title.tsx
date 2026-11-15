import FallInTextEntry from "./FallInTextEntry";
import { HtmlTags } from "./HtmlTags";
import styles from "../styles/components/Title.module.css";
import { ReactNode } from "react";

export default function Title({
  title,
  as: Heading = "h3",
}: {
  title: string;
  as?: "h1" | "h3";
}) {
  const words = title.split(" ");

  const titleElements: ReactNode[] = [];

  words.forEach((word, index) => {
    titleElements.push(
      <FallInTextEntry text={word} key={`${index}__${word}__falling`} />,
      // keeps words apart in the heading's text for crawlers; whitespace between flex items isn't rendered
      " "
    );
  });

  return (
    <div
      className={`d-flex justify-content-start align-items-center margin-left ${styles.title__container}`}
    >
      {HtmlTags(`<!--`, "white-space-nowrap")}
      <Heading className={`d-flex flex-row flex-wrap w-100p ${styles.title}`}>
        {titleElements}
      </Heading>
      {HtmlTags(`-->`, "white-space-nowrap")}
    </div>
  );
}
