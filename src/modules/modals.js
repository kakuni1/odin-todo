/**
 * @param {string} title
 * @returns {HTMLDivElement}
 */
export function createModal(title) {
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  const modal = document.createElement("div");
  modal.className = "modal-box";
  const h2 = document.createElement("h2");
  h2.textContent = title;
  modal.appendChild(h2);
  overlay.appendChild(modal);
  return overlay;
}

/**
 * @param {HTMLDivElement} overlay
 */
export function openModal(overlay) {
  overlay.classList.add("active");
  document.getElementById("sidebar").inert = true;
  document.getElementById("main").inert = true;
}

/**
 * @param {HTMLDivElement} overlay
 */
export function closeModal(overlay) {
  overlay.classList.remove("active");
  document.getElementById("sidebar").inert = false;
  document.getElementById("main").inert = false;
}
