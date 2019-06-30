const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

loadEventListeners();

function loadEventListeners() {
  //DOM load eventt
  document.addEventListener("DOMContentLoaded", getTasks);

  form.addEventListener("submit", addTask);

  taskList.addEventListener("click", removeTask);

  clearBtn.addEventListener("click", clearTasks);

  filter.addEventListener("keyup", filterTasks);
}

function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

function clearTasks(e) {
  if (confirm("areya sure?")) {
    while (taskList.firstChild) {
      taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
  }

  
}

function clearTasksFromLocalStorage(){
  localStorage.clear();
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Areya sure?")) {
      e.target.parentElement.parentElement.remove();

      removeTasksFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function removeTasksFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  //cria o elemento li
  const li = document.createElement("li");
  //atribui a classe
  li.className = "collection-item";
  //cria o valor do texto com base no valor de entrada e coloca no elemento li
  li.appendChild(document.createTextNode(taskInput.value));

  // cria o elemento a
  const link = document.createElement("a");
  // atribui a classe deletar
  link.className = "delete-item secondary-content";
  //atribui o html abaixo
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //coloca o elemento link no li
  li.appendChild(link);

  //cria o elemento button
  //const btn = document.createElement('button');
  //atribuo a classe botao
  //btn.className = 'btn black';
  //atribuo o valor do texto de entrada ao botao
  //btn.appendChild(document.createTextNode(taskInput.value));
  //jogo o btn no li
  //li.appendChild(btn);
  //console.log(btn);

  //coloca o li no elemento tasklist.
  taskList.appendChild(li);

  //store in local storage
  StoreTaskInLocalStorage(taskInput.value);

  taskInput.value = "";

  e.preventDefault();
}

function StoreTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks(e) {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task) {
    //cria o elemento li
    const li = document.createElement("li");
    //atribui a classe
    li.className = "collection-item";
    //cria o valor do texto com base no valor de entrada e coloca no elemento li
    li.appendChild(document.createTextNode(task));

    // cria o elemento a
    const link = document.createElement("a");
    // atribui a classe deletar
    link.className = "delete-item secondary-content";
    //atribui o html abaixo
    link.innerHTML = '<i class="fa fa-remove"></i>';
    //coloca o elemento link no li
    li.appendChild(link);

    //coloca o li no elemento tasklist.
    taskList.appendChild(li);
  });
}
