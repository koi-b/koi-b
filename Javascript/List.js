// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const clearCompletedButton = document.getElementById("clearCompletedButton");

// Event listener for adding a task
addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim(); // Get the task text
    if (taskText !== "") {
        // Create a new list item for the task
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <input type="checkbox">
            <span>${taskText}</span>
            <button class="delete">Delete</button>
        `;

        // Add event listener to delete the task
        const deleteButton = taskItem.querySelector(".delete");
        deleteButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });

        // Add the new task to the list
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = "";
    }
});

// Event listener for clearing completed tasks
clearCompletedButton.addEventListener("click", () => {
    const completedTasks = taskList.querySelectorAll("li input[type='checkbox']:checked");
    completedTasks.forEach((task) => {
        const taskItem = task.parentNode;
        taskList.removeChild(taskItem);
    });
});
