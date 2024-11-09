const todo = new TodoApp();
const input = document.querySelector("input");
const addBtn = document.querySelector("#addBtn");

function addTask() {
  if (input.value !== "") {
    todo.addTask(input.value);
    input.value = "";
  } else {
    alert("Invalid Input");
  }
}
addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  todo.getTask();
});
