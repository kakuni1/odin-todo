import { closeModal, createModal, openModal } from "./modals.js";
import { sideButtonSwap } from "./sidebar.js";

/**
 * @param {HTMLButtonElement} sideButton
 * @param {HTMLElement} sideArea
 */
export function initSidebar(sideButton, sideArea) {
  // click on sidebar button -> hide/show sidebar
  sideButton.addEventListener("click", () => {
    sideButtonSwap(sideArea, sideButton);
  });
  const button = document.getElementById("remove-folder");
  if (button) {
    // click on close button (delete folder) -> confirmation modal
    button.addEventListener("click", () => {
      const projectName = document.getElementById("remove-folder").dataset.project;
      const overlay = createModal(`Remove Project: ${projectName}`);
      document.body.appendChild(overlay);
      openModal(overlay);
      // click outside modal box (overlay) -> close modal
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          closeModal(overlay);
          overlay.remove();
        }
      });
      // click on close modal icon -> close modal
      const close = overlay.getElementsByClassName("modal-close-button");
      close[0].addEventListener("click", () => {
        closeModal(overlay);
        overlay.remove();
      });
    });
  }
}
