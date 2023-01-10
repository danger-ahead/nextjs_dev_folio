import React, { useEffect } from "react";

type BlinkingCursorProps = {
  width?: string;
  id: string;
};

const BlinkingCursor = ({ width, id }: BlinkingCursorProps) => {
  useEffect(() => {
    const cursor = document.getElementById(id);
    const interval = setInterval(() => {
      if (cursor) {
        cursor.style.visibility =
          cursor.style.visibility === "hidden" ? "visible" : "hidden";
      }
    }, 700);

    return () => {
      clearInterval(interval);
      if (cursor) {
        cursor.style.visibility = "hidden";
      }
    };
  });

  return (
    <div id={id} className="blinking-cursor" style={{ width: width }}></div>
  );
};

export default BlinkingCursor;
