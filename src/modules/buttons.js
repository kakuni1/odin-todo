import { getIcon } from "../utils/icons.js";

/**
 * @param {HTMLElement} sideArea
 * @param {HTMLButtonElement} sideButton
 */
export function sideButtonSwap(sideArea, sideButton) {
	const sideState = sideArea.dataset.sidebar === "show" ? "hide" : "show";
	sideArea.dataset.sidebar = sideState;
	sideButton.innerHTML = getIcon(`icon-sidebar-${sideState}`);
	sideButton.setAttribute(
		"aria-label",
		sideState === "show" ? "Hide sidebar" : "Show sidebar",
	);
	sideButton.setAttribute(
		"aria-expanded",
		sideState === "show" ? "true" : "false",
	);
}
