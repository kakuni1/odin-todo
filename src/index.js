import { initSidebar } from "./modules/events.js";
import { loadSavedData } from "./modules/load.js";
import { createMain } from "./modules/main.js";
import { createSidebar } from "./modules/sidebar.js";

const sectionNames = ["Tasks", "Projects"];
const main = createMain();
const { side, button } = createSidebar(sectionNames);
document.body.append(side, main);
initSidebar(button, side, sectionNames);
loadSavedData(main, side, button);
