document.addEventListener('DOMContentLoaded', (event) => {
    const buttonAdd = document.querySelector(".add-btn");
    const taskInput = document.getElementById("taskInput");
    const tasksContainer = document.querySelector(".tasks");

    buttonAdd.addEventListener("click", addtask);

    function addtask(event) {
        event.preventDefault(); 
        const taskValue = taskInput.value.trim();
        if (taskValue !== "") {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("check");
            checkbox.addEventListener("change", function() {
                if (this.checked) {
                    li.classList.add("deletetask");
                } else {
                    li.classList.remove("deletetask");
                }
            });

            const li = document.createElement("li");
            li.textContent = taskValue;

            taskDiv.appendChild(checkbox);
            taskDiv.appendChild(li);

            tasksContainer.appendChild(taskDiv);
            taskInput.value = "";
        } else {
            alert("Please enter a task!");
        }
    }
});
