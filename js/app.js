{/* 
<ul class="list-group list-group-flush bg-transparent">
                        </ul>
<li class="list-group-item bg-transparent text-danger d-flex mx-2 p-1 align-items-center">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
        <label class="form-check-label" for="flexCheckDefault">
        </label>
        <p class="p-0 m-0 ms-2 d-inline"> An item </p>
        <p class="p-0 m-0 ms-auto d-inline" style="cursor: pointer;"> X </p>
</li> */}

const addButton = document.querySelector("#addButton");
const resetButton = document.querySelector("#resetButton");

const inputGroup = document.querySelector("ul");
const inputValue = document.querySelector("#todoName");


let todos = [];


var i = 0;

window.load = reloadLocalStorage() + runEvents();

function runEvents()
{
    checktheLocalStorage();
    addButton.addEventListener("click", addTodoUI);
    resetButton.addEventListener("click" ,resetTodo);
    inputGroup.addEventListener("click",deleteTodoOne);
    checkedCheckBox();

}
function checkedCheckBox(){
    reloadLocalStorage();
    const checkbox = document.querySelectorAll(".form-check-input");
    checkbox.addEventListener("click",x);
}

function x(){
    console.log(checkbox);
        for(let i = 0; i < todos.length ; i++){
            if(checkbox[i].checked){
                console.log("selamlar");
            }
        }
}

function reloadLocalStorage(){

    let local = JSON.parse(localStorage.getItem("todos"));

    for(let i = 0; i < local.length ; i++){

        const liItem = document.createElement("li");
        const inputItem = document.createElement("input");
        const labelItem = document.createElement("label");
        const pItem = document.createElement("p");
        const closeItem = document.createElement("p");

        inputGroup.appendChild(liItem);
        liItem.appendChild(inputItem);
        liItem.appendChild(labelItem);
        liItem.appendChild(pItem);
        liItem.appendChild(closeItem);

        labelItem.className = "form-check-label";
        labelItem.for = "flexCheckDefault";

        pItem.className = "p-0 m-0 ms-2 d-inline texting-color";
        pItem.innerHTML = local[i] ;
 

        closeItem.className = "p-0 m-0 ms-auto d-inline close closeItem";
        closeItem.setAttribute("style","cursor: pointer");
        closeItem.textContent = "X";

        inputItem.className = "form-check-input flexCheckDefault bg-inputComplete";
        inputItem.type = "checkbox";

        liItem.className = "list-group-item bg-transparent text-danger d-flex mx-2 p-1 align-items-center ";
    }
}

function deleteTodoOneLocalStorage(e){

    let local = JSON.parse(localStorage.getItem("todos"));
    let x =e.target.parentElement.children[2].textContent;

    for(let i = 0; i < local.length;i++ ){

        if(x === local[i]){

            console.log(local[i]);
            local.splice(i,1);
            todos = local;
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }

}

function deleteTodoOne(e){
    if(e.target.className === "p-0 m-0 ms-auto d-inline close closeItem"){
        const removeElement = e.target.parentElement;
        removeElement.remove();
        deleteTodoOneLocalStorage(e);
    }
}
function checktheLocalStorage(){

    if(localStorage.getItem("todos") === null){
        todos = [];
        
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}
function addTodoLocaleStorage(newTodo){

    checktheLocalStorage();
    todos.push(newTodo.value);

    localStorage.setItem("todos", JSON.stringify(todos));

}

function addTodoUI(){

    if(inputValue.value == ""){
        alert("Write Element");
        return;
    }
    else{
    addTodoLocaleStorage(inputValue);

    const liItem = document.createElement("li");
    const inputItem = document.createElement("input");
    const labelItem = document.createElement("label");
    const pItem = document.createElement("p");
    const closeItem = document.createElement("p");

    inputGroup.appendChild(liItem);
    liItem.appendChild(inputItem);
    liItem.appendChild(labelItem);
    liItem.appendChild(pItem);
    liItem.appendChild(closeItem);

    labelItem.className = "form-check-label";
    labelItem.for = "flexCheckDefault";

    pItem.className = "p-0 m-0 ms-2 d-inline texting-color";
    pItem.innerHTML = inputValue.value ;
 

    closeItem.className = "p-0 m-0 ms-auto d-inline close closeItem";
    closeItem.setAttribute("style","cursor: pointer");
    closeItem.textContent = "X";

    inputItem.className = "form-check-input flexCheckDefault bg-inputComplete";
    inputItem.type = "checkbox";


    inputValue.value = "";

    liItem.className = "list-group-item bg-transparent text-danger d-flex mx-2 p-1 align-items-center ";
    }
}

function resetTodo(){
    var todoss = document.querySelectorAll(".list-group-item");

    if(todoss === null){
        alert("No element");
    }
    else{
        for(let i = 0; i < todos.length ; i++){
            todoss[i].remove();
        }
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos));
        reloadLocalStorage();
    }
}


// addButton.addEventListener("click", function () {

//     const liItem = document.createElement("li");
//     const inputItem = document.createElement("input");
//     const labelItem = document.createElement("label");
//     const pItem = document.createElement("p");
//     const closeItem = document.createElement("p");

//     todoGroup.appendChild(liItem);
//     liItem.appendChild(inputItem);
//     liItem.appendChild(labelItem);
//     liItem.appendChild(pItem);
//     liItem.appendChild(closeItem);


//     labelItem.className = "form-check-label";

//     pItem.className = "p-0 m-0 ms-2 d-inline";
//     pItem.innerHTML = "merhaba";
 

//     closeItem.className = "p-0 m-0 ms-auto d-inline";
//     closeItem.setAttribute("style","cursor: pointer");
//     closeItem.textContent = "x";

//     inputItem.className = "form-check-input";
//     inputItem.type = "checkbox";
//     inputItem.id = `flexCheckDefault${i}`;


//     liItem.className = "list-group-item bg-transparent text-danger d-flex mx-2 mt-1 p-1 align-items-center";
//     console.log("selam");
//     i++;
// });