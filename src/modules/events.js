import { closeModal, createModal, openModal } from "./modals.js";
import { sideButtonSwap } from "./sidebar.js";

/**
 * @param {HTMLButtonElement} sideButton
 * @param {HTMLElement} sideArea
 */
export function initSidebar(sideButton, sideArea) {
  sideButton.addEventListener("click", () => {
    sideButtonSwap(sideArea, sideButton);
  });
  const button = document.getElementById("remove-folder");
  if (button) {
    button.addEventListener("click", () => {
      const projectName = document.getElementById("remove-folder").dataset.project;
      const overlay = createModal(`Remove Project: ${projectName}`);
      document.body.appendChild(overlay);
      openModal(overlay);
      const close = overlay.getElementsByClassName("modal-close-button");
      close[0].addEventListener("click", () => {
        closeModal(overlay);
        overlay.remove();
      });
    });
  }
}
