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

/* 5. Local scope */ //밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = "🌎 global"; // global variable
function printMessage(){
    let message = "⛺ hello";  // local variable
    document.write("<br/>",message);
    document.write(globalMessage);
}
printMessage();