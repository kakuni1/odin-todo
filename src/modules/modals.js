import { getIcon } from "./icons.js";

export function createModal(title) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  const modal = document.createElement("div");
  modal.className = "modal-box";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  const button = document.createElement("button");
  button.className = "modal-close-button";
  button.innerHTML = getIcon("icon-close");
  modal.append(h2, button);
  overlay.appendChild(modal);
  return overlay;
}

export function openModal(overlay) {
  overlay.classList.add("active");
  document.getElementById("sidebar").inert = true;
  document.getElementById("main").inert = true;
}

export function closeModal(overlay) {
  overlay.classList.remove("active");
  document.getElementById("sidebar").inert = false;
  document.getElementById("main").inert = false;
}
