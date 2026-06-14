export function getIcon(name) {
	// send name of svg sprite
	return `<svg><use href="./src/assets/icons.svg#${name}"></use></svg>`;
}
