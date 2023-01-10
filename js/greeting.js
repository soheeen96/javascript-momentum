const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KET = "username";

function onLoginbSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);

  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KET, userName);
  paintGreeings(userName);
}

//loginForm.addEventListener("submit", onLoginbSubmit);
function paintGreeings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KET);

if (saveUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginbSubmit);
} else {
  paintGreeings(saveUsername);
}
