import * as elements from "./elements.js";
import  { taskList }  from "../index.js";

// Create a Book Class
export default class ToDo {
  constructor(description, completed, id) {
    this.description = description;
		this.completed = completed;
		this.id = id;
  }
  
  // Method to load added Books
  static addToDo(i) {
    elements.toDoList.innerHTML += `<div class="shell">
    <input type="checkbox" class="check"/>
    <p class="text-in">${taskList[i].description}</p>
    <button class="button">Remove</button>
    </div>`;
  }

	// Method to Refresh Page
  static refreshToDo() {
    elements.toDoList.innerHTML = '';
    for (let i = 0;i < taskList.length;i++) {
      elements.toDoList.innerHTML += `<div class="shell">
    <input type="checkbox" class="check"/>
    <p class="text-in">${taskList[i].description}</p>
    <button class="button">Remove</button>
    </div>`;
    }
  }
}

