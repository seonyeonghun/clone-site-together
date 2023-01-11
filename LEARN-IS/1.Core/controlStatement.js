// 제어문: 조건문, 반복문, 선택문(=분기문)

//if, if else, else
let num1 = 10;
let num2 = 20; 
if(num1 > num2) {
    console.log(`${num1}은 ${num2}보다 크다`);
}

//삼항 조건 연산자 : ?
num1 > num2 ? console.log(`${num1}은 ${num2}보다 크다`) :  console.log(`${num1}은 ${num2}보다 작다`);

let choice = 1; // 1~3중에 하나를  선택한다

switch(choice) {
    case 1:"1을 선택하였습니다";
    break;
    case 1:"2를 선택하였습니다";
    break;
    case 1:"3을 선택하였습니다";
    break;
}

//boolean : ture, false


//switch~case

//for, for~of(=배열), for ~in(객체)
const users = {
    // (멤버) 변수

    blood:"A",
    city: "Gwangju",
    gender: "female",
    info: function(){
console.log(`혈액형은 ${this.blood}이고 태어난 곳은 ${this.city}이고 성별은 ${this.gender}입니다`);    //템플릿 문법(Template)
    },
};

for(let key in users) {
    console.log
}
    
