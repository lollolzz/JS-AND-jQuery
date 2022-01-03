const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
// loginForm, loginInput 처럼 중요한 정보를 담는 것이 아니기 때문에 대문자로 사용해도 됨
const USERNAME_KEY = "username";

function onLoginSubmit(event) {

    event.preventDefault(); // 우선은 기본 동장이 실행되는 것을 막아준다고 생각하자
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // greeting.innerText = "Hello" + username;
    // greeting.innerText = `Hello ${username}`; 위와 같은 방법이다 둘 중에 하나만 사용하자 벡팁인걸 잊지말자 !!!
    paintGreetings(username);
}
    
// submit은 엔터를 누르거나 마우스를 클릭하면 발생하는 이벤트이다
loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

} else{
    paintGreetings(savedUsername);
    
}



