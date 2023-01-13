import {
  AddAnimationClassParameters,
  AddAnimationClassReturnType,
  RemoveAnimationClassParameters,
} from "../models/DataTypes";

export function addAnimationClass({
  elements = document.getElementsByClassName("elastic"),
  animate = 4,
}: AddAnimationClassParameters): AddAnimationClassReturnType {
  // variables to store the random indexes of the elements that we will animate
  const index: number[] = [];
  const interval = setInterval(() => {
    try {
      // get random indexes
      for (let i = 0; i < animate; i++) {
        index.push(Math.floor(Math.random() * (elements.length - 0)));
      }

      // add the animation class to the elements
      for (let i = 0; i < animate; i++) {
        elements[index[i]].classList.add("elasticAnimate");
        removeAnimationClass({ index: index[i] }); // remove the animation class after 1 second
      }
    } catch {}
    index.splice(0, index.length);
  }, 1000);
  return { interval: interval, index: index };
}

export function removeAnimationClass({
  elements = document.getElementsByClassName("elastic"),
  index,
}: RemoveAnimationClassParameters) {
  setTimeout(() => {
    try {
      elements[index].classList.remove("elasticAnimate");
    } catch {}
  }, 1000);
}
