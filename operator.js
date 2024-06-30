document.write("해당 학습 내용은 유튜브 [드림코딩] 채널의 강의를 시청하면서 학습했음", "<br/>");
document.write("<a href='https://youtu.be/YBjufjBaxHo' target='_blank'>해당 강의영상</a>","<br/>");

'use strict';

//1. String concatenation
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 2); //reminder
console.log(2 ** 3); //exponentiation

//3. Incrememnt and decrement operators
let counter = 2;
const preIncrement = ++counter; //숫자 3이 할당됨
/*
counter = counter + 1;
preIncrement = counter;
*/
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++; /*먼저 변수의 값을 postIncrement에 할당한 다음에, 그 뒤에 counter의 값을 1 증가시킴
postIncrement = counter;
counter = counter + 1;
*/
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

/*
앞에 있으면 바로 업데이트하고 할당
뒤에 있으면 할당 하고 업데이트
*/


//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6); //less than or equal
console.log(10 > 6); //greater than
console.log(10 >= 6); //greater than or equal

//6. Logical operators: || (or), &&(and), !(not)
const value1 = false;
const value2 = 4 < 2;

// ||(or), find the first truthy value
console.log(`or: ${value1 || value2 || check()}`); 
//computation이 무거운 연산을 많이 하는 함수를 호출하거나 expression을 제일 앞에다두는 것보다 심플한 value들을 제일 앞에 두는 것이 효율적인 코드 작성법
/*3개중에 하나라도 true가 있으면 true로 계산이 됨(그 뒤는 실행 안됨)
value1은 false로 이미 할당,
vlaue2는 2가 4보다 클 수 없으므로 false
check() 함수는 true를 리턴 즉, check()는 true
*/

// && (and), find the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

/* 3개가 모두 true여야만 true를 리턴
3개 중에 하나라도 false가 있으면 false가 됨(그 뒤는 실행 안됨) */

//often used to compress long if-statement
//nullableObject && nullableObject.something
/*
if(nullableObject != null){
    nullableObject.somehing;
};
 &&는 null 체크할 때에도 많이 쓰임*/

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('✨');
    };
    return true;
};

/* 포인트!: or연산자는 처음으로 true가 나오면 멈춤:
하나라도 true면 true이기 때문에*/

// !(not)
console.log(!value1); //value1을 true 혹은 false로 바꿔줌

// 7. Eqauality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion: 타입을 변경해서 검사
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion: 값이 같아도 타입이 다르면 다르다고 판단 
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference:

const ellie1 = { name: 'ellie' };
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1;
/*
object는 메모리에 저장될 때, reference형태로 저장
ellie1 과 ellie2는 같은 데이터가 들어있는 object이지만
실제로 메모리에는 ellie1과 ellie2에는 각각 다른 reference가 들어있음
ellie3과 ellie1은 똑같은 reference(ellie3에는 ellie1의 레퍼런스 할당됨)
*/
console.log(ellie1 == ellie2); //각각 reference가 다르므로 false
console.log(ellie1 === ellie2); // reference가 다르므로 false
console.log(ellie1 === ellie3); // ellie1의 reference를 ellie3으로 할당했기 때문에 같은 reference 이므로 true


// equality - puzzler
console.log("0 == false: ",0 == false); 
/*0, null, undefined, empty스트링은 false로 간주될 수 있으므로 true*/

console.log("0 === false: ", 0 === false);
/*0은 boolean타입이 아니기 때문에 type strict eqaulity를 사용하게 되면 false가 나옴*/

console.log("'' == false: ", '' == false);
/*0, null, undefined, empty스트링은 false로 간주될 수 있으므로 true*/

console.log("'' === false: ",'' === false);
/*empty스트링의 타입은 boolean타입이 아니기 때문에 false가 나옴*/

console.log("null == undefined: ",null == undefined);
/*null, undefined는 같은 것으로 간주되므로 true*/

console.log("null === undefined: ",null === undefined);
/*null과 undefined는 다른타입이므로 false*/

console.log("null == false: ", null == false);
/*0, null, undefinedm empty스트링은 false로 간주될 수 있다고 했는데
여기서는 null == false가 왜 false로 출력되는 지 궁금함*/

//8. contitional operators: if
//if, else if, else
const name = 'midal';
if(name === 'midal'){ //if statement가 true면 안에 있는 블록 실행
    document.write("안녕하세요. 박미달이에요.");
} else if (name === 'euichan') { //
    document.write("나는 미달이 친구. 의찬이");
} else {
    document.write("누군지 모름");
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'midal' ? 'yes' : 'no'); //간단한 코드일 때만 사용하는 것이 가독성 면에서 좋음

const superComWorld = '슈퍼컴나라';
switch(superComWorld){
    case '슈퍼컴나라':
    console.log('Go away!');
    break;

    case '시리우스별':
    case '달나라':
    console.log('love you!');    
    break;
    //똑같은 메세지를 출력할 경우 case를 연달아 붙여 써도 됨

    default:
    console.log('same all!');
    break;
};

//11. Loops
/*while loop, while the condition is truthy, 
body code is executed: statement가 false가 나오기 전까지 반복*/
let i = 3;
while(i > 0){
    console.log(`while: ${i}`);
    i--;
};
/*
3이 0보다 큼: 3출력 
i--로 감소시키고 
2이 0보다 큼: 2출력  
ㅑ--로 감소시키고
1이 0보다 큼: 1출력
0이 0보다 크지 않음: 멈춤
*/

//do while loop, body code is executed first,
//then check the condition 
/*먼저 블럭{}을 실행한 다음, 조건이 맞는지 안맞는지 검사*/
do {
    console.log(`do while: ${i}`); 
    i--;
} while (i > 0);

//i가 0임에도 불구하고 블럭을 먼저 실행해서 0이 먼저 출력되고 나서 i가 0인지 아닌지 검사해서 이 때 멈춤
/*블럭{}을 먼저 실행하고 싶다면 do while을 사용, 조건문이 맞을 때에만 블럭을 실행하고 싶으면 while을 사용*/

//for loop, for(begin; condition; step)
//condition이 만맞을 때까지 condition과 step이 계속 실행됨
for(i = 3; i > 0; i--){
    console.log(`for: ${i}`);
};

for(let i = 3; i > 0; i = i - 2){
    //inline variable declaration: 지역변수 선언
    console.log(`inline variable for: ${i}`);
};

//nested loops
/*
for (let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i는?: ${i}, j는?: ${j}`);
    };
};
*/
//break: loop를 완전히 끝냄, continue: 지금것만 것너뛰고 다음으로 넘어감

for(let i = 1; i < 11 ; i++){
    if(i % 2 === 0){
        console.log(`1에서 10까지 짝수만 출력: ${i}`);
    } 
};

for(let i = 1; i < 11 ; i++){
    if(i % 2 !== 0){
        continue;
    } 
    console.log(`1에서 10까지 짝수만 출력 continue사용하면서: ${i}`);
};

for(let i = 0; i < 11; i++){
    if(i > 8){ //i가 8보다 커지게 되면 멈춤
        break;
    };
    console.log(`1에서 8까지만 출력 break 사용하면서: ${i}`);
};