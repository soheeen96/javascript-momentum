const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const toDoForm2 = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KET = "username";

function onLoginbSubmit(event) {
  event.preventDefault();
  toDoForm2.classList.remove(HIDDEN_CLASSNAME);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KET, userName);
  paintGreeings(userName);
}

//loginForm.addEventListener("submit", onLoginbSubmit);
function paintGreeings(username) {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, "0");

  if (hour < 12) {
    greeting.innerHTML = `Good Morning, <span> ${username} </span>`;
  } else if (12 < hour < 18) {
    greeting.innerHTML = `Good Afternoon, <span>${username}</span>`;
  } else {
    greeting.innerHTML = `Good Evening, <span>${username}</span>`;
  }

  //greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoForm2.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KET);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);

  toDoForm2.classList.add(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginbSubmit);
} else {
  paintGreeings(saveUsername);
}
