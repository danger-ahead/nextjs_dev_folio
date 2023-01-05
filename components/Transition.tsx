import { useState, useEffect } from "react";
import { handleNavBarCollapse } from "../utils/NavBarCollapse";
import PageBody from "./PageBody";

export default function Transition({ children }: { children: any }) {
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<string>("disappear");

  useEffect(() => {
    setTransitionStage("appear");
  }, []);

  useEffect(() => {
    if (children !== displayChildren) {
      handleNavBarCollapse();
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
    <div className="overflow-y-auto h-100p">
      {PageBody(
        <div onTransitionEnd={onTransitionEnd} className={transitionStage}>
          {displayChildren}
        </div>
      )}
    </div>
  );
}
