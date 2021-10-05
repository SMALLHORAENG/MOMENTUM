const API_KEY = "";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //url의 API key 뒷 부분에 &units=metric 해주면 출력되는 온도 정보가 화씨에서 섭씨로 바뀜
    fetch(url)
    .then(res => res.json())
    .then((data) =>{
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = `위치: ${data.name}/`;
        weather.innerText =  `날씨: ${data.weather[0].main}/ 현재온도: ${data.main.temp}`;
    });
}

function onGeoError(){
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//latitude 위도 //longitude 경도

/* 8.0 Geolocation
        user의 위치(Geolocation)을 준다

        navigator.geolocation.getCurrenPosition()
        이거만 해주면 됨 (진짜 이 코드만 쓰면 됨) 이 구문을 사용한다

        geolocation.getCurrentPosition() 메서드는 장치의 현재 위치를 가져옴

        getCurrentPosition()은 argument가 2개 필요함
        1. 모든게 잘 됐을 때 실행되는 함수
        2. 에러 발생 시 실행되는 함수
        2가지의 함수를 만들어줘야 함
        function onGeoOk(position){
        console.log(position);
        } js에서 위치정보를 줄 것이기 때문에 argument를 넣어줌, 하나의 input parameter로 geolocation obj를 줄 것

        function onGeoError(){
        alert("위치를 찾을 수 없습니다.");
        }

        openweathermap.org
        회원가입 하면 여러가지 API를 사용할 수 있다.!

    8.1 Weather API
        API는 다른 서버와 이야기할 수 있는 방법
        openweathermap.org에서 로그인 후 API에서 사용 할 API의 doc를 누르면
        사용용도, 방법, 코드등이 나와있다
        그 안에 위도 경도 API key와 함께 API를 부르는 것


          *API key 값은 보안상 숨기는것이 바람직하다 방법을 찾아서 수정해보자*
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
        위 코드와 같이 변수명 lat, lon을 ${}으로 연결해서 넣어주고
        appid= 뒷 부분에 API key도 ${}을 이용해 연결해준다
        백틱으로 감싸는거 잊지말기

        url을 얻었으니 이제 url에서 정보를 얻어올 차례
        fetch(url); 을 해주면 
        network 가면 wifi에서 어떤 일 일어나는지 보여줌 (인터넷에서 뭔가 했을 때 무슨 일 일어나는지)
        새로고침 후 위치정보 동의(allow) 누르면 request가 나올 것
        이건 만들어둔 js의 URL을 fetch에서 요청한 것 

        (fetch는 promise인데 promise는 시간 좀 걸린 뒤 일어나는 것, 서버의 대답을 기다리기 때문
        그래서 then을 사용해줘야 함, then은 작업(응답)이 완료된 이후 then의 인자에 들어간 함수가 실행됨)

        url을 들어가면 나오는 정보들을 fetch 통해 js에서 불러온 것
        API_KEY 뒷 부분에 &units=metric 해주면 섭씨 온도가 출력된다 (원래 화씨온도 나옴)

        위 작성된 코드에서 response.json() 은 response(응답)의 json을 가져오는걸 의미함
        json은 위 코드에서 url안에 담고있는 모든 정보를 의미함

        .then((data) => {
            const name = data.name;
            const weather = data.weather[0].main;
        }); 이렇게 하면 

        index.html에 id weather 들어가는 div 만들어서 안에 span도 두개 만들어준다

        그리고 js로 와서 .then((data) => ){
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText =  `${data.weather[0].main} / ${date.main.temp};
            city.innerText = data.name;
        }

        fetch(api 주소)
        .then(함수명(argument)){
            return argument.json();
        })
        위 코드를 화살표함수로 하면
        .then((함수명) => {
            argument.json(); //리턴내용
        )} 이 된다

        API값 숨긴거 사용하는 방법 찾고, 복습하기
*/