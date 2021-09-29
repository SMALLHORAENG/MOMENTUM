const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    console.log(newTodo);
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


*/