import { icons } from "./modules/icons.js";
import { loadInitialSidebar } from "./modules/sidebar-initial.js";

const addButton = document.createElement("button");
const mainArea = document.createElement("div");
const sidebar = document.createElement("div");

sidebar.id = "container-sidebar";
mainArea.id = "container-main";

addButton.classList.add("add-button");
addButton.innerHTML = icons["icon-sidebar-collapse"];

loadInitialSidebar(sidebar);
sidebar.appendChild(addButton);
document.body.appendChild(sidebar);
document.body.appendChild(mainArea);
