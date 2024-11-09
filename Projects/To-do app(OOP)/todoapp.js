class TodoApp {
  constructor() {
    this.tasks = [];
  }
  addTask(taskName) {
    let task = {
      text: taskName,
    };
    this.tasks.push(task);
    this.saveTask();
  }
  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.saveTask();
  }

  editTask(index, newText) {
    this.tasks[index].text = newText;
    this.saveTask();
  }
  saveTask() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    this.getTask();
  }

  getTask() {
    const fromLocalStorage = JSON.parse(localStorage.getItem("tasks"));
    if (fromLocalStorage) {
      this.tasks = fromLocalStorage;
      this.rendertask();
    }
  }

  rendertask() {
    const taskContainer = document.querySelector("ul");
    taskContainer.innerHTML = "";
    this.tasks.forEach((task, index) => {
      const list = document.createElement("li");
      list.className =
        "flex justify-between border-b-2 border-slate-600 px-4 py-2 items-center ";
      list.innerHTML = `
          <div class="font-inria font-light max-w-[200px] whitespace-wrap ">  <span class="pl-2 font-irish">${
            index + 1
          }. </span > ${task.text}</div>
            <div class="px-2">
                
                <button id="delete-btn" onClick="todo.deleteTask(${index})" class="hover:text-white py-2 px-4 bg-red-400 duration-200 hover:bg-red-800 rounded-md">Delete</button>
                <button onClick="todo.editTask(${index}, prompt('Edit Task', '${
        task.text
      }'))" class="py-2 px-4 ml-2 bg-blue-400 hover:bg-blue-900 hover:text-white duration-200 rounded-md">Edit</button>
            </div>
      `;
      taskContainer.appendChild(list);
    });
  }
}
