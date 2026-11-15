import Link from "next/link";
import { HtmlTags } from "./HtmlTags";
import styles from "../styles/Blog.module.css";

export function BlogDate({ date }: { date: string }) {
  return (
    <div className={`d-flex flex-row ${styles.align__baseline}`}>
      {HtmlTags("<date>", "white-space-nowrap")}
      <time dateTime={date} className="primary-font-color text-small">
        &nbsp;
        {new Date(date).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        })}
        &nbsp;
      </time>
      {HtmlTags("</date>", "white-space-nowrap")}
    </div>
  );
}

export function BlogTags({ tags }: { tags: string[] }) {
  if (tags.length === 0) return null;
  return (
    <div className={`d-flex flex-row flex-wrap ${styles.align__baseline} ${styles.tags__row}`}>
      {HtmlTags("<tags>", "white-space-nowrap")}
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/blogs/tags/${tag}`}
          className={`text-decoration-none secondary-font-color button-effect ${styles.text__smallest}`}
        >
          #{tag}
        </Link>
      ))}
      {HtmlTags("</tags>", "white-space-nowrap")}
    </div>
  );
}
