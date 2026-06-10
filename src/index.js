import { icons } from "./modules/icons.js";
import { loadInitialSidebar } from "./modules/sidebar-initial.js";

const addButton = document.createElement("button");
const sidebar = document.createElement("div");

sidebar.id = "container-sidebar";

addButton.classList.add("add-button");
addButton.innerHTML = icons["icon-add"];

loadInitialSidebar(sidebar);
sidebar.appendChild(addButton);
document.body.appendChild(sidebar);
