document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value;
    const prioritySelect = document.getElementById("priority");
    const priorityValue = prioritySelect.value;

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = `${taskText} - ${priorityValue}`;

      switch (priorityValue) {
        case "high":
          taskItem.style.color = "red";
          break;
        case "medium":
          taskItem.style.color = "yellow";
          break;
        case "low":
          taskItem.style.color = "green";
          break;
      }

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });

      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);

      taskInput.value = "";
    }
  });
});