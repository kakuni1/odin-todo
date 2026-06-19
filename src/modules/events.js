import { sideButtonSwap } from "./sidebar.js";

export function initEvents(sideButton, sideArea) {
  sideButton.addEventListener("click", () => {
    sideButtonSwap(sideArea, sideButton);
  });
}
