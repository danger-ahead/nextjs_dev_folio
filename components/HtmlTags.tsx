import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";

export function HtmlTags(
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal,
  cssClass: String
) {
  return (
    <span className={`cursive text-small secondary ${cssClass}`}>
      {children}
    </span>
  );
}
