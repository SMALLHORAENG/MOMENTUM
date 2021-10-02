const clock = document.querySelector("h2#clock");

function getClock(){ //시간 분 초 값 받아오는 함수
    const date = new Date();
    const hours =  String(date.getHours()).padStart(2,"0");
    const minutes =  String(date.getMinutes()).padStart(2,"0");
    const seconds =  String(date.getSeconds()).padStart(2,"0");

    clock.innerText = `현재시간 ${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); //1초마다 시간 분 초 함수 실행

/*  5.0 Intervals
        interval은 '매번' 일어나야 하는 무언가를 말함
        setInterval(함수명,반복ms단위); 해주면 입력한 ms단위로 함수가 반복됨

    5.1 Timeouts and Dates 
        setTimeout(함수명,ms단위로 딜레이시간); 해주면 입력한 ms단위뒤 함수가 시작됨
        Date() 는 오늘 날짜를 가져옴
        getDay() 오늘 날짜를 가져옴(일요일은 0), getHours 는 시간 getMinutes는 분 getSeconds는 초

    5.2 PadStart (string에 쓰는 함수)
        한자리 숫자의 분,초,시간이 되도 앞에 0이 붙도록 만드는 방법 (string가 2개의 문자를 갖게하는 것)
        padStart(문자열 길이,"문자열 길이보다 짧으면 ""안에 내용이 문자 앞에 들어감")\
        start는 앞 end는 뒤
        padStart는 string에 적용되는 것 이므로 number인 부분은 text로 변환해줘야 함
        
            number -> text / text -> number
            String으로 묶어주면 됨 string(숫자값)
            Number(string), parseInt(string) , Math.round(string) string는 문자열 변수명 or 문자열
            math의 round는 정수, floor은 실수이다

    5.3 복습
        Intervals 는 반복 / setTimeout는 정해진 시간 후 실행 / padStart 문자열 남은공간 문자로 채워줌
*/