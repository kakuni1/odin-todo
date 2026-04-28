import "./styles.css";
import background from "./assets/images/background.webp";

const imageBackground = document.createElement("img");
const container = document.createElement("div");

imageBackground.src = background;
imageBackground.alt = "a room filled with lots of different types of records";
imageBackground.id = "background-image";
container.id = "container-image";

container.appendChild(imageBackground);
document.body.appendChild(container);
