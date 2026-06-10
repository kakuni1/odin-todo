import { importBackgroundImage } from "./modules/background-image.js";
import { icons } from "./modules/icons.js";
import { loadInitialSidebar } from "./modules/sidebar-initial.js";

const background = document.createElement("div");
const addButton = document.createElement("button");
const sidebar = document.createElement("div");

addButton.classList.add("add-button");
background.id = "container-image";
sidebar.id = "container-sidebar";

addButton.innerHTML = icons["icon-add"];
importBackgroundImage(background);
loadInitialSidebar(sidebar);

sidebar.appendChild(addButton);
document.body.appendChild(sidebar);
document.body.appendChild(background);
