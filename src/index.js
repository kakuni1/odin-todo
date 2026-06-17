import { initEvents } from "./modules/events.js";
import { createButton } from "./utils/icons.js";

const mainArea = document.createElement("div");
const sideArea = document.createElement("div");
const sideButton = document.createElement("button");
const tasks = document.createElement("h2");
const projects = document.createElement("h2");

mainArea.id = "main";
sideArea.id = "sidebar";
createButton(sideButton, "icon-sidebar-hide");
sideButton.className = "button-sidebar";
sideButton.setAttribute("aria-label", "Hide sidebar");
sideButton.setAttribute("aria-expanded", "true");
sideButton.setAttribute("aria-controls", "sidebar");
sideArea.dataset.sidebar = "show";
tasks.textContent = "Tasks";
projects.textContent = "Projects";

document.body.appendChild(mainArea);
document.body.appendChild(sideArea);
document.body.appendChild(sideButton);
sideArea.appendChild(tasks);
sideArea.appendChild(projects);
initEvents(sideButton, sideArea);
