/**
 * @param {HTMLElement} sidebar
 * @param {HTMLButtonElement} sidebarButton
 */
export function bindEvents(sidebar, sidebarButton) {
	sidebarButton.addEventListener("click", () => {
		sidebar.classList.toggle("hide");
	});
}
