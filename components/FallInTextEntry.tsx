import { useEffect } from "react";

export default function FallInTextEntry(
  data: string,
  cssClass: string,
  key?: string
) {
  const element: JSX.Element[] = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i] === " ") {
      element.push(<span key={`${data}${i}`}>&emsp;</span>);
    } else {
      element.push(
        <span key={`${data}${i}`} className={`fall-in-text-entry ${cssClass}`}>
          {data[i]}
        </span>
      );
    }
  }

  useEffect(() => {
    const elements = document.getElementsByClassName("fall-in-text-entry");

    let index = 0;
    const interval = setInterval(() => {
      elements[index]?.classList.add("fall-in");
      index++;
      if (index >= data.length) {
        clearInterval(interval);
      }
    }, 25);
    return () => clearInterval(interval);
  });

  return (
    <span key={key} className="d-flex flex-row margin-left margin-right">
      {element}
    </span>
  );
}
