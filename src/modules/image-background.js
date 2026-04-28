import background from "../assets/images/background.webp";

export function importBackgroundImage(container) {
    const img = document.createElement("img");

    img.src = background;
    img.alt = "a room filled with lots of different types of records";
    img.id = "background-image";

    container.appendChild(img);
}
