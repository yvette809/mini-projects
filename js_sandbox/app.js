// define our UI variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load all event listeners
loadEventListeners();

//load all event listeners
function loadEventListeners() {
  //Dom load events
  document.addEventListener("DomContentLoaded", getTasks);
  //add task
  form.addEventListener("submit", addTask);
  //remove task event
  taskList.addEventListener("click", removeTask);

  //clear task event
  clearBtn.addEventListener("click", clearTasks);

  // filter tasks events
  filter.addEventListener("keyup", filterTasks);
}

// Get tasks from local storage

function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach((task) => {
    const li = document.createElement("li");
    //add class
    li.className = "collection-item";
    // create text content
    li.textContent = task;

    // create new link element
    const link = document.createElement("a");
    // add class
    link.className = "delete-item secondary-content";
    link.innerHTML = '<li class ="fa fa-remove"></li>';

    //append the link to li
    li.appendChild(link);

    //apppend li to the ul
    taskList.appendChild(li);
  });
}

// Add task

function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "") {
    alert("Add task");
  }

  // create li elements
  const li = document.createElement("li");
  //add class
  li.className = "collection-item";
  // create text content
  li.textContent = taskInput.value;

  // create new link element
  const link = document.createElement("a");
  // add class
  link.className = "delete-item secondary-content";
  link.innerHTML = '<li class ="fa fa-remove"></li>';

  //append the link to li
  li.appendChild(link);

  //apppend li to the ul
  taskList.appendChild(li);

  // storetask in local storage
  storeTaskInLocalStorage(taskInput.value);
  // clear input
  taskInput.value = "";
}

// store task

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove();

      // remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

// remove from LS
function removeTaskFromLocalStorage(taskItem){
  console.log(taskItem)
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(function(task, index){
    if(taskItem.textContent=== task){
      tasks.splice(index,1)
    }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

// clear tasks
//solution 1
function clearTasks() {
  taskList.innerHTML = "";

  //clears tasks from localstorage
  clearTasksFromLocalStorage()
}

//clear from LS
function clearTasksFromLocalStorage(){
  localStorage.clear()
}

//solution2  faster

// while(taskList.firstChild){
//   taskList.removeChild(taskList.firstChild)
// }

//filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach((task) => {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}
