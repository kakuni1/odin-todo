import { getIcon } from "./icons.js";

/**
 * @param {string} iconFront
 * @param {string} iconEnd
 * @param {string} label
 */
export function createListItem(iconFront, iconEnd, label) {
	const li = document.createElement("li");
	li.innerHTML = getIcon(iconFront);
	const span = document.createElement("span");
	span.className = "list-item";
	span.textContent = label;
	li.appendChild(span);
	if (iconEnd) li.insertAdjacentHTML("beforeend", getIcon(iconEnd));
	return li;
}
