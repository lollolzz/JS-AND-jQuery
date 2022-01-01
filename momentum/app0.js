// 2021년 12월  

// const a  = 10;
// const b  = 2;
// const myName = "nico"

// console.log(a / b);
// console.log(a + b);
// console.log(a * b);
// console.log("hello" + myName);

// myName = "NeungHan"

// ㅣet은 새로운 것을 생성 할 때 사용하는 것이지, 이미 작성되있는 것을 수정할때는 사용하지 않는다.
// const를 사용한다면 절대로 기존의 값을 변경할 수 없다. 
// let은 기존의 값 변경이 가능하다. 
// 두 가지 중 무엇을 사용해야 할까 ??? const를 기본적으로 사용, 업데이트 하고 싶은 variables에만 사용한다.
// 우리가 사용한 var는 오래된 자바 스크립트여서 const,let을 사용하도록 하자 

// console.log("your name is " + myName);
// const amIFat = null;
// console.log(amIFat);


// 2021년 12월 07일 화요일 

// 1. Booleans
// undefined 는 값이 정의 되지 않은것 
// null은 아무것도 없는거

// const amIFat = null;
// console.log(amIFat);

// 2. Array 
// const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// get itme form array
// console.log(dayOfWeek);

// add one more day to the array (dyaOfWeek라는 배열안에 추가해주는 명령어) 
// dayOfWeek.push("sun")

// console.log(dayOfWeek);

// 3.Objects -- property를 가진 데이터를 저장하도록 해준다 
// const player = {
//     name : "nico",
//     points: 10,
//     fat: true,
// };
// 위의 property를 array로 나열 할 수 없다 -> 각각의 요소들이 무엇을 정의하고 있는지 알 수 없기 때문이다 

// console.log(player.fat);
// player.lastName = "potato";
// player.poinst = player.points + 15;
// console.log(player);
// 여기서 의문 const는 수정을 할 수 없다고 했는데 왜 수정이 가능한건지 ?? 
// const 자체를 수정 할 수 없지만, 안의 object를 수정하는 것은 가능하다 

// 4. Functions part One - function이란 계속 반복 사용 할 수 있는 코드 조각
// function 안의 내용을 출력하려고 할때 argument(인수)를 사용
// argument는 function을 실행하는 동안 어던 정보를 function에게 보낼 수 있는 방법 
// function sayHello(){
//     console.log("hello! my name is C");
// }

// 5. Function part Two
// function안의 데이터를 밖에서 가져오는 방법 
// sayHello(nameOfPerson, age) - argument를 받아 오는 방법 
// function sayHello(nameOfPerson, age){
//     console.log("Hello my name is" + nameOfPerson + " and I am " + age);
// }
// argument를 보내는 방법 
// sayHello("lynn", 10);
// sayHello("nico", 22);
// sayHello("dal", 32);

// 초 간단 계산기 만들기 
// firstNumber와 같이 지정 문구들은 function안에서만 존재한다,, 고로 fuction 밖에서 사용 불가능 
// function plus(firstNumber, secondeNumber) {
//     console.log(firstNumber + secondeNumber);
// }
// function divide(a ,b) {
//     console.log(a / b);
// }
// plus(8, 60);
// divide(10 ,2);

// fuctiond이 object안에 있을 경우 값을 받아서 출력하는 방법
// const player = {
//     name: "nico",
//     sayHello: function(otherPersonName) {
//         console.log("hello " + otherPersonName + " nice to meet you");
//     },
// };

// player.sayHello("lynn");
// player.sayHello("Hna");

// 2021년 12월 08일 수요일 

// 1. Return
// 함수는 어떤일을 수행하고 그 결과를 알려주는 것

// const age = 96;

// function calculateKrAge(ageOforeigner){
//    return ageOforeigner + 2;
// }
// function 안에서 return을 실행하여 주면 
// 누군가 function을 실행하려 할때 그 값을 대신하여 출력해준다
// calculateKrAge(age);이 부분을 return을 한 ageOforeigner + 2; 이거의 값으로 대체하여 준다는 말
// return하는 순간 function의 기능은 종료 하기 때문에 return 하단에 어떤 함수를 적든 소용이 없다


// const krAge = calculateKrAge(age);

// console.log(krAge);

// age=96 -> calculateKrAge(age) ()의 age값인 96으로 들어가고 
// 96이 대입된 calculateKrAge(age)이 함수는  calculateKrAge(ageOforeigner) 이 함수 안의 ()와 (age)의 값이 같게 됨
// 그래서 return ageOforeigner + 2; 이 부분이 return 96 + 2가 되는 것이고 
// return을 함으로써 function을 호출하는 const krAge = 98이 되고
// console.log(krAge)의 값은 98로 출력이 된다.

// function의 반환 값과 같은 variable을 console.log하고 있는 것이다.

// 2. Conditionals

// const age = parseInt( prompt("How old are you?") );

// console.log(age);

// 2021년 12월 10일 금요일 ++ 2021년 12월 20일 월요일  ++ 2021년 12월 24일 금

// 1. Conditionals
const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));

if(isNaN(age) || age < 0){
    console.log("Please write a number");
}else if (age < 18) {
    console.log("You are too young. ");
}else if (age >= 18 && age <= 50) {
    console.log("you can drink");
}else if (age > 50 && age <= 80) {
    console.log("You should exercise");
}else if (age > 80){
    console.log("You can whatever you want")
}else {
    console.log("You can't drink");
}







