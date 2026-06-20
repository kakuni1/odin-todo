import { sideButtonSwap } from "./sidebar.js";

/**
 * @param {HTMLButtonElement} sideButton
 * @param {HTMLElement} sideArea
 */
export function initSidebar(sideButton, sideArea) {
  sideButton.addEventListener("click", () => {
    sideButtonSwap(sideArea, sideButton);
  });
}
