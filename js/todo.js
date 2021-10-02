const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos(){
    localStorage.setItem("toDos", JSON.stringify(toDos))
}

function deleteToDo(event){
    //console.log(event.target.parentElement);
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;

    const button = document.createElement("button");
    button.innerText = "X";

    li.appendChild(span);
    li.appendChild(button);

    button.addEventListener("click",deleteToDo);

    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);



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
        1. 저장
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

    
*/                  