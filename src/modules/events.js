import { getIcon } from "./icons.js";

/**
 * @param {HTMLElement} sidebar
 * @param {HTMLButtonElement} sidebarButton
 */

export function bindEvents(sidebarButton) {
	sidebarButton.addEventListener("click", () => {
		const sidebarState =
			document.body.dataset.sidebar === "show" ? "hide" : "show";
		document.body.dataset.sidebar = sidebarState;
		sidebarButton.innerHTML = getIcon(`icon-sidebar-${sidebarState}`);
	});
}
