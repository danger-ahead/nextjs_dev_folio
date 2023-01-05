import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  ReactNode,
} from "react";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "./HtmlTags";
import NavBar from "./NavBar";

export default function PageBody(
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
) {
  return (
    <main className="d-flex flex-column h-100p overflow-y-auto">
      {HtmlTags(`<html>`, "")}
      {HtmlTags(`<body>`, "margin-left")}
      {/* need to fix the type */}
      {/* @ts-ignore */}
      <div className="margin-left">{NavBar(children?.key)}</div>
      <div className="margin-left d-flex flex-column justify-content-center flex-grow">
        {children}
      </div>
      {HtmlTags(`</body>`, "margin-left")}
      {HtmlTags(`</html>`, "")}
    </main>
  );
}
