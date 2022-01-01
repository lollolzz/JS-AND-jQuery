const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");


function onLoginSubmit(event) {
    event.preventDefault(); // 우선은 기본 동장이 실행되는 것을 막아준다고 생각하자
    // const username = loginInput.value;
    console.log(loginInput.value);
}

// submit은 엔터를 누르거나 마우스를 클릭하면 발생하는 이벤트이다
loginForm.addEventListener("submit", onLoginSubmit);

