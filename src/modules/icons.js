export function getIcon(name) {
	// send name of svg sprite
	return `<svg width="30" height="30"><use href="./assets/icons.svg#${name}"></use></svg>`;
}
