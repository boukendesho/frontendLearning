const todoList = [];

function addTodoList() {
  const todoInput = document.querySelector(".todo-input-1");

  todoList.push(todoInput.value);
  console.log(todoList);

  todoInput.value = "";

  renderTodoList();
}

function renderTodoList() {
  let todoHTML = "";
  for (i = 0; i < todoList.length; i++) {
    todoHTML += `<p>${todoList[i]}</p>`;
  }

  document.querySelector(".todo-list-1").innerHTML = todoHTML;
}
