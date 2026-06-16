import { getIcon } from "./icons.js";

/**
 * @param {HTMLButtonElement} sidebarButton
 */

export function addClickEvent(sidebarButton) {
	sidebarButton.addEventListener("click", () => {
		const sidebarState =
			document.body.dataset.sidebar === "show" ? "hide" : "show";
		document.body.dataset.sidebar = sidebarState;
		sidebarButton.innerHTML = getIcon(`icon-sidebar-${sidebarState}`);
	});
}
