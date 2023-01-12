import Image from "next/image";
import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { data } from "../repository/DataRepository";
import { handleNavBarCollapse } from "../utils/NavBarCollapse";
import { HtmlTags } from "./HtmlTags";
import NavBar from "./NavBar";

export default function PageBody(
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
) {
  return (
    <main onClick={handleNavBarCollapse} className="d-flex flex-column mh-100p">
      {HtmlTags(`<html>`, "")}
      {HtmlTags(`<body>`, "margin-left")}
      <div className="margin-left">{NavBar()}</div>
      <div className="margin-left d-flex flex-column justify-content-center flex-grow margin-top-2p margin-bottom-2p margin-right">
        {children}
      </div>
      {HtmlTags(`</body>`, "margin-left")}
      {HtmlTags(`</html>`, "")}
      <div className="position-fixed d-flex flex-row align-items-center right-corner button-effect">
        <a
          className="right-corner-button cursor-pointer text-decoration-none button-effect"
          href={`mailto:${data.email}`}
        >
          Email me!
        </a>
        <span className="right-corner-line"></span>
      </div>
    </main>
  );
}
