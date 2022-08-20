import ToDo from "./modules/taskclass.js";
import * as  elements from "./modules/elements.js";
import './style.css';

// Create Book Array
 export const taskList = [];

// Collect Stored data from Local Storage
const store = JSON.parse(localStorage.getItem('todos'));

// Push store into books if store has data
if (store) {
	taskList.push(...store);
	ToDo.refreshToDo();
}

// Event Listener to Add Books
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', (e) => {
	e.preventDefault();

	if (elements.userInput.value === '') {
		return false
	} else {
	const tValue = elements.userInput.value;
	const aValue = 'false';
	const nums = (taskList.length -1);
	const libro = new ToDo(tValue, aValue, nums);

	// Push Libro to books
 	taskList.push(libro);
	localStorage.setItem('todos', JSON.stringify(taskList));
	ToDo.addToDo(taskList.length - 1);
	}
});

// Function to Remove Task
elements.toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('button')) {
    const eachTask = e.target.parentElement;
    elements.toDoList.removeChild(eachTask);
    const taskIndex = taskList.findIndex(
      (tTask) => tTask.title === eachTask.querySelector('.text').innerText,
    );
    taskList.splice(taskIndex, 1);
    localStorage.setItem('todos', JSON.stringify(taskList));
  }
});

// Event Listaener for checkbox
const checkbox = document.querySelectorAll('.check');
checkbox.forEach(i => {
	i.addEventListener('click', () => {
		i.parentFlement.classList.toggle('cont');
	})
});