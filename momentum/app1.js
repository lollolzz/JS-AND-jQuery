// 2021년 12월 24일 금요일

// document를 브라우저의 콘솔에 작하면 내가 적은 html을 불러 올 수 있다.
// 그리고 브라우저에 이미 존재하는 object이다. 그리고 우리의 website를 의미한다.

// const title = document.getElementById("something");

// console.dir(title);

// title.innerText = "Got you!";

// console.log(title.className);


// Searching For Elements 
// const title = document.querySelector(".hello h1");
//querySelector은 기본적으로 동일한 h1이 있을경우 제일 처음 h1만 가져온다
// querySelectorAll h1을 전부 가져다 온다. -> array를 반환 해준다고 볼 수 있다.
// const title = document.getElementById("hello")
// 두 가지는 기본적으로 같은거다 그렇지만, querySelector는 더 하위의 것들을 가져올 수 있다.
// title.innerText = "hello"

// EVENT 
const title = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
title.style.color = "blue";
}

function handleMouseEnter(){
title.innerText = "mouse is here!";
}

function handleMouseLeave(){ 
title.innerText = "mouse is gone!";
}

title.addEventListener("click",handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

