import { getIcon } from "./icons.js";

export function createListItem(icon, label, { deletable = false } = {}) {
  const li = document.createElement("li");
  li.innerHTML = getIcon(icon);
  const span = document.createElement("span");
  span.className = "list-item";
  span.textContent = label;
  li.appendChild(span);

  if (deletable) {
    const action = document.createElement("button");
    action.className = "list-item-action";
    action.setAttribute("aria-label", `Delete: ${label}`);
    action.innerHTML = getIcon("icon-trash");
    li.appendChild(action);
  }
  return li;
}
