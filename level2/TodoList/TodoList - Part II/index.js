const taskInput = document.getElementById("taskInput");
    const tasksList = document.getElementById("tasksList");
    const addTaskBtn = document.getElementById("addTaskBtn");

    addTaskBtn.addEventListener("click", addTask);

    function addTask() {
      const taskText = taskInput.value.trim();
      if (taskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${taskText}</span>
          <button onclick="removeTask(this)">Remove</button>
        `;
        tasksList.appendChild(li);
        taskInput.value = "";
      }
    }

    function removeTask(button) {
      button.parentElement.remove();
    }