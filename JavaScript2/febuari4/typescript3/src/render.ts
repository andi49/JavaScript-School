import type { TaskClass } from "./taskClass";

export const render = (tasks:TaskClass[]):void=>{

    const wrapper = document.querySelector('#tasks-wrapper') as HTMLDivElement;
    wrapper.innerHTML = ''

    tasks.forEach(task => {

    const container = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerText = task.task;
    h2.style.marginBottom = '3rem';

    if (task.isDone) {
        h2.style.textDecoration = 'line-through';

        const btn = document.createElement('button');
        btn.innerText = 'X';

        btn.addEventListener('click', () => {
            task.delete();
        });

        container.append(h2, btn);
    } else {
        container.append(h2);
    }

    wrapper.append(container);
});


}