import { initEvents } from "./modules/events.js";
import { createMain } from "./modules/main.js";
import { createSidebar } from "./modules/sidebar.js";

const main = createMain();
const { side, button } = createSidebar();

document.body.appendChild(side);
document.body.appendChild(main);
initEvents(button, side);
