import Link from "next/link";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "./HtmlTags";

function NavbarLink() {
  return (
    <>
      {data.paths.map((path, index) => {
        return (
          <div
            key={`${path}${index}`}
            className="d-flex flex-row justify-content-start align-items-center"
          >
            {HtmlTags(`<a href="`, "white-space-nowrap")}
            <Link
              className="text-small text-decoration-none elastic"
              href={`/${path}`}
            >{`/${path}`}</Link>
            {HtmlTags(`">...</a>`, "white-space-nowrap")}
          </div>
        );
      })}
    </>
  );
}

export function Navbar() {
  return (
    <div className="d-flex flex-column position-absolute right-0 top-0 navbar h-100 justify-content-between align-items-start">
      {HtmlTags(`<nav>`, "")}
      <div className="flex-grow margin-left">{NavbarLink()}</div>
      {HtmlTags(`</nav>`, "")}
    </div>
  );
}
