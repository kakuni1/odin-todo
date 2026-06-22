import { initSideSwap } from "./modules/events.js";
import { loadSavedData } from "./modules/load.js";
import { createMain } from "./modules/main.js";
import { createSidebar } from "./modules/sidebar.js";

const main = createMain();
const { side, button } = createSidebar();
document.body.append(side, main);
initSideSwap(button, side);
loadSavedData(side, button);
