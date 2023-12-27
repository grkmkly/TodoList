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





var i = 0;

addButton.addEventListener("click", function () {

    if(inputValue.value == ""){
        alert("Write Element");
        return;
    }

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

    pItem.className = "p-0 m-0 ms-2 d-inline";
    pItem.innerHTML = inputValue.value ;
 

    closeItem.className = "p-0 m-0 ms-auto d-inline";
    closeItem.setAttribute("style","cursor: pointer");
    closeItem.textContent = "X";

    inputItem.className = "form-check-input";
    inputItem.type = "checkbox";
    inputItem.id = `flexCheckDefault${i}` ;
    inputItem.value = "";

    liItem.className = "list-group-item  bg-transparent text-danger d-flex mx-2 p-1 align-items-center";
    i++;
    inputValue.value = "";
});
resetButton.addEventListener("click" ,function(){
    const todos = document.querySelectorAll(".list-group-item");
    console.log(todos);
    if(todos == null){
        alert("No element");
        return;
    }
    else{
        while(i>0){
            todos[i-1].remove();
            i--;
        }
    }
});


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