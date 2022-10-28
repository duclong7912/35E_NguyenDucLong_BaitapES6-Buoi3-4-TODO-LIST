import { Task } from "./models/Task.js";
import { TaskList } from "./models/TaskList.js";

let input = document.querySelector("#newTask");
let taskList = new TaskList();

taskList.getLocalStorage();
taskList.renderTask("#todo", taskList.arrTask);
taskList.getCompletedTask(); 
taskList.renderTask("#completed", taskList.arrCompletedTask)

document.querySelector("#addItem").addEventListener("click", function () {
  let id = Math.floor(Math.random() * 100);
  let task = new Task(id, input.value);
  if (input.value) {
    taskList.addTask(task);
  }
  taskList.renderTask("#todo", taskList.arrTask);
  taskList.setLocalStorage();
  input.value = "";
});

window.completedTask = (id) => {
  taskList.taskCompleted(id); 
  taskList.renderTask("#completed", taskList.arrCompletedTask);
  taskList.deleteTask(id, taskList.arrTask);
  taskList.renderTask("#todo", taskList.arrTask);
  taskList.setCompletedTask(); 
  taskList.setLocalStorage();

};

window.delTask = (id) => {
  taskList.deleteTask(id, taskList.arrTask);
  taskList.renderTask("#todo", taskList.arrTask);
  taskList.setLocalStorage();

  taskList.deleteTask(id, taskList.arrCompletedTask);
  taskList.renderTask("#completed", taskList.arrCompletedTask);
  taskList.setCompletedTask(); 
  taskList.setLocalStorage();
};

document.querySelector("#two").addEventListener("click", function() {
  taskList.getLocalStorage();
  taskList.sortTaskAZ();
  taskList.renderTask("#todo", taskList.arrTask);
  taskList.setLocalStorage();
});

document.querySelector("#three").addEventListener("click", function() {
  taskList.getLocalStorage();
  taskList.sortTaskZA();
  taskList.renderTask("#todo", taskList.arrTask);
  taskList.setLocalStorage();
})