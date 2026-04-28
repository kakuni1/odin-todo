import "./styles.css";
import { importBackgroundImage } from "./modules/image-background.js";

const container = document.createElement("div");
container.id = "container-image";

importBackgroundImage(container);
document.body.appendChild(container);
