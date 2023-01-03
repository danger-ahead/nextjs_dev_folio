import { useState, useEffect, MutableRefObject } from "react";

const UseOnScreen = (
  ref: MutableRefObject<HTMLDivElement | null | undefined>
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // to load the page once when the user scrolls down and keep it loaded
      if (!isIntersecting && entry.isIntersecting)
        setIntersecting(entry.isIntersecting);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
  });
  return isIntersecting;
};
export default UseOnScreen;
