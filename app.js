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



// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ2.13ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

