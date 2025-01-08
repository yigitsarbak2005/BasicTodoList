function add() {
    let taskInput = document.getElementsByClassName("todo-input")[0];
    let taskValue = taskInput.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    };

    addTask(taskValue);
    taskInput.value = "";
};

function addTask(value) {
    let task = document.createElement("div");
    let taskText = document.createElement("div");
    let paragraph = document.createElement("p");
    let deleteButton = document.createElement("button");

    task.className = "input-group my-3";
    

    taskText.className = "task-text";
    taskText.style.backgroundColor = "rgb(102, 17, 17)";
    taskText.style.border = "1px solid black";
    taskText.style.borderRadius = "0.375rem 0 0 0.375rem";
    taskText.style.color = "white";
    taskText.style.marginLeft = "30px";
    taskText.style.maxWidth = "260px"

    paragraph.innerText = value;
    paragraph.style.overflowWrap = "break-word";

    deleteButton.className = "btn";
    deleteButton.type = "button";
    deleteButton.textContent = "Delete";
    deleteButton.style.backgroundColor = "red";

    deleteButton.onclick = function () {
        task.remove();
    };

    taskText.appendChild(paragraph);
    task.appendChild(taskText);
    task.appendChild(deleteButton);
    document.getElementById("tasks").appendChild(task);
};
