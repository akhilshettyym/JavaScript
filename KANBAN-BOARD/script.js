const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const tasks = document.querySelectorAll(".task");

let draggedElement = null;

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        // console.log("Dragging", e)
        draggedElement = task;
    })
})

// Progress
// progress.addEventListener("dragenter", (e)=> {
//     progress.classList.add("hover-over")
// })
// progress.addEventListener("dragleave", (e)=> {
//     progress.classList.remove("hover-over")
// })

const columns = [todo, progress, done];

function addDrag(column) {
    column.addEventListener("dragenter", (e) => {
        e.preventDefault();
        column.classList.add("hover-over");
    })

    column.addEventListener("dragleave", (e) => {
        e.preventDefault();
        column.classList.remove("hover-over");
    })

    column.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    column.addEventListener("drop", (e) => {
        e.preventDefault();

        // console.log("Dropped", draggedElement, column);

        column.appendChild(draggedElement);
        column.classList.remove("hover-over");

        // Count Logic
        columns.forEach(col => {
            const tasks = col.querySelectorAll(".task");
            const count = col.querySelector(".right");

            count.innerHTML = tasks.length;
        })
    })
}

addDrag(todo);
addDrag(progress);
addDrag(done);

// Modal active logic
const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");

toggleModalButton.addEventListener("click", () => {
    modal.classList.toggle("active")
})

// Add Task Logic
const addTaskBtn = document.querySelector("#add-new-task");
addTaskBtn.addEventListener("click", () => {
    const taskTitle = document.querySelector("#task-title-input").value;
    const taskDesc = document.querySelector("#task-desc-input").value;

    const div = document.createElement("div");

    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
    <h2>${taskTitle}</h2>
    <p>${taskDesc}</p>
    <button>Delete</delete>
    `
    todo.appendChild(div);

    div.addEventListener("drag", (e) => {
        draggedElement = div;
    })

    modal.classList.remove("active");

    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        count.innerHTML = tasks.length;
    })
})



// Modal close Logic
const togCanBtn = document.querySelector("#cancel-task");
const modalBg = document.querySelector(".modal .bg")
togCanBtn.addEventListener("click", () => {
    modal.classList.remove("active");
})
modalBg.addEventListener("click", () => {
    modal.classList.remove("active");
})