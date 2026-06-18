import { createListItem } from "../utils/dom.js";
import { createButton, getIcon } from "../utils/icons.js";

export function createSidebar() {
	const side = document.createElement("div");
	side.id = "sidebar";
	side.dataset.sidebar = "show";

	const button = document.createElement("button");
	button.className = "button-sidebar";
	button.setAttribute("aria-label", "Hide sidebar");
	button.setAttribute("aria-expanded", "true");
	button.setAttribute("aria-controls", "sidebar");
	createButton(button, "icon-sidebar-hide");

	const tasks = document.createElement("h2");
	tasks.textContent = "Tasks";
	const tasksList = document.createElement("ul");
	tasksList.appendChild(createListItem("icon-calendar-today", "Today"));
	tasksList.appendChild(createListItem("icon-calendar-week", "This week"));
	tasksList.appendChild(createListItem("icon-planned", "Planned"));
	tasksList.appendChild(createListItem("icon-complete", "Complete"));

	const projects = document.createElement("h2");
	projects.textContent = "Projects";
	const projectsList = document.createElement("ul");
	projectsList.appendChild(createListItem("icon-folder", "Main"));

	const sideContent = document.createElement("div");
	sideContent.id = "side-content";
	sideContent.append(tasks, tasksList, projects, projectsList);

	side.append(button, sideContent);
	return { side, button };
}

/**
 * @param {HTMLElement} sideArea
 * @param {HTMLButtonElement} sideButton
 */
export function sideButtonSwap(sideArea, sideButton) {
	const sideState = sideArea.dataset.sidebar === "show" ? "hide" : "show";
	sideArea.dataset.sidebar = sideState;
	localStorage.setItem("sidebar-state", sideState);
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
