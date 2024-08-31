document.write("해당 학습 내용은 유튜브 [드림코딩] 채널의 강의를 시청하면서 학습했음", "<br/>");
document.write("<a href='https://youtu.be/e_lU39U-5bQ' target='_blank'>해당 강의영상</a>","<br/>");

/* Function
- fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value

1. Function declaration
function name(param1, param2){body... return;}
one function === one thing: 하나의 함수는 한 가지 일만 하도록 한다.
naming: doSomething, command, verb: 함수는 무언가를 동작하는 것이기 때문에 동사형태로 이름 지정
e.g. createCardAndPoint → createCard, createPoint
function is object in JS: object로 간주되어지기 때문에 
1. 변수에 할당 가능.
2. 파라미터로 전달이 됨.
3. 함수를 return 함.
*/
'use strict';

function printHello(){
    console.log("Hello");
}
printHello();

function log(message){
    document.write(message);
}
log("🎈 안녕? 난 컴미야 🎈");
log("13579");

/* 2. Parameters
premitive parameters: passed by value - 메모리에 value가 그대로 저장되어있기 때문에 value가 그대로 전달
object parameters: passed by reference - 메모리에 reference가 저장되어있음 -  reference가 전달
*/
function changeName(obj){
    obj.name = "supercommi";
}

const commi = { name : "commi" }; /*commi라는 object를 만들어서 할당해주면
메모리에는 이  object가 만들어진 refernce가 이 메모리에 들어감. 이 reference
는 메모리 어딘가에서 가리키고 있음*/
changeName(commi); //전달된 commi가 가리키고 있는 곳의 name을 suppercommi로 변경하게 됨
console.log(commi);

/*object는 reference로 전달되기 때문에 함수 안에서 object의 값을 변경하게 되면
그 변경된 사항이 그대로 메모리에 저장*/

/* 3. Default parameters (added in ES6) */
function showMessage(message, from = '누군가🐬'){

    document.write("<br/>",`${message} by ${from}`);
}
showMessage("🌊");

/* 4. Rest parameters (added in ES6) */
function printAll(...args){ //쩜쩜쩜: Rest Parameter라고 불리며 배열 형태로 전달
    for(let i = 0; i < args.length; i++){
        document.write(args[i]);
    }

    for(const arg of args){
        document.write(arg);
    }

    args.forEach((arg) => document.write(arg));

}
printAll("<br/>"," 요정컴미 ", " 슈퍼왕자 ", " 강돌이 ");
/* printAll에서 .을 누르면 함수가 object로 전환되기 때문에
속성값들을 확인 가능 */

/* 5. Local scope */ // 자바스크립트의 scope: 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

let globalMessage = "🌎 global"; // global variable
function printMessage(){
    let message = "⛺ hello";  // local variable
 
    document.write("<br/>",message);
    document.write("<br/>",globalMessage);
    function printAnother(){
        document.write(message); // 자식은 부모에게 정의되 message를 확인할 수 있음
        let childMessage = "🤸‍♂️ hello";
        // 자식 안에 정의된 childMessage는 부모가 볼 수 없다.
    }
    //document.write(childMessage); 에러발생

    /*return undefined;*/ /* 리턴타입이 없는 함수들은 return undefined와 같으며 이것을 생략 가능  */
}
printMessage();
/*document.write(message); : 지역변수를 밖에서 출력하게 되면 에러가 발생*/
document.write("<br/>",sum(3, 9)); /* 자바스크립트 엔진이 선언된 함수를 제일 위로 올려주기 때문에  */
/* 6. Return a value */
function sum(a, b){
    return a + b;
}
const result = sum(1, 2); 
document.write(`<br/> sum: ${sum(1, 4)}`);

/* 7. Early return, early exit */
// bad
function upgradeUser(user){
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10) { // 조건이 맞지 않을 때에는 빨리 리턴
        return;
    }
    /* long upgrade logic... */ // 조건이 맞을 때에만 필요한 로직 실행
}

/* First-class function 
- functions are treated like any other variable
- can be assigned as a value to variable
- can be passed as an argument to other functions.
- can be returned by another function
*/

/* 1. Function expression
- a function declaration can be called earlier than it is defined. (hoisted)
- a function expression is created when the execution reaches it.
*/

const print = function(){ /* anonymous function: 이름이 없는 function: 이름 없이 필요한 부분만 작성해서 변수에 할당 가능, 
    원하면 function이름 작성가능 - named function이라고 함 */
    document.write('<br/>','print');
};
print(); /* print라는 변수에 함수를 호출하듯이 호출하면 print가 출력 */
const printAgain = print; /* 다시 다른 변수에 또 할당하게 되면 printAgain은 위의 anonymous function을 가리키고 있기 때문에*/
printAgain();/* 다시 함수를 호출하는 것처럼 부르면 print가 출력*/
const sumAgain = sum; /* 위에 만들었던 sum이라는 function을 sumAgain이라는 변수에 할당하게 되면 */
document.write('<br/>',sumAgain(1,3)); /* 동일하게 호출 가능 */

/* function declaration과 function expression의 차이점
1. function expression은 할당된 다음부터 호출 가능한 반면에(선언하기 전에 호출하면 에러가 남),
2. function delaration은 hoist가 된다.
*/

/* 2. Callback function using function expression: 상황에 맞는 함수를 전달 */
function randomQuiz (answer, printYes, printNo) {
    if(answer === "안녕? 난 컴미야 🛍🛍"){
        printYes();
    } else {
        printNo();
    }
}

/* anonymous function */
const printYes = function (){
    console.log("정답!");
};

/* named function: 함수 이름을 쓰는 경우 - 디버깅을 할 때,디버깅의 stack trace에 함수 이름이 나오게 하기 위해 사용 
또는 함수 안에서 자신 스스로 또다른 함수를 호출할 때 - recursions : 피보나치수를 계산할 때, 평균값을 계산할 때
- better debugging in debugger's stack traces
- recursions */
const printNo = function print(){ 
    console.log("아니야!");
};

randomQuiz("안녕? 난 강돌이야 🛍🛍", printYes, printNo);
randomQuiz("안녕? 난 컴미야 🛍🛍", printYes, printNo);

/* 
    Arrow function 
    always anonymous
*/
/*
const simplePrint = function(){
    console.log("안녕?🍇");
};
*/
const simplePrint = () => console.log("안녕?🍇");
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => { 
    /* 함수안에서 조금 더 다양한 일을 해야해서 블록이 필요하면
    블럭을 넣어서 처리할 수 있음 */
    return a * b; /* 블럭을 쓰게 되면 return으로 값을 리턴 */
};

/* IIFE: Imidiately Invoked Function Expression*/
(function hello (){
    console.log('IIFE 무슨 뜻??');
})();
/* 선언함과 동시에 호출을 하려면 함수의 선언을 괄호로 묶은 다음에 
함수를 호출하듯이 해주면 바로 함수 호출됨 */

/*퀴즈 직접 해보기 🌈 
function calculate(command, a, b)
command: add, subtract, divide, multiply, reminder
*/