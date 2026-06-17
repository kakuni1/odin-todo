import { getIcon } from "./icons.js";

/**
 * @param {string} iconName
 * @param {string} label
 */
export function createListItem(iconName, label) {
	const li = document.createElement("li");
	li.innerHTML = getIcon(iconName);
	const span = document.createElement("span");
	span.textContent = label;
	li.appendChild(span);
	return li;
}
