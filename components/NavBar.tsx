import Link from "next/link";
import { useRouter } from "next/router";
import { HtmlTags } from "./HtmlTags";

export default function NavBar() {
  const route = useRouter();

  function onExpandClick() {
    const navbar = document.getElementById("navbar");
    const navbarExpandButton = document.getElementById("navbar-expand-button");
    if (navbar && navbarExpandButton) {
      navbar.classList.add("navbar-expand");
      navbarExpandButton.classList.add("navbar-expand-button-expand");
    }
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="margin-left margin-right d-flex flex-column"
    >
      {HtmlTags("<nav>", "white-space-nowrap")}
      <div
        id="navbar-expand-button"
        role="button"
        className="margin-left d-flex flex-row align-items-center primary-font-color cursor-pointer"
        onClick={onExpandClick}
      >
        <span>
          {HtmlTags("<", "secondary-font-color")}
          menu
          {HtmlTags("/>", "secondary-font-color")}
        </span>
      </div>
      <nav id="navbar" className="margin-left d-flex">
        <Link
          className={`text-small text-decoration-none primary-font-color button-effect`}
          href="/"
        >
          <span>
            {HtmlTags(
              "<",
              `${route.pathname === "/" ? "secondary-font-color" : ""}`
            )}
            home
            {HtmlTags(
              "/>",
              `${route.pathname === "/" ? "secondary-font-color" : ""}`
            )}
          </span>
        </Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none primary-font-color button-effect`}
          href="/about"
        >
          <span>
            {HtmlTags(
              "<",
              `${route.pathname === "/about" ? "secondary-font-color" : ""}`
            )}
            about
            {HtmlTags(
              "/>",
              `${route.pathname === "/about" ? "secondary-font-color" : ""}`
            )}
          </span>
        </Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none primary-font-color button-effect`}
          href="/experience"
        >
          <span>
            {HtmlTags(
              "<",
              `${
                route.pathname === "/experience" ? "secondary-font-color" : ""
              }`
            )}
            experience
            {HtmlTags(
              "/>",
              `${
                route.pathname === "/experience" ? "secondary-font-color" : ""
              }`
            )}
          </span>
        </Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none primary-font-color button-effect`}
          href="/projects"
        >
          <span>
            {HtmlTags(
              "<",
              `${route.pathname === "/projects" ? "secondary-font-color" : ""}`
            )}
            projects
            {HtmlTags(
              "/>",
              `${route.pathname === "/projects" ? "secondary-font-color" : ""}`
            )}
          </span>
        </Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none primary-font-color button-effect`}
          href="/contact"
        >
          <span>
            {HtmlTags(
              "<",
              `${route.pathname === "/contact" ? "secondary-font-color" : ""}`
            )}
            contact
            {HtmlTags(
              "/>",
              `${route.pathname === "/contact" ? "secondary-font-color" : ""}`
            )}
          </span>
        </Link>
      </nav>
      {HtmlTags("</nav>", "white-space-nowrap")}
    </div>
  );
}
