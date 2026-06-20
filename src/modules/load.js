import { getIcon } from "./icons.js";

/**
 * @param {HTMLElement} side
 * @param {HTMLButtonElement} button
 */
export function loadSavedData(side, button) {
  // no saved data -> default to "show"
  const saved = localStorage.getItem("sidebar-state") ?? "show";
  side.dataset.sidebar = saved;
  button.setAttribute("aria-expanded", saved === "show" ? "true" : "false");
  button.innerHTML = getIcon(`icon-sidebar-${saved}`);
}
