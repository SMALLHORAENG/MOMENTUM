const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintToDo(newTodo);
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


*/