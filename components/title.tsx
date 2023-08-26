import FallInTextEntry from "./FallInTextEntry";
import { HtmlTags } from "./HtmlTags";
import styles from "../styles/components/Title.module.css";
import { ReactNode } from "react";

export default function Title({ title }: { title: string }) {
  const words = title.split(" ");

  const titleElements: ReactNode[] = [];

  for (let word of words) {
    titleElements.push(
      <FallInTextEntry text={word} key={`${word}__falling`} />
    );
  }

  return (
    <div
      className={`d-flex justify-content-start align-items-center margin-left ${styles.title__container}`}
    >
      {HtmlTags(`<!--`, "white-space-nowrap")}
      <h3 className={`d-flex flex-row flex-wrap w-100p ${styles.title}`}>
        {titleElements}
      </h3>
      {HtmlTags(`-->`, "white-space-nowrap")}
    </div>
  );
}
