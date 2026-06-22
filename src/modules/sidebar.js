import { loadContent } from "./database.js";
import { createListItem } from "./dom.js";
import { createButton, getIcon } from "./icons.js";

export function createSidebar() {
  const side = document.createElement("div");
  side.id = "sidebar";
  side.dataset.sidebar = "show";

  const button = document.createElement("button");
  button.className = "button-sidebar";
  button.setAttribute("aria-label", "Hide sidebar");
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-controls", "sidebar");
  createButton(button, "icon-sidebar-hide");

  const items = loadContent();
  // Set to grab unique parent (Tasks, Projects)
  // wrap in [] to convert it back to an array
  const sections = [...new Set(items.map((item) => item.parent))];

  const sideContent = document.createElement("div");
  sideContent.id = "side-content";

  // build out the sections (Tasks, Projects)
  for (const section of sections) {
    const h2 = document.createElement("h2");
    h2.textContent = section;
    const list = document.createElement("ul");
    list.id = `${section.toLowerCase()}-list`;
    // build out the items (Today, This week, etc.)
    for (const item of items) {
      if (item.parent === section) list.appendChild(createListItem(item.icon, item.name));
      sideContent.append(h2, list);
    }
  }
  side.append(button, sideContent);
  return { button, side };
}

export function sideButtonSwap(sideArea, sideButton) {
  const sideState = sideArea.dataset.sidebar === "show" ? "hide" : "show";
  sideArea.dataset.sidebar = sideState;
  localStorage.setItem("sidebar-state", sideState);
  sideButton.innerHTML = getIcon(`icon-sidebar-${sideState}`);
  sideButton.setAttribute("aria-label", sideState === "show" ? "Hide sidebar" : "Show sidebar");
  sideButton.setAttribute("aria-expanded", sideState === "show" ? "true" : "false");
}
