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

// pass in sidebar to enable/disable
// when modal is active/inactive
/**
 * @param {HTMLDivElement} overlay
 * @param {HTMLElement} sidebar
 */
export function openModal(overlay, sidebar) {
  overlay.classList.add("active");
  overlay.setAttribute("aria-hidden", "false");
  sidebar.inert = true;
}

/**
 * @param {HTMLDivElement} overlay
 * @param {HTMLElement} sidebar
 */
export function closeModal(overlay, sidebar) {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
  sidebar.inert = false;
}
