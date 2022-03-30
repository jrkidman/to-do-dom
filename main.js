let userInput = document.querySelector("#userInput");
let addButton = document.querySelector("#add");
let removeItemButton = document.querySelector("#remove-item");
let removeAllButton = document.querySelector("#remove-all");
let form = document.querySelector("form");
let todoList = document.querySelector("#todo-list");



addButton.addEventListener("click", function (event) {
    event.preventDefault();

    let str = userInput.value;
    let newDiv = document.createElement("div");
    newDiv.innerHTML = str;
    console.log(str);

    newDiv.addEventListener("click", function () {
        if (newDiv.style.textDecoration === "") {
            newDiv.style.textDecoration = "line-through";
        }
        else {
            newDiv.style.textDecoration = "";
        }
    })

    if (str !== "") {
        todoList.appendChild(newDiv);
    }
    form.reset();
})


let todoListItems = document.querySelectorAll("#todo-list div");


    removeItemButton.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("POS");
        todoListItems = document.querySelectorAll("#todo-list div");

        for (let i = 0; i < todoListItems.length; i++) {
            console.log(todoListItems[i]);

        if (todoListItems[i].style.textDecoration === "line-through") {
            todoListItems[i].remove();
        }
    }
    })




removeAllButton.addEventListener("click", function () {
    // console.log("remove all button clicked")

    for (let i = 0; i < todoList.length; i++) {
        let items = todoList[i];
        items.remove();
    }
})