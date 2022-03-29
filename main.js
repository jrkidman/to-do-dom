let userInput = document.querySelector("#userInput");
let addButton= document.querySelector("#add");
let removeItemButton = document.querySelector("#remove-item");
let removeAllButton = document.querySelector("#remove-all");
let form = document.querySelector("form");
let todoList = document.querySelector("#todo-list");
// let added = document.querySelector("#added");



addButton.addEventListener("click", function(event){
    event.preventDefault();

    let str = userInput.value;
    let newDiv = document.createElement("div");
    newDiv.innerHTML += str;
    console.log(str);

    if(str !== ""){
        todoList.appendChild(newDiv);
    }
    form.reset();

})



removeAllButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("remove all button clicked")
    todoList = "";
})