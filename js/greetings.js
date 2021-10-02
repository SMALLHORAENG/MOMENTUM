// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.01ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// alert("hi")
/* 2.1
    프로그래밍에 있어서 가장 기본적인 두 가지 데이터 타입(모튼 프로그래밍)
        1. 숫자 = integer (full number - 정수 )
        (1 = integer / 1.5 = float )

        2. 텍스트(text) = 정식명칭 string / string는 ""안에 넣어줘야 이해함
        ("hello"+"my name is gyuseong" = "hellomy name is gyuseong" 라고 나올 것)
        -string는 처음부터 끝까지 모두 글자로 이뤄져있다는 말이다-
*/




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.02ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// console.log("test");

// const a=5;
// const b=2;
// const myName ="gyuseong"
// const veryLongVariableName = 0;

// console.log(a*b);
// console.log(a/b);
// console.log(a+b);

// console.log("hello " + myName);
/* 2.2
    콘솔에게 메시지를 보내기
        console.log(string or number값이 들어감)
        괄호안의 값은 콘솔에 출력 됨
        -작은 따옴표로 시작하면 작은 따옴표로 닫으면 사용가능-

    variable(변수)
        operation(연산)을 console에 해준다
        console.log(5*2);
        console.log(5/2);
        해주면 console에 10 그리고 2.5가 출력된다
    -js는 파일을 위에서 아래로 읽는다-
        변수는 const(constant-상수-)를 이용하여 만들 수 있다 (바뀌지 않은 값)
        const 변수명 = 변수에 저장할 값;
    -값을 바꾸는데에 있어서 매우 중요한 부분-
    -변수명을 길게 써야할 때 camelCass(낙타 등 모양)을 이용해 원래 공백부분지점 대문자로 작성-
    ex) const veryLongVariableName = 0;

    *파이썬 방식은 snake_cass(뱀 모양) very_long_variable_name = 0 방식*
    파이썬은 js와 다르게 const와 ;를 해주지 않아도 되서 코드가 이뻐보임
*/




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.03ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const a = 5;
// let myName = "규성";

// myName = "임규성"; 
//값이 잘 변경됨
// a=6; 
//오류생김
/* 2.3
    js에서 변수를 만드는 방법은 const와 let가 있다
        const는 값이 바뀔 수 없다는 것
        let은 중간에 값을 바꿀 수 있음
        
        예를 들어서 let myName ="규성"
        에서 값을 바꾸려면 myName ="임규성" 이라고 하면 바뀜
        let을 앞에 써주는것은 선언 즉 처음 만들때만 사용하고 이후는 사용 안하고 값 변경
        const로 만들어주면 변경하려고 할 때에 오류뜸

    가끔 variable(변수는 바뀌지 않도록 해야 할 때가 있음   
        대부분 const로 만들고 필요할 때만 let 사용함
        const와 let는 새로 패치된 것(처음 생긴것은 아님)
        과거에는 var을 사용, 하지만 코드를 보호해줄 수 없음(값이 변경되서 생긴 오류가 안생김)
    *var은 안쓴다고 생각하자*
*/




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.04ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const loding = true;
// console.log(loding); //boolean

// let somthing;
// console.log(somthing);//undefined
/* 2.4
    다른 데이터 타입 (boolean)
        true 또는 false (1 참, 0 거짓)
        true와 false는 큰따옴표로 묶으면 string으로 인식
        null은 아무 값 없음을 의미
        null은 자연적으로 생기지 않음 개발자가 변수안에 값이 없다는 걸 확실히 하기 위해서 사용

    또 다른 데이터 타입(undefined)
        메모리 안에 존재는 하고 공간은 있지만 값이 들어가지 않은 상태
        let a; 라면 a라는 메모리 공간은 할당되고 값은 들어가지 않은 상태
*/




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.05ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const mon="mon";
// const tue="tue";
// const wed="wed";
// const thu="thu";
// const fri="fri";
// const sat="sat";
// const sun="sun";
// const daysOfWeek = [mon,tue,wed,thu,fri,sat,sun];
// const nonsense = [1,2,"hello", false, null, true, undefined, "규성" ];
// console.log(daysOfWeek,nonsense);


// const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];
//// Get Item from Array
// console.log(daysOfWeek);
////Add one more day to the array
//daysOfWeek.push("sun");
// console.log(daysOfWeek);
/* 2.5 배열(array) - 리스트와 같이 한 이름에 여러값을 가짐
    규칙
        시작과 끝은 대괄호, 값이 들어간 공간을 나눌 때 각 항목은 쉼표를 사용
        const daysOfWeek = [mon,tue,wed,thu,fri,sat,sun];
        이 방식을 사용시 위에 const mon="mon" 처럼 변수안에 텍스트값이 들어가게 해줘야 됨
        하지만
        const daysOfWeek = ["mon","tue","wed","thu","fri","sat"];
        해주면 텍스트값으로 인식해서 따로 변수안에 값 안넣어줘도 됨 (이 방식을 사용하자)

    값 불러오는 방법
        console.log(변수명[원하는 배열 순서번호]);
        console.log(daysOfWeek[4]);
        배열 순서번호는 0부터 시작해서 위 변수에서 fri라는 값을 얻고싶다면 5번째지만 0,1,2,3,4 해서
        4라고 해야지 그 값을 나오게 할 수 있다.

    값을 배열에 추가하는 방법
        배열명.push();
        daysOfWeek.push("sun"); sun이라는 텍스트값이 dayOfWeek 배열에 추가된다
*/




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.06ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const player = {
//     name:"규성",
//     points:100,
//     level:250,
// };
// console.log(player.name);
// console.log(player["name"]);

// player.name="임규성";
// console.log(player);
/* 2.6 Objects - 리스트와 다르게 한 이름에 여러값을 가지고 여러이름 사용
    규칙
        시작과 끝은 중괄호, 값을 넣어줄때 =가 아닌 :를 사용함 그리고 값 넣어준 뒤 쉼표(콤마)를 해줌
        값이 추가로 더 들어갈 수 있기 때문에
        const player = {
        name:"규성",
        points:100,
        level:250,
        };
        console.log(player.name);
        console.log(player["name"]);
        위와 같은 방식으로 사용하고 player.name과 player["name"]는 동일하게 사용 가능

    값 변경
        player.name="임규성"; 이러한 방식으로 값을 변경할 수 있다

        여기서의 const player의 값이 바뀌는 이유는
        const는 전체를 하나의 값으로서 업데이트 하려고 할 때 이므로 에러가 발생
        
        여기서는 const 값이 아닌 그 안에 objects를 바꾸려고 하는 것 이기에 에러가 생기지 않음
        player=변경값 하면 오류가 생김
        player.name=변경값 하면 오류가 안생김

    값 추가   
        player.lastname = "임규성";
        해주면 lastname 라는 property(객체 내부의 변수)가 objects(객체)안에 생기고 
        그 안에 임규성이라는 값이 들어감
        
        player.points = player.points + 10;
        console.log(player.points);
        해보면 기존 값 100에 + 10이 된 110이 출력됨을 볼 수 있다.
*/  




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.07~08ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// function sayHello(){
//     console.log("hello!");
// }
// sayHello();
//
// function sayHello(nameOfPerson,age){
//     console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
// }
//
// sayHello("규성",24);
// sayHello("임규성",24);
//
// function plus(firstNumber, secondNumber){
//     console.log(firstNumber + secondNumber);
// }
// function divide(a,b){
//     console.log(a/b);
// }
// firstNumber,secondNumber은 plus 안에만 있고
// divide안에는 a,b만 있다 함수 밖에서 사용 불가능
// console.log(a,b); 이런식으로 밖에서 사용시 오류가 뜬다
//
// plus(60,8);
// divide(100,4);

// const player = {
//     name: "규성",
//     sayHello: function(otherPersonName){
//         console.log("hello " + otherPersonName + " nice to meet you")
//     },
// };

// console.log(player.name);
// player.sayHello("임규성");
/* 2.7-2.8 Functions
    function
    규칙
        function 함수명() {} 중괄호 안에 들어가는 내용은 함수명이 호출될 때 실행됨
        function sayHello(){
        console.log("hello!");
        } 와 같이 함수를 만들 수 있다

    실행
        ()를 이용해서 출력해온것을 생각하자
        alert() , console.log() 등등
        sayHello(); 와 같이 출력

    argument(인수)
        함수를 실행하는 동안 어떤 정보를 함수에 보낼 수 있는 방법
        sayHello("hi"); 등으로 실행시 함수에 hi라는 값 또는 데이터를 보낼 수 있음

        받는 방법은 ()안에 넣어주는 것
        function sayHello(nameOfPerson){
            console.log(nameOfPerson);
        } 이 방법으로 값을 받을 수 있음 (sayHello("규성"); )라고 보냈을 시 "규성" 이라는 값이
        받아지고 console.log를 통해서 출력됨
        
    인수를 보내고 받고 출력하는 것
        받는것 (이름과 나이 값 2개를 받음)
        function sayHello(nameOfPerson,age){
            console.log("Hello my name is" + nameOfPerson + "and i'm" + age);
        }

        보내는 것
        sayHello("규성",24);
        sayHello("암규성",24);
        이름과 나이 (값 2개를 보냄)

        *function 밖에서 nameofPerson, age를 사용할 수 없음*
        위 코드에서 function 밖에
        console.log(nameOfPerson,age);를 한다면 사용 불가능하다

    계산기
        function plus(firstNumber, secondNumber){
        console.log(firstNumber + secondNumber);
        }
        function divide(a,b){
            console.log(a/b);
        }
        // firstNumber,secondNumber은 plus 안에만 있고
        // divide안에는 a,b만 있다 함수 밖에서 사용 불가능

        plus(60,8);
        divide(100,4);

    player object 생성    
        const player = {
        name: "규성",
        sayHello: function(otherPersonName){
        console.log("hello " + otherPersonName + " nice to meet you")
        },
        };
        console.log(player.name);
        player.sayHello("임규성");

        위와같이 작성시 출력값은
        규성 -> console.log(player.name);
        hello 임규성 nice to meet you -> player.sayHello("임규성");

        아래는 sayHello에 function(otherPersonName)에 "임규성" 이라는 값을 넣어줬기 때문에
        이러한 출력값이 나온 것
*/




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.08ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* 2.8 복습
        1. 데이터 타입
            number,string

        2. variable(변수)
            const, let

        3. boolean
            true, false (1,0)
            null, undefined

        4. array(배열)
            값 넣기
            const array name = [1,2,false,true,"text", variableName];
            출력
            arrayName[arrayNumber];
            console.log(arrayName[arrayNumber]);
            값 업데이트
            arrayName[arrayNumber] = "변경값"
            arrayName.push("추가할 값") 
            push는 (메모리칸이 생기고 값이 추가되는 것 다른 배열안의 값 변경되는건 아님)

        5. object
            property 를 object안에 만듦
            출력
            console.log(object.property);

            업데이트
            object.property = "수정 값";
            console.log(object.property="수정 값");
            
        6. function
            선언
            function 함수명(a,b){ - 함수안에 데이터를 받는 메모리 위치를 나타냄(자리표시자)
             실행할 내용;
             예를들어 console.log(a+b);
            }
            
            데이터 업데이트(추가,넣기) 및 출력
            함수명(a 넣을 값, b 넣을 값);
            * 순서대로 값이 들어감 *
            - 데이터를 넣어주고 함수안에 console.log(a+b) 라고 되있으면 a값과 b값이 더해져서 출력됨 -
*/
// const player = {
//     name:"규성",
//     age: function(nai){
//         console.log(nai);
//     },
//     ageTwo: function(){
//         console.log(24);
//     }
// };

// player.age(23);
// player.ageTwo();
// console.log(player.name);
// 데이터 방식 확인을 위한 연습

//숙제 calculator add min mul squ
// const calculator = {
//     add: function(a,b){
//         console.log(a+b);
//     },
//     min: function(a,b){
//         console.log(a-b);
//     },
//     mul: function(a,b){
//         console.log(a*b);
//     },
//     squ: function(a,b){
//         console.log(a**b);
//     },    
// }

// calculator.add(10,5);
// calculator.min(10,5);
// calculator.mul(10,5);
// calculator.squ(10,5);

//두번째 방법
// function caculator(a,b){
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a**b);
// }
// caculator(10,5);




// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.11ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const age = 24;
// function calculatorKrAge(ageOfforeigner){ //2. age의 값인 24가 ageOfforeigner에 업데이트 됨
//     return ageOfforeigner + 2; //3. ageOfforeigner의 값 24에 + 2 해서 26이 return 됨
// }

// const KrAge = calculatorKrAge(age); //1. age값을 function의 ageOfforeigner에 넣어줌
// console.log(KrAge); //4. return된 26의 값이 KrAge 안에 들어가서 출력됨 (최종)
//
// const calulator = {
//     add: function(a,b){
//     return a + b;
//     },
// }
// const plus = calulator.add(2,3);
// console.log(plus);
// 위 object 안에 function / 아래 function 만
// function calculator(a,b) {
//     return a + b;
// }
// const plus = calculator(2,3);
// console.log(plus);

// const Calculator = {
//     plus: function (a,b){
//         return a+b; 
//     },
//     minus: function (a,b){
//         return a-b; 
//     },
//     times: function (a,b){
//         return a*b; 
//     },
//     divide: function (a,b){
//         return a/b; 
//     },
//     power: function (a,b){
//         return a**b; 
//     },
// };
// const plusResult = Calculator.plus(2,3);
// const minusResult = Calculator.minus(plusResult,10);
// const timesResult = Calculator.times(10,minusResult);
// const divideResult = Calculator.divide(timesResult,plusResult);
// const powerResult = Calculator.power(divideResult,minusResult);
/* 2.11 Returns
    console.log가 아닌 다른 방법으로 코드안에서 결과를 얻기 (콘솔에 표시되는 것 아닌 다른방법)
        console.log는 console에 무언가를 log 하는 것(기록하여 보여줌)
    
    return
        *좌측은 코드 우측은 그 안에 들어간 값을 이해하기 위해 숫자로 적은 것*
        먼저 const KrAge = calculatorKrAge(age); 이 작동됨 (function은 호출해야 실행되므로)
        KrAge = calculatorKrAge(age); 에서 age안에 KrAge = calculatorKrAge(24); 로 됨
        calculatorKrAge(ageOfforeigner) 에서 calculatorKrAge(24){ 로 됨
        그러면 return은 +2 해서 ageOfforeigner + 2 = 26이므로 26이 return 됨
        그럼 console.log(KrAge); 안에 26이 들어가서 26이 출력됨

        이제 console 출력하려고 function 쓰지 않을 것
        작업을 처리하고 그 결과를 return 하기 위해 function을 사용 할 것
            *function 이 밖의 코드와 연결(소통) 되기 위함*

        return 하면 계산 담당하는 function은 return하는 값과 같아질 것
        (ageOfforeigner + 2 한 값이 KrAge = calulatorKrAge(age)에 들어가는 것)
        
        위 코드에 return "hello"; 라고 하면 출력값은 hello가 된다
        
    코드의 긴 연결
        const Calculator = {
        plus: function (a,b){
            return a+b; 
        },
        minus: function (a,b){
            return a-b; 
        },
        times: function (a,b){
            return a*b; 
        },
        divide: function (a,b){
            return a/b; 
        },
        power: function (a,b){
            return a**b; 
        },
    };
        const plusResult = Calculator.plus(2,3);
        const minusResult = Calculator.minus(plusResult,10);
        const timesResult = Calculator.times(10,minusResult);
        const divideResult = Calculator.divide(timesResult,plusResult);
        const powerResult = Calculator.power(divideResult,minusResult);

        위 코드처럼 입력시 console.log를 해주지 않았기에 console에 표시되지는 않음
        하지만 plusResult 입력시 결과값이 출력됨
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.12ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* 2.12 복습 
    js 코드에서는 실직적으로 a+b, a-b 같은 값을 바로 얻을 수 없음
    function 밖에서도 작업이 되게 하기위해서 return 해줌
    console.log 는 console에 보여주기 위해서 사용

    return 하면 function은 작동 멈추고 결과값을 return 하고 끝남
    return 위에 실행하려는 코드를 작성하면 나오지만 return 이후에 적으면 안나옴
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.13 - 2.14 - 2.15 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//2.13//
// const age = parseInt(prompt("How old are you?")); //입력값 숫자 아니면 NaN 출력
// console.log(age); 

// console.log(typeof age, typeof parseInt(age)); //타입 출력 (string, number 확인)


//2.14//
// const age = parseInt(prompt("how old are you?"));

// console.log(isNaN(age));

// if(isNaN(age)){
//     console.log("plsase write a number");
// } else {
//     console.log("Thank you for writing your age.");
// }


//2.15//
// const age = parseInt(prompt("how old are you?"));

// if(isNaN(age) || age < 0){
//     console.log("plsase write a real positive number");
// } else if(age < 18){
//     console.log("You are too young.");
// } else if(age >= 18 && age <= 50){
//     console.log("You can drink");
// } else if(age > 50 && age <= 80){
//     console.log("You shoud exercise");
// } else if(age > 80){
//     console.log("You can do whatever you want");
// }
/* 2.13 conditionals 조건문 ~ 2.14 part two ~ 2.15 part three
        복습 겸 팁
        prompt 안씀 이유는 message가 별로 안이쁘고, css 적용 불가하기 때문
        typeof variable 하면 그 값의 타입을 알 수 있다
        기본 타입은 string 이다

        type 변경
        string - > number
            parseInt()      
            const age = prompt("How old are you?");
            console.log(typeof age, typeof parseInt(age));
        위 코드와 같이 작성시 입력하는 값이 좌측은 string로 나오고 우측은 number로 나온다
        만일 number값이 아닌 값을 입력시 NaN (Not a Number) 라고 나온다 (이걸 조건으로 사용)


    if, else
        isNaN() 이용시 boolean (참 , 거짓) 으로 출력해줌
        괄호안의 인자값이 만일 숫자일경우 false가 출력됨 (NaN이 아니기 때문)

        if(condition(조건){
            조건이 true 일 경우 실행할 코드
        } else {
            조건이 false일 경우 실행할 코드
        }
        조건은 boolean 으로 판별이 가능해야함
        
        parseInt를 이용해서 값을 string에서 number로 만들어주는데
        여기에 텍스트가 들어가면 number로 만들 수 없고 NaN으로 표시해줌

    else if
        else if 는 if와 else 사이에 조건문을 넣을 수 있고
        else는 마지막에 넣어주는데 if와 else if의 조건이 모두 false가 되야 else가 작동된다

        AND 연산자 (두 값이 모두 '참' 이여야 조건에 충족해 '참'이 출력된다)
        조건 두개를 연결해주는 방법중 AND가 있는데 이는 &&를 두개의 조건 사이에 넣어주면 된다.
        OR 연산자 (두 값중 하나가 '참' 이여야 조건에 충족해 '참'이 출력된다)
        조건 두개를 연결해주는 방법중 OR이 있는데 이는 ||을 두개의 조건 사이에 넣어주면 된다.
    
        else는 선택사항 없어도 된다.

        and = true true = true 나머지는 false
        or = true true / true false / false true = true // false false = false
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.16ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
/* 2/16 복습 + 2가지 연산자
    연산자(operator)
        1. === (값, 데이터타입 모두 같은경우)
        * == 는 값이 같은지를 보고 ===는 js에서 사용하고 값 과 데이터타입도 같은지 본다*
        2.15의 코드에 else if(age === 100)을 입력한 경우 2.15의 코드와 같은 경우에는
        } else if(age > 80){
            console.log("You can do whatever you want");
        } 위에 else if (age === 100) 을 해줘야 순차적으로 조건 비교를 할 때에 위 조건에 충족하여
        아래의 코드가 실행되지 않는다

        한개의 = 는 value를 할당 age = 100; 일 경우 age에 100의 값을 넣어줌
        age === 100 은 age가 100이라면?을 확인하는 것

        조건문 안에 실행코드에 조건문을 추가로 넣을 수 있다.

        2. !== (값이 다른경우)
        age !== 100 / age의 값이 100이 아닌경우를 의미함 100이 아니면 true
        
    복잡한 조건 condition
        if((a && b) ||  (c && d) || (x || y)){
            a&&b 또는 c&&d 또는 x||y 의 값중 하나라도 true가 나오면
            결과는 true가 된다 왜? or 연산자이기 때문이다.
            이러한 방식으로 여러 연산자를 이용해 복잡한 조건을 만들 수 있다.
        }

    js
        클릭 이벤트 키보드 마우스 감지 등등 사용자와 상호작용 및 HTML 수정 되야함
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.0ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// document.title = "Hello Js!";
/* 3.0
    document.title / document.body 등
        웹 console에 document를 입력시 html 코드를 보여줌
        웹 console에 console.dir(document) 입력시 html 코드의 정보를 보여줌
        document.title 하면 title의 정보를 보여줌 
        (javascript 에서는 html을 자동으로 읽어와줌을 의미함)

        document.title = "title 원하는 변경 값" 하면 title이 바뀜
        하지만 console에서 해서는 새로고침 하면 다시 원상태로 돌아옴
        (여기선 js에서 html의 값을 변경할 수 있다는 걸 알게해줌)

        JS에서 HTML의 값을 변경하면 그 변경된 값이 적용된다 (console에서 사용한 것 처럼 써보면 알수있음)
        document.title = "변경 값"

        document.body 와 같이해도 body의 정보를 볼 수 있다
        document.location 해주면 현재 파일 위치를 알려준다
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.0ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const titles = document.getElementBysId("title");

// title.innerText ="Got you!";

// console.dir(titles);

// console.log(titles.id);
// console.log(titles.className);
/* 3.1
    document를 get
        document.getElementBysId("title") 라고 입력시 title이라는 id를 가진 코드를 불러와줌
        getElementBysId() 에서 괄호 안에는 string 값이 들어가야함 고로 "" 안에 내용을 적어줘야 함

    js에서 값 가져오기
        const titles = document.getElementBysId("title");
        해준 뒤 console.log 가 아닌 console.dir을 해주면 element를 더욱 자세하게 보여줌
        title이라는 id는 h1태그로 되있는데 h1태그 하나에 많은 정보를 가져올 수 있음을 볼 수 있다.
    
    js에서 값 변경하기
        titles.innerText = "변경 값"
        값을 가져왔기 때문에 변경이 가능한 것 (getElementsById를 통해 titles안에 값을 넣어줬기 때문)
        위 코드를 입력시 innerText가 변경된다.
        (HTML에서 변경한 것 아닌 js에서 변경한 것)

    js에서 값 확인하기(가져오기와 비슷함)
        console.log(titles.id);
        console.log(titles.className);
        위 코드는 title 이라는 id를 getElementsById로 가져왔기 때문에 사용 가능하고
        id title인 것의 id를 확인하는것과 className를 확인하는 것    
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.2ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const title = document.getElementsByTagName("h1");

// const title = document.querySelector(".hello h1");

// console.log(title);

/* 3.2
    class 속 Element를 가져오는 방법
        간단한 방법
        const title = document.getElementsByTagName("태그 명")
        태그명은 h1, img, a 등등
        
        가장 좋은 방법 (거의 모든 방식에서 사용하는 방식)
        .getElemnetsByTagName이 아닌 querySelector , querySelectorAll 을 사용하는 것
        querySelector는 element를 css 방식으로 검색가능
        const title = document.querySelector(".hello h1"); 하면 hello 클래스 속 h1를 가져오는 것
        .hello를 div로 바꿔도 같은 값 출력됨
        
        querySelector 조건에 맞으면 그 값의 첫번째만 출력해줌
        에를들어 hello 클래스를 가진 div 안에 h1을 찾는데 여러 div가 있으면
        첫번째 div의 h1태그 내용만 출력됨

        모두 출력하고 싶다면 querySelectorAll 해주면 됨

        querySelector 를 이용해서 #id값을 해주면 id도 가져올 수 있고
        div .hello:first:child h1  등을 이용할 수 있다.
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.3ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const title = document.querySelector("div.hello:first-child h1");

// title.style.color = "blue";

// function handleTitleClick(){
//     console.log("title was clicked");
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleTitleClick);
/* 3.3 Event
        console.log가 아니라 console.dir을 해주면 내부 정보를 보여준다

        on으로 시작하는 것은 event 이다
        object 안에 style이 있는데 그 안에 color을 바꿀 수 있다
        title.style.color = "변경할 색"; 이런식으로

    click event 
        event를 listen 해주는 방법
        title.addEventListener("click");
        addEventListener 는 무슨 event를 listen 하고 싶은지 알려주는 방법 "click" 해주면
        click 이벤트를 알고싶다는 것 의미함

        function handleTitleClick(){
        console.log("title was clicked");
        title.style.color = "blue";
        }
        title.addEventListener("click", handleTitleClick);

        function을 만들어줘서 실행시키게 해줘야 함
        addEvnetListener을 통해서 이벤트를 읽게 해주는데 여기서는 "click" 로
        클릭시 만들어둔 function이 실행되게 해줌

        이벤트의 종류는 다음에 더 알아볼 예정
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.4ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     console.log("title was clicked");
//     title.style.color = "blue";
// }

// function handleMouseEnter(){
//     title.innerText = "Mouse is here";
// }

// function handleMouseLeave(){
//     title.innerText = "Mouse is gone"
// }

// title.addEventListener("click", handleTitleClick);
// title.addEventListener("mouseenter", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);
/* 3.4 Event 2
    구글링 Event 찾기
        h1 html element mdn 검색 후 Web APIs 라는 문장이 포함된 페이지를 찾아야 함
        (web apis 는 js관점의 html heading element란 의미이기 때문)

        https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement
        안에서 event 를 찾아본다거나

        console.dir(title); 하면 title 안에서 on으로 시작하는 event를 볼수있다
        on으로 시작하는 event들을 사용할 때 에는 on을 제외하고 사용한다
        onclick -> click 

        mouseenter 은 마우스를 올리면 일어나는 이벤트이다.
        mouseleave 는 마우스를 내리면 일어나는 이벤트이다.
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.5ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const title = document.querySelectorAll("title");

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy(){
//     alert("copier");
// }
// function handleWindowOffline(){
//     alert("SOS no WIFI");
// }
// function handleWindowOnline(){
//     alert("ALL GOOD");
// }
// /* console.log(title); */

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
/* 3.5 More Events
    Window
        window는 기본적으로 사용 가능하다 (os의 윈도우가 아닌 창을 의미함)

        resize는 화면크기가 바뀔 때 적용되는걸 의미하고
        document.body.style.backgroundColor로 한 이유는 
        body 가 중요함 / 그냥 title을 해주면 body의 title와 document의 title인지 구분이 안됨
        body를 넣어주지 않으면 document의 title에 적용됨

        copy 복사 하는걸 인식
        offline 인터넷이 끊어진걸 인식
        online 인터넷이 켜진걸 인식
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.6ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const title = document.querySelector("div.hello:first-child h1");

// /* function handleTitleClick(){ //기본버전
//     if(title.style.color === "blue"){
//         title.style.color = "tomato";
//     } else {
//         title.style.color = "blue";
//     }
// } */

// function handleTitleClick(){ //수정버전
//     const currentColor = title.style.color;
//     let newColor;

//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     title.style.color = newColor;
// }

// title.addEventListener("click",handleTitleClick);
/* 3.6 
    CSS in JS one
        현재의 컬러(상태)를 받는 법 const 함수명 = 함수.style.color;

        수정 버전의 코드가 더 깔끔하고 이해하기 좋다
        let를 통해서 변할 수 있는 newColor이라는 공간을 만들어두고
        조건에 맞춰서 그 값을 넣어주고 마지막에 바꿔주는 것

        CSS는 css파일에서 수정해주는것이 더 좋다 (코드가 복잡해지기 때문)

    1. Element 찾기
    2. Event Listen 하기
    3. 그 Event에 반응하기 (보여주기 감추기 색바꾸기 등등)
*/



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ3.7 - 3.8ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// const title = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){ //className 방식
//     const clickedClass = "clicked"
//     if(title.className === clickedClass){
//         title.className = "";
//     }else {
//         title.className = clickedClass;
//     }
// }

// function handleTitleClick(){ //classList 방식
//     const clickedClass = "clicked"
//     if(title.classList.contains(clickedClass)){
//         title.classList.remove(clickedClass);
//     }else {
//         title.classList.add(clickedClass);
//     }
// }

// function handleTitleClick(){ //toggle 방식
//     title.classList.toggle("clicked");
// }

// title.addEventListener("click",handleTitleClick);
/* 3.7, 3.8
    CSS in JS two
        css는 css에서 설정해주는것이 좋다.
        위 코드는 className를 통해서 css코드를 가져오지 않고 클래스를 가져와서
        적용시킨 방법이다

    코드를 깔끔하게 하는 방법 1.
        값을 변수에 저장해준다 그러면 에러가 나도 변수명에서 나서 알기쉽다
        *모든 클래스이름을 변경해주면 기존의 클래스네임이 사라져서 문제가 생길 수 있다 해결법은 아래*
    -> className을 classList로 해주면 된다
    contains는 지정한 클래스 값이 엘리먼트의 class 속성에 존재하는지 확인한다.
    remove는 지정한 클래스 제거
    add는 지정한 클래스 추가 를 의미한다.

    toggle (위 classList 방식을 위한 function)
        classList에 class name이 이미 있는지 확인해서, 있으면 제거 없으면 추가해줌
        *하나만 사용하면 const를 통해서 클래스이름을 담은 변수를 만들 필요가 없다.*
*/




// const loginInput = document.querySelector(".login-form:first-child");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form :first-child");
//querySelector 할 때에 클래스랑 :first-child 또는 :nth-child(1)을 사용할 때 사이에 띄어쓰기를 넣어줘야 된다.
const greeting = document.querySelector("#greeting");

//클래스 및 변수 단일화
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";
//const link = document.querySelector("a");

function onLoginSubmit(event){ //로그인 submit 실행 함수
    // const username = loginInput.username;
    event.preventDefault();
    // console.log(loginInput.value);
    // console.dir(loginForm);
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // console.log(username);
    // greeting.innerText ="안녕! " + username; 아래 코드와 동일한 방법
    paintGreeting(username);
    //여기서는 username이라는 인자를 함수에 보냄
}
// loginButton.addEventListener("click", loginBtnClick);

// function linkClick(event){ //preventDefault 확인을 위한 링크예제
//     event.preventDefault();
//     console.log(event);
//     //alert("NO");
// }

//link.addEventListener("click", linkClick);
function paintGreeting(username){ //저장된 이름 값 받아서 인사
    greeting.innerText =`반가워요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASS);
} //여기서 username은 argument에서 가져올 것 (username은 매개변수로 username안에 호출할 때 주는 값을 받는 것)

const savedUsername = localStorage.getItem(USERNAME_KEY); //저장된 이름 받아서 변수에 저장

//svaedUsername 값에 따른 조건문
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onLoginSubmit);
}else {
    //show the greeting
    paintGreeting(savedUsername);
    //savedUsername 라는 인자를 전달

}



/*  4.0
        loginInput,Button을 통해서 값을 받아서 function에 Input의value(내용)이 출력되게 한다
        이벤트를 통해 click가 되면 만들어둔 function이 실행되게 한다 (value 값을 받는 것)

        다음 강의에서 버튼을 누를 때 조건을 넣는걸 해볼예정(닉네임이 아니면 안눌린다거나 등등)

    4.1
        string.length 해주면 문장 길이를 알려준다.

        input 태그에 required 해주면 필수가 되서 입력을 안하면 안된다.
        (비어있을시 텍스트를 입력해달라고 알림 뜸)
        *input는 form안에 있어야 유효성검사 작동 됨*
        form 안에 input이 더 없을때 엔터치거나 버튼 누르면 submit 된다
        이렇게 되면 브라우저가 새로고침 되서 내용이 사라짐
        
        정보를 저장하는 방법 (form이 submit 되는 걸 막아주는 것)

    4.2 - 4.3
        preventDefault 는 이벤트를 막아주는것
        function onLoginSubmit(tomato){ //함수 실행시 tomato에 이벤트 줌
        tomato.preventDefault(); //tomato 에 발생한 이벤트 중지 (기본동작 막아줌)
        console.log(tomato); //tomato 에 발생된 이벤트 정보 보여줌
        } 
        loginForm.addEventListener("submit",onLoginSubmit); //이벤트 실행 (함수에 정보를 담은채로 호출됨)

        tomato 부분은 addEventListener 부분의 함수에서 호출될 때 정보를 가져오기 위함
        즉 onLoginSubmit(tomato); 이렇게 실행을 시켜준다는 소리임
        tomato 안에 이벤트의 정보가 들어가는 것
        tomato.preventDefault();를 해주면 tomato 이벤트에 대한 동작을 멈추는 것
        onLoginSubmit(tomato); 이렇게 되있으니 이 함수의 동작을 멈춰주는것이 된다.
        (여기서 tomato 부분인 argument는 이벤트정보를 담기 때문에 이름은 자유롭게 해도 됨)

        tomato 부분을 event로 작성해주는것이 관행

        alert를 넣어주면 alert가 실행될 때 기본동작이 멈춘다(링크 클릭시 나오는 효과에 넣으면 페이지 이동 안되고 멈춤)
        단 확인버튼을 누르면 다시 실행되서 페이지가 이동된다.

        alert는 알림뜰때 기본동작 멈추지만 확인 누르면 다시 실행되지만 preventDefault를 사용하면 기본동작이 계속 멈추게 됨
        (링크에 넣어준다던지 해서 확인)
        *addEventListener 부분의 함수는 사용자가 실행하는것이 아니라 브라우저가 해줌, 그리고 이벤트에 대한 정보도 담아줌*

        queryselector - 구체적인 Element 선택 / getElementById 가 더 빠르고 잘 지원됨
        queryselector 은 선택한 것의 첫번째 Element를 선택한다

    4.4
        form 사라지고 유저에게 인사하기
        form에 hidden 클래스를 추가해준다(hidden은 css에서 display:none 해준 클래스임)    
        그리고 나오게 하고싶은 텍스트에 id를 주고 그걸 js에서 불러와준다
        js에서 string 값을 합쳐준 뒤 불러온 id에서 클래스를 지우면 된다 그러면 불러온 id값이 들어간 부분에
        hidden만 사라지게 되므로 화면에 나타나게 된다. (위 코드 참고)

        String 합치기
        greeting.innerText ="안녕! " + username; 
        greeting.innerText =`안녕 ${username}`;
        두 코드 모두 동일한 방법이지만 아래 코드가 더 새로운 기능
        *따옴표가 아닌 `백틱`으로 해줘야 한다 그리고 ${} 해서 중괄호 안에는 js의 string변수를 넣어주면 합쳐진다*

    4.5 - 4.6 - 4.7
        value 저장 
            localstorage
        localstorage는 api이고 추가적인 method 를 사용해준다
        setItem을 사용해주면 저장할 수 있다.
        localStorage.setItem("key","value")해주면 key 부분 값(부를 명칭?이랑 비슷한 느낌) ,value(부르면 나오는 값 느낌) - 저장
        localStorage.getItem("key")해주면 value가 출력됨 - 불러오기
        지울때는 removeItem("value") 해주면 됨

        localStorage.setItem("username", username); 해주면 username이라는 key(아이템 명) 과 username(유저이름을 갖는 변수) 저장됨
        form에 입력하고 클릭시 저장되서 새로고침 해도 storage에 남는데 form은 새로고침하면 다시 생김
        
        유저정보 체크 및 적용
            localStorage 부분에 유저 정보가 없으면 form이 나오고 있으면 안나오게 하는 방법
        getItem("Key이름") 해주면 안에 들어있는 객체명을 가져올 수 있음 / 없다면 null 값이 나옴
        이걸 이용해서 조건문을 만들어 줌
        getItem("Key이름") === null 이면 form 보여주고 else 아니면 greeting 보여주게 조건문 만들기

        *string을 여러번 반복해서 사용하는 경우 오류가 날 수 있으므로 변수로 고정시켜주는것이 좋음*
        *매개변수는 함수 만들 때 괄호안에 들어가고 매개변수를 통해서 값을 받는 것
        인자는 함수 호출할 때 넘겨주는 값을 뜻하고 그 값을 넘겨줘서 매개변수에 들어가서 함수안에 사용되서 실행됨*   
*/