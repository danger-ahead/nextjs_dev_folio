import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { HtmlTags } from "./HtmlTags";
import NavBar from "./NavBar";

export default function PageBody(
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment,
  path: string
) {
  return (
    <main className="d-flex flex-column mh-100p">
      {HtmlTags(`<html>`, "")}
      {HtmlTags(`<body>`, "margin-left")}
      <div className="margin-left">{NavBar(path)}</div>
      <div className="margin-left d-flex flex-column justify-content-center flex-grow">
        {children}
      </div>
      {HtmlTags(`</body>`, "margin-left")}
      {HtmlTags(`</html>`, "")}
    </main>
  );
}
