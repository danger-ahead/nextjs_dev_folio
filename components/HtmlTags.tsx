import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";

export function HtmlTags(
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactFragment
    | ReactPortal,
  cssClass: String
) {
  return (
    <span className={`cursive text secondary ${cssClass}`}>{children}</span>
  );
}
