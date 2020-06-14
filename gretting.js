const nameContainer = document.querySelector(".js-user-name");
const nameForm = nameContainer.querySelector(".js-name-form");
const nameInput = nameContainer.querySelector("input");
const nameSpace = nameContainer.querySelector("h1");
const USER_NAME = "userName";
let userName = "";

function setName() {
  savedName = localStorage.getItem(USER_NAME);
  userName = savedName === null ? userName : savedName;
}

function deleteForm() {
  nameContainer.removeChild(nameForm);
}

function paintName() {
  nameSpace.innerText = `Hello! ${userName}`;
}

function saveName() {
  localStorage.setItem(USER_NAME, userName);
}

function handleSubmit(event) {
  event.preventDefault();
  userName = nameInput.value;
  saveName();
  deleteForm();
  paintName();
}

function init() {
  nameContainer.addEventListener("submit", handleSubmit);
  setName();
  if (userName !== "") {
    deleteForm();
    paintName();
  }
}

init();
