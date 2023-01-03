import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  useState,
  useEffect,
} from "react";
import { setTimeout } from "timers/promises";

export default function Transition({ children }: { children: any }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<string>("disappear");

  useEffect(() => {
    setTransitionStage("appear");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage("disappear");
    }
  }, [children, setDisplayChildren, displayChildren]);

  function onTransitionEnd() {
    if (transitionStage === "disappear") {
      setDisplayChildren(children);
      setTransitionStage("appear");
    }
  }

  return (
    <div onTransitionEnd={onTransitionEnd} className={transitionStage}>
      {displayChildren}
    </div>
  );
}
