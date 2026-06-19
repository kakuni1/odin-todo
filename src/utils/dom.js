import { getIcon } from "./icons.js";

export function createListItem(iconFront, iconEnd, label) {
  const li = document.createElement("li");
  li.innerHTML = getIcon(iconFront);
  const span = document.createElement("span");
  span.className = "list-item";
  span.textContent = label;
  li.appendChild(span);
  if (iconEnd) {
    const button = document.createElement("button");
    button.className = "list-item-action";
    button.dataset.project = label;
    button.setAttribute("aria-label", `Remove ${label}`);
    button.setAttribute("aria-haspopup", "dialog");
    button.innerHTML = getIcon(iconEnd);
    li.appendChild(button);
  }
  return li;
}
