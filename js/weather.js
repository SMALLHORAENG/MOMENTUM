const API_KEY = "";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
}

function onGeoError(){
    alert("위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

//latitude 위도 //longitude 경도

/* 8.0 Geolocation
        user의 위치(Geolocation)을 준다

        navigator.geolocation.getCurrenPosition()
        이거만 해주면 됨 (진짜 이 코드만 쓰면 됨)
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

        fetch(url); 을 해주면 
        network 가면 wifi에서 어떤 일 일어나는지 보여줌 (인터넷에서 뭔가 했을 때 무슨 일 일어나는지)
        새로고침 후 위치정보 동의(allow) 누르면 request가 나올 것
        이건 만들어둔 js의 URL을 fetch에서 요청한 것 (fetch는 promise인데 promise는 시간 좀 걸린 뒤 일어나는 것)       

        API값 숨긴거 사용하는 방법 찾고, 복습하기
*/