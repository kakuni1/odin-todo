import { initEvents } from "./modules/events.js";
import { createMain } from "./modules/main.js";
import { createSidebar, createSidebarButton } from "./modules/sidebar.js";

const mainArea = createMain();
const sideArea = createSidebar();
const sideButton = createSidebarButton();

document.body.appendChild(mainArea);
document.body.appendChild(sideArea);
document.body.appendChild(sideButton);
initEvents(sideButton, sideArea);
