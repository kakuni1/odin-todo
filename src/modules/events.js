import { loadContent } from "./database.js";
import { createListItem } from "./dom.js";
import { closeModal, createModal, createProjectModal, openModal } from "./modals.js";
import { sideButtonSwap } from "./sidebar.js";

export function initSidebar(sideButton, sideArea, sectionNames) {
  initSideSwap(sideButton, sideArea);

  for (const name of sectionNames) {
    // click on list item -> modal
    document.getElementById(`${name.toLowerCase()}-list`).addEventListener("click", (click) => {
      const item = click.target.closest(`#${name.toLowerCase()}-list > li`);
      // no item -> exit
      if (!item) return;

      const itemName = item.querySelector(".list-item").textContent;
      const overlay = createModal(`${name}: ${itemName}`);
      document.body.appendChild(overlay);
      openModal(overlay);

      const pressEscape = (press) => {
        if (press.key === "Escape") cleanup();
      };

      const cleanup = () => {
        closeModal(overlay);
        overlay.remove();
        document.removeEventListener("keydown", pressEscape);
      };

      // click outside modal box (overlay) -> close modal
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) cleanup();
      });

      // click on close modal icon -> close modal
      overlay.querySelector(".modal-close-button").addEventListener("click", cleanup);
    });
  }

  const buttonAdd = sideArea.querySelector(".button-plus");
  buttonAdd.addEventListener("click", () => {
    const list = sideArea.querySelector("#projects-list");
    const overlay = createProjectModal("New Project");
    document.body.appendChild(overlay);
    openModal(overlay);

    const cleanup = () => {
      closeModal(overlay);
      overlay.remove();
      document.removeEventListener("keydown", pressEscape);
    };

    // escape key -> modal exit
    const pressEscape = (press) => {
      if (press.key === "Escape") cleanup();
    };
    document.addEventListener("keydown", pressEscape);

    // out of bounds mouse click -> modal exit
    overlay.addEventListener("click", (event) => {
      if (event.target === overlay) cleanup();
    });

    // close/cancel -> modal exit
    overlay.querySelector(".modal-close-button").addEventListener("click", cleanup);
    overlay.querySelector(".button-cancel").addEventListener("click", cleanup);

    // confirm -> validate & save
    overlay.querySelector(".button-confirm").addEventListener("click", () => {
      const input = overlay.querySelector("input");
      const name = overlay.querySelector("input").value.trim();
      if (!name) return;

      const folders = loadContent();
      const exists = folders.some((folder) => folder.parent === "Projects" && folder.name === name);
      if (exists) {
        input.style.borderColor = "#f26d78";
        overlay.querySelector("input").focus();
        // no cleanup, allow additional folder naming attempts
        return;
      }

      input.style.borderColor = "";
      cleanup();

      folders.push({ parent: "Projects", icon: "icon-folder", name });
      localStorage.setItem("folders", JSON.stringify(folders));
      list.appendChild(createListItem("icon-folder", name));
    });
    // focus input
    overlay.querySelector("input").focus();
    overlay.querySelector("input").select();
  });
  function initSideSwap(sideButton, sideArea) {
    sideButton.addEventListener("click", () => {
      sideButtonSwap(sideArea, sideButton);
    });
  }
}
