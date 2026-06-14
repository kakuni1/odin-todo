export function getIcon(name) {
	// send name of svg sprite
	return `<svg width="20" height="20"><use href="./src/assets/icons.svg#${name}"></use></svg>`;
}
