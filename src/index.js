import ToDo from './modules/taskclass.js';
import * as elements from './modules/elements.js';
import taskList from './modules/taskList.js';


if (localStorage.getItem('todos')) {
	taskList.push(JSON.parse(localStorage.getItem('todos')));
}

// After the page loads, check if each task is completed or not and set the checkbox accordingly
// if (taskList != []) {
//   for (let i = 0; i < taskList.length; i++) {
//     if (taskList[i].completed) {
//       elements.toDoList.children[i].children[0].checked = true;
//       elements.toDoList.children[i].children[1].style.textDecoration =
//         'line-through';
//     }
//   }
// }

// for (let i = 0; i < tasks.length; i += 1) {
//   if (tasks[i].completed) {
//     vars.tasksContainer.children[i].children[0].checked = true;
//     vars.tasksContainer.children[i].children[1].style.textDecoration =
//       'line-through';
//   }
// }

// Push store into books if store has data
if (taskList) {
  ToDo.refreshToDo();
}

// Event Listener to Add Books
const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (elements.userInput.value === '') {
    return false;
  } else {
    const tValue = elements.userInput.value;
    const aValue = 'false';
    const nums = taskList.length + 1;
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
    console.log(eachTask);
    // get the index of the task to be removed by the title of the task
    const eachTaskIndex = taskList.findIndex(
      (task) =>
        task.description === eachTask.querySelector('.text-in').innerText
    );
    console.log(eachTaskIndex);
    // remove the task from the array
    taskList.splice(eachTaskIndex, 1);
    // reset the id
    ToDo.resetId();
    elements.toDoList.removeChild(eachTask);
    localStorage.setItem('todos', JSON.stringify(taskList));
  }
});

// Event Listener for the checkbox to set taskList[i].completed to true
elements.toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('check')) {
    const eachCheck = e.target.parentElement;
    console.log(eachCheck);
    // get the index of the task to be set to completed = true by the title of the task
    const eachCheckIndex = taskList.findIndex(
      (check) =>
        check.description === eachCheck.querySelector('.text-in').innerText
    );
    console.log(eachCheckIndex);
    // set the task to completed = true
    taskList[eachCheckIndex].completed = 'true';
    localStorage.setItem('todos', JSON.stringify(taskList));
  }
});
