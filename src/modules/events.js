import { icons } from "./icons.js";

/**
 * @param {HTMLElement} sidebar
 * @param {HTMLButtonElement} sidebarButton
 */

export function bindEvents(sidebar, sidebarButton) {
	sidebarButton.addEventListener("click", () => {
		const isHidden = sidebar.classList.toggle("hide");
		sidebarButton.innerHTML = icons[ isHidden ? "icon-sidebar-expand" : "icon-sidebar-collapse" ]
	});
}
