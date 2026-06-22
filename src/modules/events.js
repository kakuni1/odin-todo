import { closeModal, createModal, openModal } from "./modals.js";
import { sideButtonSwap } from "./sidebar.js";

export function initSidebar(sideButton, sideArea) {
  // click on sidebar button -> hide/show sidebar
  sideButton.addEventListener("click", () => {
    sideButtonSwap(sideArea, sideButton);
  });
  // click on project list item -> confirmation modal
  document.getElementById("projects-list").addEventListener("click", projectClick);
  function projectClick(click) {
    const item = click.target.closest("#projects-list > li");
    // no item -> exit
    if (!item) return;
    // folder click -> create modal
    const projectName = item.querySelector(".list-item").textContent;
    const overlay = createModal(`Project: ${projectName}`);
    document.body.appendChild(overlay);
    openModal(overlay);

    const cleanup = () => {
      closeModal(overlay);
      overlay.remove();
      document.removeEventListener("keydown", pressEscape);
    };

    // click outside modal box (overlay) -> close modal
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) cleanup();
    });

    // escape key press -> close modal
    /**
     * @param {KeyboardEvent} press
     */
    const pressEscape = (press) => {
      if (press.key === "Escape") cleanup();
    };
    document.addEventListener("keydown", pressEscape);

    // click on close modal icon -> close modal
    overlay.querySelector(".modal-close-button").addEventListener("click", cleanup);
  }
}
