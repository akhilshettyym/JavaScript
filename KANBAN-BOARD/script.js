let tasksData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const tasks = document.querySelectorAll(".task");

let draggedElement = null;

function addTask(title, desc, column) {
    const div = document.createElement("div");
    div.classList.add("task");
    div.setAttribute("draggable", "true");

    div.innerHTML = `
            <h2>${title}</h2>
            <p>${desc}</p>
            <button>Delete</button>
            `
    column.appendChild(div);

    div.addEventListener("drag", (e) => {
        draggedElement = div;
    });

    const deleteBtn = div.querySelector("button");
    deleteBtn.addEventListener("click", () => {
        div.remove();
        updateTaskCount();
    })
    return div;
}

function updateTaskCount() {
    columns.forEach(col => {
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        // Storage Logic
        tasksData[col.id] = Array.from(tasks).map(t => {
            return {
                title: t.querySelector("h2").innerText,
                desc: t.querySelector("p").innerText
            }
        })
        localStorage.setItem("tasks", JSON.stringify(tasksData));

        count.innerHTML = tasks.length;
    })
}

if (localStorage.getItem("tasks")) {
    const data = JSON.parse(localStorage.getItem("tasks"));
    console.log("DATA", data);
    for (const col in data) {
        const column = document.querySelector(`#${col}`);
        data[col].forEach(task => {
            addTask(task.title, task.desc, column);
        })

        const tasks = column.querySelectorAll(".task");
        const count = column.querySelector(".right");
        count.innerText = tasks.length;
    }
}

tasks.forEach(task => {
    task.addEventListener("drag", (e) => {
        draggedElement = task;
    })
})

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

        column.appendChild(draggedElement);
        column.classList.remove("hover-over");

        updateTaskCount();

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
    addTask(taskTitle, taskDesc, todo);

    updateTaskCount();

    modal.classList.remove("active");

    document.querySelector("#task-title-input").value = "";
    document.querySelector("#task-desc-input").value = "";
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