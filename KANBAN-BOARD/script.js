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
    })
}

addDrag(todo);
addDrag(progress);
addDrag(done);