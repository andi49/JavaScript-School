import { Task } from "./module/task.js";
import { getAll, postTask } from "./module/server.js";



const handleTasks =  data => {
    let tasks = [];
    
    for(const key in data){
        // console.log(key, data[key])
        tasks.push(new Task(key, data[key].task, data[key].done ) )
    }

    console.log(tasks)
    const taskWrapper = document.querySelector('#taskWrapper')
    taskWrapper.innerHTML = '';

    tasks.forEach(task => task.render(taskWrapper))
}

getAll()
    .then(handleTasks)

const form = document.querySelector('form');
form.addEventListener('submit', event =>{
    event.preventDefault();

    const newTask = form.querySelector('input').value.trim();
    if(newTask){
        postTask(newTask)
            .then( getAll )
            .then(handleTasks );
    }
})