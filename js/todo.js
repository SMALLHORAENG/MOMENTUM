const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos(){ //투두 값 저장
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function toDo(argument_todo,li){
    return argument_todo.id !== parseInt(li.id);
}

function deleteToDo(event){ //투두 값 삭제
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;
    
    toDos = toDos.filter(argument_todo => toDo(argument_todo,li));
// toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));

    saveToDos();
    li.remove();
}

function paintToDo(newTodo){ //투두 입력
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",deleteToDo);

    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function handleTodoSubmit(event){ //submit 이벤트
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodosObj = {
        text: newTodo,
        id: Date.now(),
    }

    toDos.push(newTodosObj);
    paintToDo(newTodosObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit); //이벤트 호출 실행

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    //parsedToDos.forEach((item) => console.log("hello",item)); 
    parsedToDos.forEach(paintToDo);
}


/* 7.0 Setup
        index.html에 todo를 작성하고 나열할 수 있게 하기위한 form과 input를 만들어준다
        추가적으로 ul을 통해 리스트를 담을걸 만든다 li는 js로 추가할 것
    
        Form 과 Input 그리고 List를 js에 가져온다
    
        event를 줄 것이기 떄문에 todoForm.addEventListener 를 해주고 
        그 안에 들어갈 함수를 만들어준다

        function 함수명(argument) {
        argument.preventDefault(); 기본동작인 새로고침을 막아주기 위해 사용한다
        변수를 const로 선언해준 뒤 input의 value를 넣어준다 (저장)
        입력했기 때문에 텍스트를 지워주기 위해서 toDoInput.value = ""; 해주는 것
        }    
        주로 이러한 함수에는 argument 명이 event를 사용한다

        이렇게 todo를 입력해서 추가하게 될 것이다.

    7.1 Adding ToDos
        새로운 함수를 만들어주고 argument명을 todo값을 주고 받는데 사용할 수 있도록 한다
        (netTodo라는 이름을 사용 한 이유는 submit 이벤트 발생시 실행되는 함수에 newTodo라는 변수에 todo가 저장됨)

        newTodo를 받아와서 새로 작성한 paintToDo 함수에서
        li와 span을 만들고 span을 li안에 appendChild를 사용해서 넣어주고
        span의 innerText 값을 받아온 newTodo 값을 넣어주면 된다.

        newTodo가 선언된 함수안에 새로 작성한 paintTodo를 넣어주고 값을 newTodo를 해서 주고받고 하고
        실행을 시켜줘야 작동이 된다!

    7.2 ~ 7.8
        Deleting To Dos (삭제) , Saving To Dos (저장) , Loading To Dos part One (호출1)

    삭제    
        삭제버튼을 만들어줘야 함 (button이고 click event를 기다리고 있어야 함)
        (paintToDo 부분에 만들어줘야 함 - todo 옆에 나타내고 form 안에 들어가기 위함)
        -> 괄호 내용처럼 되게 하기위해서 li안에 버튼을 만들어주기

        span의 텍스트를 넣는것은 span을 선언한 뒤에 넣어준다 (span을 만든곳에 값 넣어주기 위함)
        append는 함수 안에서 맨 마지막에 있어야 함
        (여기선 버튼이 span 뒤에 있어야한다)

        클릭을 인식하기 위해 eventlistener가 필요하고 이걸 button에 넣어줘야 한다
        (이 이벤트는 먼저 투두를 만들고 난 뒤에 실행이 되야하기 때문에 paintToDo 함수안에 넣어서 실행시켜줌)

        *여기서 어떤것을 클릭한지 알 수 있는 방법이 필요함 순차적인 삭제가 아닌 원하는것을 삭제하기 위함*
            방법
                클릭에 대한 정보를 갖고있음, submit event에 대한 정보를 가진 것 처럼
                지우기 위해 만든 함수의 argument 부분에 event를 넣어준다 (이벤트 정보를 담고있는것)
                event 값을 갖고 event를 console.log 해주면 path부분에 어떤 li에서 클릭된지 나온다 (단서)
                - 클릭 target이 무엇인지 체크할 수 있음을 의미한다 -
        
                아래 설명을 보고 event.target.parentElement를 하면 부모 element를 찾을 수 있고
                이걸 이용해서 삭제할 수 있다 (innerText 까지 추가하면 내용까지 볼 수 있음)

        event는 property를 갖는데 어떤 버튼이 클릭된지 알려줌 (event.target)
        투두에 생성된 버튼을 보면 parentNode 라는게 있는데 리건 누가 그 버튼의 부모인지 나옴
        또는 parentElement 둘다 같은 것 누가 부모인지 알려줌

        삭제 할 부모 Element를 찾아서 그걸 변수로 만들어 담아주고 삭제해주면 내용이 삭제된다.
        const 변수명 = argument명.target.parentElement;
        변수명.remove();

        (설명 : 버튼 클릭시 argument인 event를 얻게 됨 , event는 target을 해줌 어떤게 클릭된지)
    
    저장
        localStorage
        localSotrage에 저장한 뒤 새로고침해도 나오게 불러오기
        저장
            const array명 = []; 로 array 생성
            todo를 입력할 때 array를 가져와서 입력한 todo를 push 해주기 (submit 함수안에)
            array명.push(argument - 입력받는 값 담기는것);
            push부분은 paintToDo가 실행되기 전에 해준다
             - paintToDo <todo가 만들어지기 전에 array를 가져와서 push 하기 위해서> -

            push해서 넣어준 array를 localStorage에 넣어주기
             *localStorage에는 배열 저장 불가능하고 텍스트만 저장 가능하다*
            function 생성 saveToDos 
            내용은 localStorage.setItem("key",array명);
            만든 function은 submit 효과가 있는 함수안에 실행시켜준다 saveToDos();

            object나 array나 어떤 것이든 string으로 바꿔주는 기능
             - JSON.stringify() - 매우 중요
            array를 그냥 넣으면 중복이 안되지만 JSON.stringify를 이용시 중복이 가능하다.

    출력(호출1)
     JSON.stringify
        JSON.stringify(객체,js값);
        위 코드 작성시 배열의 값을 단순한 string으로 바꿔준다
        여기 다시 이해하고 적립하자 ^^

     JSON.parse
        JSON.parse("[1,2,3,4]") -> (4) [1,2,3,4] 이런식으로 사용가능한 배열로 만들어줌
        (string을 js가 이해할 수 있는 배열로 만들어줌)
        JSON.parse(localStorage.getItem("ToDos")) 하면 localStorage에 있는 ToDos키를 가진 값을 가져와줌 
         *localStorage 안에 있는 값은 그냥 string값인데 이걸 JSON.parse에 넣어주면 배열값으로 바꿔줌*

        todos 값을 여러곳에서 사용하니 오류가 발생하지 않도록 하나의 변수로 선언해준다
        const TODOS_KEY = "todos"

        localStorage.getItem("ToDos") 를 저장해줄 변수를 만들어준다

        ToDos가 비어있으면 null값을 갖는데 이걸 이용해서 조건문을 만들어준다
        !== null (null값을 가진 상태가 아니라면)
        const parsedToDos = JSON.parse(savedToDos);
        parsedToDos 라는 변수안에 savedToDos의 값을 배열로 만들어서 넣어준다
        JSON.parse를 이용해서
        
        forEach()
        forEach는 array에 있는 각각의 item에 대해 function을 실행할 수 있게 해줌 (array에 있는 기능)
        괄호안에 들어가는 함수를 array의 item만큼 실행시켜줌

        function에 값을 받아줄 argument가 필요함 (item을 받는것이니 여기서는 item이라고 사용)

        function 없이도 짧은 코드를 만들 수 있다
        방법은 forEach((argument명) => return해줄것)); 해주는 것
        이 방법을 arrow function 화살표 함수라고 한다
        parsedToDos.forEach((item) => console.log("hello",item));
        이 화살표 함수는 item이라는 argument를 넘겨줘서 출력되게 해주는 것(return)
        (여기서의 item은 parsedToDos가 담고있는 배열값이다, 배열의 수(item)만큼 출력해준다) 
    
    ㅁ 저장을 습관화 하자.. KEY 값은 todos라고 나와야 한다 const TODOS_KEY = "todos" 라고 해줬어도 그렇다 ㅁ
    
    7.5 forEach (모든 아이템에 값을 넣어줌, 또는 함수실행)
        parsedToDos.forEach((item) => console.log("hello",item)); 
        이 부분은 각 item 앞에 hello를 붙이고 출력하는 방식인데
        item 부분에 paintToDo함수를 넣어주면 화면에 출력해준다 (투두를 입력하고 출력해주는 함수이기 떄문)
        parsedToDos.forEach(paintToDo); 이렇게
         *문제점 : 새로 입력시 덮어쓰고 이전 것 사라짐*
            원인 : 비어있는 array로 시작되고 그 위에 push 해주기 때문
            해결 방법
            array를 const가 아닌 let로 해서 변경이 가능케 한다
            let toDos = [];
            그 후에 이전 array의 값을 저장해준다
            toDos = parsedToDos;
        여기서 또 문제 , 모두 삭제해도 localStorage에서 지워지지 않았기 때문에 동일하게 출력됨

    7.6 삭제문제 해결 1
        localStorage에서 지워줘야 함
        localStorage는 데이터베이스가 아님 하지만 toDos array는 데이터베이스임
        localStorage는 toDos array를 복사해두는 곳

        toDos array 안에 있는 todo값들에게 ID같은 걸 주는방법으로 해야 삭제문제가 해결됨
        (text 대신 object를 만들어주기)

        id를 넣어줘서 어떤 li인지 구분할 수 있도록 해주는데
        이 id를 랜덤으로 주는것이 필요함, Date.now() 해주면 밀리초 단위로 시간을 줌

        const newTodosObj = {
        text: newTodo,
        id: Date.now(),
        }

        toDos.push(newTodosObj);
        paintToDo(newTodosObj);

        netTodosObj 라는 object를 담을 수 있는 변수를 만들어준 뒤 text에 입력받은 newTodo 값을 넣고
        id에는 Date.now()를 통해 랜덤적으로 아이디를 넣어줄 수 있도록 한다
        toDos.push(newTodosObj) 를 한 이유는 텍스트와 아이디 값 모두 push 해주기 위함 (localStorage)
        paintToDo(newTodosObj) 를 한 이유는 텍스트와 아이디 값 모두 입력해 저장해주기 위함

        li.id = newTodo.id;
        위 코드를 통해서 리스트인 li에 id값을 넣어주게 됨

        span.innerText = newTodo.text;
        위 코드처럼 해주지 않으면 Object Object로 나오게 된다 text를 해줘야 잘 출력됨

    7.7 삭제문제 해결 2
        forEach는 각 item마다 값을 주는데 이 예제의 코드처럼해서 object를 넣어줄 수 있다.

        filter 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 새로운 배열로 넣어줌
        filter(함수명) 하면 그 함수의 값이 true가 나와야 새로운 배열에 넣을 수 있음
        return 값이 true와 false로 나온다
        (조건이 맞아야 배열에 들어간다, 조건 결과가 false가 나오면 나오지 않음)

            예시
            const todos = [{text:"lalala",id: 12314421}, {text:"lololo",id: 22355121}]
            function todosFilter(todo){
                return todo.id !== 12314421 //이 부분의 조건은 todo.text를 통해 텍스트값으로 해주는것도 가능
            }
            todos.filter(todosFilter)
            하면 출력값은 {text:"lololo",id: 22355121} 이것만 나올 것 이다
            filter 부분에 return 값에 todo.id 의 값이 12314421 이 아니면 true가 나오기 때문에 그렇다
        filter은 true 값이 나오는 것 외에는 출력 안해줌

    7.8 삭제문제 해결 3
        todo를 삭제할 때 id값을 알 수 있으니 그거로 삭제해주면 됨
        filter function이 새 array를 주는걸 기억해야함 (기존거에서 걸러서 새 array를 주는 것)

        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        클릭한 li.id와 다른 toDo를 남겨두겠다는 걸 의미함

        parseInt 해준 이유는 id의 값이 number 값 이지만 console.log(typeOf li.id) 해주면 string 나옴

        함수 마지막에 saveToDos을 호출해준 이유는 지우고 저장하기 위해서임

        toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
        이 코드의 괄호 부분은 function을 이용하면 아래 코드처럼 작성

        function toDo(argument_todo,li){
        return argument_todo.id !== parseInt(li.id);
        }

        toDos = toDos.filter(argument_todo => toDo(argument_todo,li));
        
        toDo function 에서 argument_todo와 li를 argument로 가져오는데
        이건 필터 괄호에 작성해서 보내준다
        첫번쨰 argument => 함수명(argument값 1, 2) 이렇게 하면 다수의 argument값을 보낼 수 있다.
*/                  

