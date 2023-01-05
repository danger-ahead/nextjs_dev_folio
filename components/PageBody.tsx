import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { data } from "../repository/DataRepository";
import { HtmlTags } from "./HtmlTags";

export default function PageBody(
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal
) {
  return (
    <main className="d-flex flex-column h-100p overflow-y-auto">
      {HtmlTags(`<html>`, "")}
      {HtmlTags(`<body>`, "margin-left")}
      <div className="margin-left d-flex flex-column justify-content-center flex-grow">
        {children}
      </div>
      {HtmlTags(`</body>`, "margin-left")}
      {HtmlTags(`</html>`, "")}
    </main>
  );
}
