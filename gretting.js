const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  gretting = document.querySelector(".js-gretting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintName(text) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerText = `Hello ${text}`;
}

function handleSubmit() {
  event.preventDefault();
  const currentValue = input.value;
  paintName(currentValue);
  saveName(currentValue);
}

function saveName(value) {
  localStorage.setItem(USER_LS, value);
}

function askForName() {
  gretting.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null) {
    askForName();
  }else {
    paintName(currentUser);
  }
}


function init() {
  loadName();
}

init()