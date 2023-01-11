// 데이터 타입
// 자바 스크립(=자바 문법을 베낌) --> 자바 문법으 자료형과 유사

//1. 기본 타입(primitive)
// number(숫자), string(문자열), boolean(불리언), null, undefined(변수 선언만), symbol
let num1 = 10;
let num2 = 50;
let num3 = new Number(100);// 생성자 방식
console.log(num1+num2); //두 수의 합 출력
let longstring ="가나다라마바사아자차카타파하"; // 문자열
console.log(longstring[10]);
let comma; // 변수 선언만, 그러면 JS엔진이 자동으로 undifined로 처리
let isOpen = false; //Boolean
longstring = null;
console.log(longstring);

// 2. 객체 타입(object)
// Arrary(배열), Object(객체), Date(시간 날짜 객체), Math(수학), Function(함수) 등등...
// 기본 타입을 제외한 모든 것
let fruits = ["사과", "바나나", "딸기", "오렌지", "파인애플"];
for(let fruit of fruits) {
    console.log("내가 좋아하는 과일은 " +fruit+ "이다");
}
// for(let i = 0; i<fruits.length; i++) {
//     console.log(fruits[i]); // System.out.println(fruits[i])와 같음
//     //document.write(fruits[i])-HTML에서 출력 (DOM 조작)
// }
// while(condition) {
//      some code;
//      ++;
// }

//객체 vs 배열 []

const users = {
    blood:"A",
    city: "Gwangju",
    gender: "female",
    info: function(){
            console.log(`혈액형은 ${this.blood}이고 태어난 곳은 ${this.city}이고 성별은 ${this.gender}입니다`);    //템플릿 문법(Template)
    
            console.log(user.blood);
            console.log(user.city);
            console.log(user.gender);
            users.info();
    }}

            const myDate = new Date();
            console.log(myDate);    //시간 날짜 
            console.log("현재 년도 :"+myDate.getFullYear());
            console.log("현재 월 :"+myDate.getMonth() +1);
            console.log("현재 일 :"+myDate.getDay());
            console.log(`${myDate.getHours()} : ${myDate.getMinutes()} :${myDate.getSeconds()}`);
    
            console.log(Math.max(10, 3, 2));

   
