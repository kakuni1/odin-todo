import { bindEvents } from "./modules/events.js";
import { icons } from "./modules/icons.js";
import { sidebarLoad } from "./modules/sidebar.js";

const sidebarButton = document.createElement("button");
const mainArea = document.createElement("div");
const sidebar = document.createElement("div");

sidebar.id = "container-sidebar";
mainArea.id = "container-main";

sidebarButton.classList.add("button-sidebar-collapse");
sidebarButton.innerHTML = icons["icon-sidebar-collapse"];

sidebarLoad(sidebar);
sidebar.appendChild(sidebarButton);
document.body.appendChild(sidebar);
document.body.appendChild(mainArea);
bindEvents(sidebar, sidebarButton);
