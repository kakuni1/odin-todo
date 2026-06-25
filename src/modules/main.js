export function createMain() {
  const main = document.createElement("div");
  main.id = "main";
  return main;
}

export function sectionClick(folder) {
  const main = document.querySelector("#main");
  const overview = document.createElement("div");
  overview.className = "folder-overview";

  const header = document.createElement("h2");
  header.textContent = folder.name;
  overview.appendChild(header);

  // clear previous
  main.replaceChildren();
  main.appendChild(overview);

  main.dataset.main = "show";
  localStorage.setItem("main-state", "show");
  localStorage.setItem("main-folder", folder.name);
}
