
const tasksList = document.querySelector("#tasks")
const taskInput = document.querySelector("#newTask")
const btnAgregar = document.querySelector("#addTask")
const completedTasksCount = document.querySelector("#done")
const totalTasksCount = document.querySelector("#total")

const tasks = [
    {id: '369738', name: 'Pasear al perro', state: false},
    {id: '379121', name: 'Terminar el desafio', state: true},
    {id: '397080', name: 'Leer sobre métodos y arreglos en Javascript', state: false}
]

function deleteTask(id) {
    const index = tasks.findIndex((e) => e.id == id);
    tasks.splice(index, 1);
    renderTasks();
}

function taskState(id) {
    const index = tasks.findIndex((e) => e.id == id);
    tasks[index].state = tasks[index].state ? false : true;
    renderTasks();
}

function renderTasks() {
    let completedTasks = 0
    let totalTasks = 0
    let html = ""
    for (let task of tasks) {
        html += `<li>${task.id} &nbsp;&nbsp;&nbsp;&nbsp; ${task.name} <input type="checkbox" id="${task.id}" onchange="taskState(${task.id})" ${task.state ? "checked=true" : ""} /> <button onclick="deleteTask(${task.id})"> X </button> </li>`;

        totalTasks += 1;
        
        if(task.state == true){
            completedTasks += 1;
        } 
    }
    tasksList.innerHTML = html;
    totalTasksCount.innerHTML = totalTasks
    completedTasksCount.innerHTML = completedTasks

}

btnAgregar.addEventListener("click", () => {
    generateId = Date.now()
    const newTask = {id: generateId.toString().slice(-6), name: taskInput.value, state: false}
    tasks.push(newTask)
    taskInput.value = ""

    renderTasks()
})

window.onload = function() {
    renderTasks();
  };

