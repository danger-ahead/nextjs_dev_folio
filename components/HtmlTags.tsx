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
    <span className={`cursive text-small secondary ${cssClass}`}>
      {children}
    </span>
  );
}
