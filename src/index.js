import { bindEvents } from "./modules/events.js";
import { getIcon } from "./modules/icons.js";
import { sidebarLoad } from "./modules/sidebar.js";

const sidebarButton = document.createElement("button");
const mainArea = document.createElement("div");
const sidebar = document.createElement("div");

sidebar.id = "container-sidebar";
mainArea.id = "container-main";

sidebarLoad(sidebar);
mainArea.appendChild(sidebarButton);
document.body.appendChild(sidebar);
document.body.appendChild(mainArea);
document.body.dataset.sidebar = "expanded";
sidebarButton.innerHTML = getIcon("icon-sidebar-collapse");
sidebarButton.classList.add("button-sidebar");
bindEvents(sidebar, sidebarButton);
