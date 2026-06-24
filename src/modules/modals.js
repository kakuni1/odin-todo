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

export function createProjectModal(title) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";

  const modal = document.createElement("div");
  modal.className = "add-modal-box";

  const h2 = document.createElement("h2");
  h2.textContent = title;

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Project Name";
  input.setAttribute("aria-label", "Project Name");

  const buttonConfirm = document.createElement("button");
  buttonConfirm.textContent = "Confirm";
  buttonConfirm.className = "button-confirm";

  const buttonCancel = document.createElement("button");
  buttonCancel.textContent = "Cancel";
  buttonCancel.className = "button-cancel";

  const buttonClose = document.createElement("button");
  buttonClose.className = "modal-close-button";
  buttonClose.innerHTML = getIcon("icon-close");

  const buttonConfirmSet = document.createElement("div");
  buttonConfirmSet.className = "button-modal-confirm-set";
  buttonConfirmSet.append(buttonConfirm, buttonCancel);

  modal.append(h2, input, buttonConfirmSet, buttonClose);
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
