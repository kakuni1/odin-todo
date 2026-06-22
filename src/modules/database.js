const defaultState = [
  // icons from icons.svg spritsheet
  { parent: "Tasks", icon: "icon-calendar-today", name: "Today" },
  { parent: "Tasks", icon: "icon-calendar-week", name: "This week" },
  { parent: "Tasks", icon: "icon-planned", name: "Planned" },
  { parent: "Tasks", icon: "icon-complete", name: "Complete" },
  { parent: "Projects", icon: "icon-folder", name: "Main" },
];

export function loadContent() {
  // load default if no localStorage
  try {
    return JSON.parse(localStorage.getItem("folders")) ?? defaultState;
    // load default if localStorage data is invalid
  } catch {
    return defaultState;
  }
}
