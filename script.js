let input = document.querySelector("#todoinput")
let add = document.querySelector("#addbtn")
let todolist = document.querySelector("#todolist");


add.addEventListener("click" , () => {
let task = input.value.trim();

if (task === "")return;
let li = document.createElement("li");
li.innerText = task;
li.classList.add("todoitem");

let del = document.createElement("button")
del.innerText = "X";
del.classList.add("todoitem")


del.addEventListener("click" , ()=> {
    li.remove()
});

li.appendChild(del);
todolist.appendChild(li)

input.value=""
});