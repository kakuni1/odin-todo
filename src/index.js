import { icons } from "./modules/icons.js";
import { loadInitialSidebar } from "./modules/sidebar-initial.js";

const buttonSidebar = document.createElement("button");
const mainArea = document.createElement("div");
const sidebar = document.createElement("div");

sidebar.id = "container-sidebar";
mainArea.id = "container-main";

buttonSidebar.classList.add("button-sidebar-collapse");
buttonSidebar.innerHTML = icons["icon-sidebar-collapse"];

loadInitialSidebar(sidebar);
sidebar.appendChild(buttonSidebar);
document.body.appendChild(sidebar);
document.body.appendChild(mainArea);
