/** @param {string} name */
export function getIcon(name) {
	return `<svg aria-hidden="true" focusable="false"><use href="./assets/icons.svg#${name}"></use></svg>`;
}

/**
 * @param {HTMLButtonElement} button
 * @param {string} icon
 */
export function createButton(button, icon) {
	button.innerHTML = getIcon(icon);
}
