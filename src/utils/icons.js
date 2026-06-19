/** @param {string} name */
export function getIcon(name) {
  return `<svg aria-hidden="true"><use href="./assets/icons.svg#${name}"></use></svg>`;
}

export function createButton(button, icon) {
  button.innerHTML = getIcon(icon);
}
