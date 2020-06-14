const toDoForm = document.querySelector(".js-todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoPendingList = document.querySelector(".js-todo-pending-list");
const toDoFinishedList = document.querySelector(".js-todo-finished-list");
const PENDING_TODOS = "PENDING";
const FINISHED_TODOS = "FINISHED";

let pendingToDos = [];
let finishedToDos = [];

function deletePendingToDo(event) {
  const li = event.target.parentNode;
  toDoPendingList.removeChild(li);
  const cleanToDos = pendingToDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  pendingToDos = cleanToDos;
  updatePendingToDos();
}

function deleteFinishedToDo(event) {
  const li = event.target.parentNode;
  toDoFinishedList.removeChild(li);
  const cleanToDos = finishedToDos.filter(function (toDo) {
    return toDo.id !== li.id;
  });
  finishedToDos = cleanToDos;
  updateFinishedToDos();
}

function finishedToDo(event) {
  deletePendingToDo(event);
  const li = event.target.parentNode;
  const span = li.querySelector("span");

  paintFinishedToDo(span.innerText);
}

function paintFinishedToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Math.random().toString(36).substr(2, 9);

  span.innerText = text;
  delBtn.innerText = "❌";
  backBtn.innerText = "⏪";
  delBtn.addEventListener("click", deleteFinishedToDo);
  backBtn.addEventListener("click", backToPending);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);

  toDoFinishedList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  li.id = newId;
  finishedToDos.push(toDoObj);
  updateFinishedToDos();
}

function backToPending(event) {
  deleteFinishedToDo(event);
  const li = event.target.parentNode;
  const text = li.querySelector("span").innerText;
  paintPendingToDo(text);
}

function updatePendingToDos() {
  localStorage.setItem(PENDING_TODOS, JSON.stringify(pendingToDos));
}

function updateFinishedToDos() {
  localStorage.setItem(FINISHED_TODOS, JSON.stringify(finishedToDos));
}

function paintPendingToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const finishedBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = Math.random().toString(36).substr(2, 9);

  span.innerText = text;
  delBtn.innerText = "❌";
  finishedBtn.innerText = "✅";
  delBtn.addEventListener("click", deletePendingToDo);
  finishedBtn.addEventListener("click", finishedToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finishedBtn);

  li.id = newId;
  delBtn.id = "delete_button";
  finishedBtn.id = "finish_button";
  toDoPendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  pendingToDos.push(toDoObj);
  updatePendingToDos();
}

function loadToDos() {
  const loadedPendingToDos = localStorage.getItem(PENDING_TODOS);

  if (loadedPendingToDos !== null) {
    const parsedToDos = JSON.parse(loadedPendingToDos);
    parsedToDos.forEach(function (toDo) {
      paintPendingToDo(toDo.text);
    });
  }
}

function loadFinishedToDos() {
  const loadedFinishedToDos = localStorage.getItem(FINISHED_TODOS);
  if (loadedFinishedToDos !== null) {
    const parsedToDos = JSON.parse(loadedFinishedToDos);
    parsedToDos.forEach(function (toDo) {
      paintFinishedToDo(toDo.text);
    });
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintPendingToDo(currentValue);
  toDoInput.value = "";
}

function init() {
  loadToDos();
  loadFinishedToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
