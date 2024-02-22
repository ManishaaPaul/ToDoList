function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = taskText;
    ul.appendChild(li);

    input.value = "";
}
