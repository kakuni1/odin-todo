import { formatDate } from "./date.js";
import { getIcon } from "./icons.js";

export function createListItem(icon, label, { deletable = false } = {}) {
  const li = document.createElement("li");
  li.innerHTML = getIcon(icon);
  const span = document.createElement("span");
  span.className = "list-item";
  span.textContent = label;
  li.appendChild(span);

  if (deletable) {
    const action = document.createElement("button");
    action.className = "list-item-action";
    action.setAttribute("aria-label", `Delete: ${label}`);
    action.innerHTML = getIcon("icon-trash");
    li.appendChild(action);
  }
  return li;
}

export function createTaskItem(task, { onToggle, onDelete }) {
  const li = document.createElement("li");
  li.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.addEventListener("change", () => onToggle(task));

  const span = document.createElement("span");
  span.textContent = task.text;
  if (task.done) span.classList.add("done");

  const due = document.createElement("span");
  due.className = "task-due";
  if (task.dueDate) due.textContent = formatDate(new Date(`${task.dueDate}T00:00:00`));

  const del = document.createElement("button");
  del.className = "list-item-action";
  del.setAttribute("aria-label", "Delete task");
  del.innerHTML = getIcon("icon-trash");
  del.addEventListener("click", () => onDelete(task));

  li.append(checkbox, span, due, del);
  return li;
}
