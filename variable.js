document.write("해당 학습 내용은 유튜브 [드림코딩] 채널의 강의를 시청하면서 학습했음", "<br/>");
document.write("<a href='https://www.youtube.com/watch?v=OCCpGh4ujb8&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=3' target='_blank'>해당 강의영상</a>","<br/>");


//유연한 언어 = 위험할 수 있음
'use strict'; // ECMA scirpt5에 포함 예)변수 선언을 하지 않을 경우 에러가 뜸 , 조금 더 속도가 빨라짐

var a = 5;              

//2. variable, rw(read/write): 읽고 쓰는 것이 가능
let globalName = 'global name';

{
    let name = 'megan';
    console.log(name);
    name = 'hello';
    console.log(name);
}

//{}블럭 안에 코드들을 넣으면 블럭 밖에서는 코드들을 볼 수 없게 됨, console.log(name)를 블록 밖에서 작성하면 나오지 않음
console.log(name);
console.log(globalName);

//
//var: 값을 선언하기도 전에 사용(var hoisting: 제일 위로 선언을 끌어올려주는 것)
//var는 블록{}을 무시. 어디에서나 아무곳에서나 보임. 선언하지도 않은 값들이 나올 수 있으므로 let을 사용

{
    commi = "안녕? 난 컴미야";
    var commi;
}

console.log(commi);

//3. constant: 가리키는 포인터가 잠겨있음(값 변경 불가능), r(read only): 읽기만 가능
/*
- 보안
- 
*/
const daysInWeek = 7;
const maxNumber = 5;

//Immutable data types: primitive types, frozen objects (i.e. object.freeze())
/*
Mutable data types: all objects by default are mutable in JS: 
자바스크립트에서 기본적으로 모든 오브젝트는 변경 가능,
어레이는 mutable 데이터 타입
*/


//4. virable types
//primitive, single item: number, string, boolean, null, undefinedn

const count = 17; //integer
const size = 17.3;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; //숫자가 아닌 걸 나누면 NaN이 나옴

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

const bigInt = 34125325235235215323523535232523535352352235235n;
console.log(`값: ${bigInt}, 타입: ${typeof bigInt}`);

Number.MAX_SAFE_INTEGER;

//string
const midal  = "박미달";
const sangsoon = "고상순";
const greeting = '안녕하세요. '+sangsoon+' 입니다.';
console.log(`값: ${greeting}, 타입: ${typeof greeting}`);
const helloMidal = `안녕하세요. 나는 ${midal} 이에요.`;
console.log(`값: ${helloMidal}, type: ${typeof helloMidal}`);

//template literals(string) `` < - backtick을 사용하면 간편하게 string을 만들 수 있음


//boolean
//false로 간주되어짐: 0, null, undefined, NaN, '';
//true로 간주되어짐: any other value
const canRead = true;
const test = 3 < 1; //false로 할당이 됨;
console.log(`값:${canRead}, 타입:${typeof canRead}`);
console.log(`값:${test}, 타입:${typeof test}`);

//null: 텅텅 비어있는
let empty = null;
console.log(`값: ${empty}, 데이터타입은??: ${empty}`);

//undefined: 선언은 되었으나, 아무 값도 지정되어 있지 않음! 텅텅 비었는지 값이 있는지 정해지지 않음!
let x = undefined;
console.log(`값: ${x}, 데이터타입 뭐?: ${typeof x}`);

//symbol 정말 고유한 식별자가 필요할 때
const symbol1  = Symbol('컴미');
const symbol2 = Symbol('컴미');

console.log(symbol1 === symbol2); //fale

//같은 스트링으로 심볼을 만들었으나, 두 심볼은 다른 것임

/*동일한 심볼을 만들고 싶다면 Symbol.for를 이용*/
const gSymbol1 = Symbol.for('버숙이');
const gSymbol2 = Symbol.for('버숙이');
console.log(gSymbol1 === gSymbol2);

console.log(`심볼의 값은?: ${symbol1.description}, 타입은?:${typeof symbol1}`); //.description은 심볼을 스트링으로 바꿔 출력해줌
document.write(`심볼의 값은?: ${symbol1.description}, 타입은?: ${typeof symbol1}`);

//object, real-life-object, data structure
const profile = { name: '요정컴미',  age: 12}; //오브젝트 안에는 name과 age라는 변수들이 존재
//profile.name 혹은 profile.age로 하면 각각의 포인트가 가리키는 메모리에 다른 값으로 할당이 가능
profile.name = `슈퍼컴나라 공주 컴미`;

console.log(profile.name);

//5. Dynamic typing: dynamically typed language
let greetingText = '안녕하세요?'; 

console.log(greetingText.charAt(0)); //charAt()는 문자열 순서를 불러옴 

console.log(`값은?: ${greetingText}, 타입은?: ${typeof greetingText}`); //테이터 타입: 스트링 이라고 나옴
greetingText = 33;
console.log(`값은??: ${greetingText}, 타입은??: ${typeof greetingText}`); //데이터 타입이 넘버로 변경됨
greetingText = '7' + 5;
console.log(`값은???: ${greetingText}, 타입은???: ${typeof greetingText}`); //스트링과 넘버를 더해버리니 넘버를 스트링으로 변환해서 스트링과 스트링을 합쳐주는 결과가 나옴
greetingText = '8' / '2';
console.log(`값은????: ${greetingText}, 타입은????: ${typeof greetingText}`); //스트링으로 된 숫자를 나누니 타입이 넘버로 바뀜

console.log(greetingText.charAt(0)); //넘버타입이므로 에러가 남