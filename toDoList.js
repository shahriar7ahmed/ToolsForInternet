const input = document.getElementById("todo-input"); /* to do input */
const addBtn = document.getElementById("add-btn"); /* add button */
const todoList = document.getElementById("todo-list"); /* todo list */

// Add todo
addBtn.addEventListener("click", () => {
  const task = input.value.trim(); /* get the trimmed input value */
  if(task !== "") {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
      <span>${task}</span> <!-- task description -->
      <button class="delete-btn">Delete</button>
    `; /* todo item */
    todoList.appendChild(li);
    input.value = "";

    // Delete functionality
    li.querySelector(".delete-btn").addEventListener("click", () => {
      li.remove();
    });
  }
});

// Add todo with Enter key
input.addEventListener("keypress", (e) => {
  if(e.key === "Enter") addBtn.click();
});
