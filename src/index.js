import { importBackgroundImage } from "./modules/background-image.js";
import { loadInitialSidebar } from "./modules/sidebar-initial.js";

const background = document.createElement("div");
const sidebar = document.createElement("div");

background.id = "container-image";
sidebar.id = "container-sidebar";

importBackgroundImage(background);
loadInitialSidebar(sidebar);

document.body.appendChild(background);
document.body.appendChild(sidebar);
