export function loadInitialSidebar(container) {
  container.style.position = "absolute";
  container.style.width = "var(--sidebar-width)";
  container.style.top = "0px";
  container.style.left = "0px";

  const h2 = document.createElement("h2");
  h2.style.position = "relative";
  h2.style.marginTop = "25px";
  h2.style.marginLeft = "30px";
  h2.textContent = "Projects";

  container.appendChild(h2);
}
