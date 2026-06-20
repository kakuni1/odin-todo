import { sideButtonSwap } from "./sidebar.js";

/**
 * @param {HTMLButtonElement} sideButton
 * @param {HTMLElement} sideArea
 */
export function initEvents(sideButton, sideArea) {
  sideButton.addEventListener("click", () => {
    sideButtonSwap(sideArea, sideButton);
  });
}
