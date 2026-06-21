import { getIcon } from "./icons.js";

/**
 * @param {string} icon
 * @param {string} label
 * @returns {HTMLLIElement}
 */
export function createListItem(icon, label) {
  const li = document.createElement("li");
  li.innerHTML = getIcon(icon);
  const span = document.createElement("span");
  span.className = "list-item";
  span.textContent = label;
  li.appendChild(span);
  return li;
}
