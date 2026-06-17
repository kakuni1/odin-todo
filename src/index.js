import { initEvents } from "./modules/events.js";
import { createButton } from "./utils/icons.js";

const mainArea = document.createElement("div");
const sideArea = document.createElement("div");
const sideButton = document.createElement("button");

const tasks = document.createElement("h2");
const tasksList = document.createElement("ul");
const todayItem = document.createElement("li");
const projects = document.createElement("h2");
const projectsList = document.createElement("ul");
const projectA = document.createElement("li");

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
todayItem.textContent = "Today";
projectA.textContent = "Main";

tasksList.appendChild(todayItem);
projectsList.appendChild(projectA);
sideArea.appendChild(tasks);
sideArea.appendChild(tasksList);
sideArea.appendChild(projects);
sideArea.appendChild(projectsList);

document.body.appendChild(mainArea);
document.body.appendChild(sideArea);
document.body.appendChild(sideButton);
initEvents(sideButton, sideArea);
