const todoList1 = [];
const todoList2 = [];

function addTodoList1() {
  const todoInput = document.querySelector(".todo-input-1");

  todoList1.push(todoInput.value);
  console.log(todoList1);

  todoInput.value = "";

  renderTodoList1();
}

function addTodoList2() {
  const todoNameInput = document.querySelector(".todo-input-2");

  const todoDueDate = document.querySelector(".todo-due-date-input");

  if (todoNameInput.value != "" && todoDueDate.value != ""){
    todoList2.push({
      name: todoNameInput.value,
      dueDate: todoDueDate.value,
    });
    console.log(todoList2);
  
    todoNameInput.value = "";
    todoDueDate.value = "";
  
    renderTodoList2();
  } else {
    alert("Todo Name or Date can't be empty!");
  }
  
}

function renderTodoList1() {
  let todoHTML = "";
  // for (i = 0; i < todoList.length; i++) {
  //   todoHTML += `
  //   <p>${todoList[i]}
  //   <button onclick="todoList.splice(${i}, 1);renderTodoList();">Delete</button>
  //   </p>`;
  // }

  todoList1.forEach(function (element, index) {
    todoHTML += `
    <p>${element}
    <button onclick="todoList1.splice(${index}, 1);renderTodoList1();">Delete</button>
    </p>`;
  });

  document.querySelector(".todo-list-1").innerHTML = todoHTML;
}

function renderTodoList2() {
  let todoHTML = "";

  // for (const key in todoObject) {
  //   console.log(`${key}: ${todoObject[key]}`);
  //   todoHTML += `
  //   <p>${key} ${todoObject[key]}
  //   <button onclick="delete todoObject['${key}'];renderTodoList2();">Delete</button>
  //   </p>`;
  // }
  todoList2.forEach(function (element, index) {
    todoHTML += `
    <div>${element.name}</div>
    <div>${element.dueDate}</div> 
    <button onclick="todoList2.splice(${index}, 1);renderTodoList2();" class="delete-todo-button">Delete</button>
    `;
  });

  document.querySelector(".todo-list-2").innerHTML = todoHTML;
}
