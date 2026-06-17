import { createListItem } from "../utils/dom.js";
import { createButton, getIcon } from "../utils/icons.js";

export function createSidebarButton() {
	const button = document.createElement("button");
	button.className = "button-sidebar";
	button.setAttribute("aria-label", "Hide sidebar");
	button.setAttribute("aria-expanded", "true");
	button.setAttribute("aria-controls", "sidebar");
	createButton(button, "icon-sidebar-hide");
	return button;
}

export function createSidebar() {
	const side = document.createElement("div");
	side.id = "sidebar";
	side.dataset.sidebar = "show";

	const tasks = document.createElement("h2");
	tasks.textContent = "Tasks";
	const tasksList = document.createElement("ul");
	tasksList.appendChild(createListItem("icon-calendar-today", "Today"));

	const projects = document.createElement("h2");
	projects.textContent = "Projects";
	const projectsList = document.createElement("ul");
	projectsList.appendChild(createListItem("icon-folder", "Main"));

	side.append(tasks, tasksList, projects, projectsList);
	return side;
}

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
