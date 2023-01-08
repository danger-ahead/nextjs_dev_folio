import React from "react";

type BlinkingCursorProps = {
  width?: string;
};

const BlinkingCursor = ({ width }: BlinkingCursorProps) => {
  return <div className="blinking-cursor" style={{ width: width }}></div>;
};

export default BlinkingCursor;
