const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

// let : 업데이트 가능
let toDos = [];

// 저장
function saveToDos() {
    
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 삭제
function deleteToDo(event) {  
    // 삭제할 li 찾기 : event.target.parentElement(clicked element의 부모)
    // 화면에서 지우는 것. (cf. DB, localStorage에서 지우는 건 아니다)
    const li = event.target.parentElement;
    // 삭제
    li.remove();

    // click event 발생한 li.id를 지운다.
    // toDo : toDos DB에 있는 요소 중 하나
    // typeof li.id => String
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
 
}

// 목록 작성
function paintToDo(newTodo) {
    // 할일 목록
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    // 삭제 버튼
    const button = document.createElement("button");
    button.innerText = "x"
    button.addEventListener("click", deleteToDo);

    // li 안에 span
    li.appendChild(span);
    li.appendChild(button);   
    // 새로운 li를 list에 추가하기
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {

    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    // todo 내역에 id를 부여해 같이 저장한다. => 동적 작업(삭제)시 id를 활용하여 대상 확인가능(li item 구별)
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {

    const parsedToDos = JSON.parse(savedToDos);
    // 업데이트 전 toDos 복원
    toDos = parsedToDos;
    // 배열 요소 각각에 function 실행
    // paintToDo에 배열의 각 요소가 들어가 있는 것을 활용한다.
    parsedToDos.forEach(paintToDo);
}
