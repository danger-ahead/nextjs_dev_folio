import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { data } from "../repository/DataRepository";
import { Routes } from "../utils/routes";
import { HtmlTags } from "./HtmlTags";

export function HorizontalNavbar() {
  const router = useRouter();

  return (
    <div className="d-flex flex-column position-absolute right-0 top-0 horizontal-navbar h-100 justify-content-between align-items-start">
      {HtmlTags(`<nav>`, "")}
      <div className="margin-left d-flex flex-column flex-grow justify-content-start">
        <div className="d-flex flex-row justify-content-start align-items-center">
          {HtmlTags(`<a href="`, "white-space-nowrap")}
          <Link
            className="text text-decoration-none elastic text-decoration-none"
            href={`${Routes.about}`}
          >{`${Routes.about}`}</Link>
          {HtmlTags(`">...</a>`, "white-space-nowrap")}
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
          {HtmlTags(`<a href="`, "white-space-nowrap")}
          <Link
            className="text text-decoration-none elastic text-decoration-none"
            href={`${Routes.experience}`}
          >{`${Routes.experience}`}</Link>
          {HtmlTags(`">...</a>`, "white-space-nowrap")}
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
          {HtmlTags(`<a href="`, "white-space-nowrap")}
          <Link
            className="text text-decoration-none elastic text-decoration-none"
            href={`${Routes.projects}`}
          >{`${Routes.projects}`}</Link>
          {HtmlTags(`">...</a>`, "white-space-nowrap")}
        </div>
        <div className="d-flex flex-row justify-content-start align-items-center">
          {HtmlTags(`<a href="`, "white-space-nowrap")}
          <Link
            className="text text-decoration-none elastic text-decoration-none"
            href={`${Routes.contact}`}
          >{`${Routes.contact}`}</Link>
          {HtmlTags(`">...</a>`, "white-space-nowrap")}
        </div>
      </div>
      {HtmlTags(`</nav>`, "")}
    </div>
  );
}
