// const loginform = document.getElementById("login-form");
// const loginInput = loginform.querySelector("input");
// const loginButton = loginform.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


const toDoFormInGreeting = document.getElementById("todo-form");
const toDoListInGreeting = document.getElementById("todo-list");

// 반복되는 strings는 대문자 변수로 저장해놓으면 실수를 줄일 수 있다.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // 유저 이름 저장 -> 함수 호출 
    localStorage.setItem(USERNAME_KEY, username); 
    paintGreetings(username);
}

// 반복되는 작업을 함수로 만들기
function paintGreetings(username) {
    // show the greeting | 유저 정보 기억하기
    greeting.innerText = `Hello,  ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

    toDoFormInGreeting.classList.remove(HIDDEN_CLASSNAME);
    toDoListInGreeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {

    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    // 함수 호출
    paintGreetings(savedUsername);

}
