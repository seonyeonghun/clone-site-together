//웹 브라우저에 내장된 자바스크립트 해석 엔진이 해석한HTML구조
//Document Object Model(ing) : 문서 객체 모델

/*1. dom 선택 방법
    1.1 오랫동안 사용한 방법
    decodeURIComponent.getElementsById();
    decodeURIComponent.getElementsByClassName();
    ...
    1.2 최근 사용하는 방법 : CSS 선택자처럼!!
    document.querySelector();       //일치하는 1개
    doucument.qureySelctorAll();    //모두(collection)
*/

//const h1 = document.getElementsById("title");
// const h1 = document.querySelector("#title");
// console.log(h1.textContent);
// h1.innerHTML = '<a href="#">DOM 조작완료</a>';
// h1.classList.add("gold_bg");

const h1 = document.querySelector("#title");
const showbt = document.querySelector("#show");
const hiddenbt = document.querySelector("#hidden");

//DOM 요소에 이벤트 추가
// 이번트 : 마우스나 키보드의 조작이 발생하면, event 라고 함
showbt.addEventListener("click", function(){
    h1.style.display="block";
});

hiddenbt.addEventListener("click", function(){
    h1.style.display = "none";
});