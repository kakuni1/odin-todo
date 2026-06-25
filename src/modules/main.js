export function createMain() {
  const main = document.createElement("div");
  main.id = "main";
  return main;
}

export function sectionClick() {
  const sectionOverview = document.createElement("div");
  sectionOverview.className = "folder-overview";
  document.querySelector("#main").replaceChildren();
  document.querySelector("#main").appendChild(sectionOverview);
}
