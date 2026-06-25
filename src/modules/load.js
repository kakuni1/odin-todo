import { loadContent } from "./database.js";
import { getIcon } from "./icons.js";
import { sectionClick } from "./main.js";

export function loadSavedData(main, side, button) {
  // sidebar
  // default to "show"
  const savedSide = localStorage.getItem("sidebar-state") ?? "show";
  side.dataset.sidebar = savedSide;
  button.setAttribute("aria-expanded", savedSide === "show" ? "true" : "false");
  button.innerHTML = getIcon(`icon-sidebar-${savedSide}`);
  // main
  // default to "hide"
  const savedMain = localStorage.getItem("main-state") ?? "show";
  main.dataset.main = savedMain;
  main.setAttribute("aria-expanded", savedMain === "show" ? "true" : "false");
  // folder
  if (savedMain === "show") {
    const savedFolderName = localStorage.getItem("main-folder");
    if (savedFolderName) {
      const folder = loadContent().find((f) => f.name === savedFolderName);
      if (folder) sectionClick(folder);
    }
  }
}
