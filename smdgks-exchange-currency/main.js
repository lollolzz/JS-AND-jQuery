// 1. 박스 2개 만들기 
// 2. 드랍다운 리스트 만들기 
// 2. 환율정보 들고 오기 
// 3. 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
// 4. 금액을 입력하면 환전이 된다.
// 5. 드랍다운 리스트에서 아이템을 선택하면 다시 그  단위 기준으로 환전이 됨
// 6. 숫자를 한국어로 읽는 법
// 7. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다.


// 환율 정보 들고 오기 
let currencyRatio = { // let은 변수에 재할당이 가능하다
    // 어떤 값에 대하여 여러가지 정보가 필요 할때 객체가 필요하다 

    USD:{
        KRW:1187.02,
        USD:1,
        VND:22850.00,
        unit: "달러"
    },
    KRW:{
        KRW:1,
        USD:0.00084,
        VND:19.25,
        unit: "원"
        
    },
    VND:{
        KRW:0.052,
        USD:0.000044,
        VND:1,
        unit: "동"
    },

};
// 1.console.log(currencyRatio.VND.unit);
// 2.console.log(currencyRatio["VND"]["unit"]);


// 드랍다운 리스트에서 아이템 선택하면 아이템이 바뀜
//document.querySelector(All) -> html 요소를 javascript로 가져오는 역활을 한다.
//list여서 forEach를 사용한다.
let fromCurrency = 'USD'
let toCurrency = 'USD'

document
    .querySelectorAll("#from-currency-list a")
    .forEach(menu=>menu.addEventListener("click", function () {
        // 1. 버튼을 가져온다.
        // document.getElementById("from-button")

        // 2. 버튼의 값을 바꾼다.
        // 내가 선택한 textContent값을 가져와서 버튼의 텍스트로 바꾸어 준다.
        document.getElementById("from-button").textContent = this.textContent; // 여기서 this는 내가 선택한 것을 의미한다.

        // 3. 선택된 currency값을 변수에 저장해준다.
        fromCurrency = this.textContent
        console.log("fromCurrency는",fromCurrency);
        })
    );

document
    .querySelectorAll("#to-currency-list a")
    .forEach(menu=>menu.addEventListener("click", function(){
        // 1. 버튼을 가져온다.
        // 2. 버튼의 값을 바꾼다.
        document.getElementById("to-button").textContent = this.textContent
        // 3. 선택된 currency값을 변수에 저장해준다.
        toCurrency = this.textContent;
    })
);
