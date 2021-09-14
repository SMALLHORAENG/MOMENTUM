// alert("hi")
/* 2.1
    프로그래밍에 있어서 가장 기본적인 두 가지 데이터 타입(모튼 프로그래밍)
        1. 숫자 = integer (full number - 정수 )
        (1 = integer / 1.5 = float )

        2. 텍스트(text) = 정식명칭 string / string는 ""안에 넣어줘야 이해함
        ("hello"+"my name is gyuseong" = "hellomy name is gyuseong" 라고 나올 것)
        -string는 처음부터 끝까지 모두 글자로 이뤄져있다는 말이다-
*/



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