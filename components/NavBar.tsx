import Link from "next/link";
import { useEffect, useState } from "react";
import { HtmlTags } from "./HtmlTags";

export default function NavBar(selectedTab: string) {
  const [selected, setSelected] = useState(selectedTab);

  useEffect(() => {
    setSelected(selectedTab);
  }, [selectedTab]);

  return (
    <div className="margin-left margin-right d-flex flex-column">
      {HtmlTags("<nav>", "white-space-nowrap")}
      <nav className="margin-left d-flex navbar">
        <Link
          className={`text-small text-decoration-none ${
            selected === "Home" ? "secondary-font-color" : "primary-font-color"
          }`}
          href="/"
        >{`<home />`}</Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none ${
            selected === "About" ? "secondary-font-color" : "primary-font-color"
          }`}
          href="/about"
        >{`<about />`}</Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none ${
            selected === "Experience"
              ? "secondary-font-color"
              : "primary-font-color"
          }`}
          href="/experience"
        >{`<experience />`}</Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none ${
            selected === "Projects"
              ? "secondary-font-color"
              : "primary-font-color"
          }`}
          href="/projects"
        >{`<projects />`}</Link>
        <div className="navbar-gap"></div>
        <Link
          className={`text-small text-decoration-none ${
            selected === "Contact"
              ? "secondary-font-color"
              : "primary-font-color"
          }`}
          href="/contact"
        >{`<contact  />`}</Link>
      </nav>
      {HtmlTags("</nav>", "white-space-nowrap")}
    </div>
  );
}
