// 2021년 12월 24일 금요일

// document를 브라우저의 콘솔에 작하면 내가 적은 html을 불러 올 수 있다.
// 그리고 브라우저에 이미 존재하는 object이다. 그리고 우리의 website를 의미한다.

// const title = document.getElementById("something");

// console.dir(title);

// h1.innerText = "Got you!";

// console.log(h1.className);


// Searching For Elements 
// const title = document.querySelector(".hello h1");
//querySelector은 기본적으로 동일한 h1이 있을경우 제일 처음 h1만 가져온다
// querySelectorAll h1을 전부 가져다 온다. -> array를 반환 해준다고 볼 수 있다.
// const title = document.getElementById("hello")
// 두 가지는 기본적으로 같은거다 그렇지만, querySelector는 더 하위의 것들을 가져올 수 있다.
// h1.innerText = "hello"

// EVENT 



// function handleMouseEnter(){
//     h1.innerText = "mouse is here!";
// }

// function handleMouseLeave(){ 
//     h1.innerText = "mouse is gone!";
// }
// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//     alert("copier!");
// }
// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }
// function handleWindowOnline() {
//     alert("ALL GOOD");
// }

// h1.addEventListener("mouseenter", handleMouseEnter);
// h1.addEventListener("mouseleave", handleMouseLeave);
// .removeEventListener을 이용해서 삭제가 가능 하기 때문에 .addEventListener가 더 유용하다!

// 2021년 12월 27일 월요일
// More Events

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// // wifi연결에 따른 이벤트 줄라 멋지네!!!
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);

// CSS IN JAVASCRIPT
const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    // const currentColor = h1.style.color;
    // let newColor;
    // if(currentColor === "blue"){
    //     newColor = "tomato";
    // } else {
    //     newColor = "blue";
    // }
    // h1.style.color = newColor;
    const clickedClass = "clicked sexy-font"
    if(h1.className === clickedClass) { // === 해당 값이 맞는지 확인, = 해당값을 넣어주기
        h1.className = "";
    } else{
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);

