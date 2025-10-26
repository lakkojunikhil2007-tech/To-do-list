// Select elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Add task when clicking Add button
function addTask() {
  if (inputBox.value.trim() === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for × symbol
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

// Listen for click events inside the task list
listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked"); // Mark as done
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); // Delete task
    saveData();
  }
});

// Press Enter to add a task
inputBox.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Save to local storage
function saveData() {
  localStorage.setItem("tasks", listContainer.innerHTML);
}

// Load saved tasks when the page opens
function showTasks() {
  listContainer.innerHTML = localStorage.getItem("tasks");
}

showTasks();