import { initEvents } from "./modules/events.js";
import { loadSavedData } from "./modules/load.js";
import { createMain } from "./modules/main.js";
import { createModal, openModal } from "./modules/modals.js";
import { createSidebar } from "./modules/sidebar.js";

const main = createMain();
const { side, button } = createSidebar();

document.body.appendChild(side);
document.body.appendChild(main);
initEvents(button, side);
loadSavedData(side, button);
const overlay = createModal("hello");
document.body.appendChild(overlay);
openModal(overlay);
