import { importBackgroundImage } from "./modules/background-image.js";
import { printDate } from "./modules/date-print.js";

const container = document.createElement("div");
container.id = "container-image";

importBackgroundImage(container);
document.body.appendChild(container);

console.log(printDate());
