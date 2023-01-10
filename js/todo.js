const toDoForm = document.querySelector("#todo-form")
const toDoInput = document.querySelector("#todo-form input")
const toDoList = document.querySelector("#todo-list")

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function delTodo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id)); //클릭한 li의 아이디가 아닌 다른 li는 남겨두기
  saveToDos(); //saveToDos불러오기 꼭!
  
}

function paintToDo(newTodo){
  const li = document.createElement("li"); 
  li.id = newTodo.id
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const btn = document.createElement("button")
  btn.innerText = "X"
  btn.addEventListener("click", delTodo)

  li.appendChild(span);
  li.appendChild(btn);

  toDoList.appendChild(li)
}

function handleTodoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text:newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if(savedToDos !== null){
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos; //빈 toDos에 새로 적은 리스트를 적용시켜줌
  parsedToDos.forEach(paintToDo);
}


