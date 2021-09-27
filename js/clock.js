const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `현재시간 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);

/*  5.0 Intervals
        interval은 '매번' 일어나야 하는 무언가를 말함
        setInterval(함수명,반복ms단위); 해주면 입력한 ms단위로 함수가 반복됨

    5.1 Timeouts and Dates 
        setTimeout(함수명,ms단위로 딜레이시간); 해주면 입력한 ms단위뒤 함수가 시작됨

        복습하자
*/