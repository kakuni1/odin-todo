const defaultState = [
  // icons from icons.svg spritsheet
  { parent: "Tasks", icon: "icon-calendar-today", name: "Today" },
  { parent: "Tasks", icon: "icon-calendar-week", name: "This week" },
  { parent: "Tasks", icon: "icon-planned", name: "Planned" },
  { parent: "Tasks", icon: "icon-complete", name: "Complete" },
  { parent: "Projects", icon: "icon-folder", name: "Default" },
];

export function loadContent() {
  try {
    const data = localStorage.getItem("folders");
    // load defaults if fresh session
    if (data === null) {
      localStorage.setItem("folders", JSON.stringify(defaultState));
      return defaultState;
    }
    // load saved data if prior session
    return JSON.parse(data);
  } catch {
    // load defaults if prior session data is invalid
    localStorage.setItem("folders", JSON.stringify(defaultState));
    return defaultState;
  }
}
