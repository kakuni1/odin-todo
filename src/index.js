import { importBackgroundImage } from "./modules/background-image.js";

const background = document.createElement("div");
background.id = "container-image";

importBackgroundImage(background);
document.body.appendChild(background);
