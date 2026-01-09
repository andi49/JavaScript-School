export class Die{

    #isFrozen; 
    #currentValue;

    constructor(){
        this.#currentValue = 1;
        this.#isFrozen = false;
    }

    roll(){
        this.#currentValue = !this.#isFrozen ? Math.floor(Math.random()*6)+1 : this.#currentValue;
    }
    
    getCurrentValue(){
        return this.#currentValue;
    }

    freeze(){
        this.#isFrozen = true;
    }
    unFreeze(){
        this.#isFrozen = false;
    }

    display( container ){
        const div = document.createElement('div');
        const dieEl = document.createElement('h1');
        const freezeBtn = document.createElement('button')
        const unFreezeBtn = document.createElement('button')

        dieEl.innerText = this.#currentValue;
        freezeBtn.innerText = 'Freeze';
        unFreezeBtn.innerText = 'Unfreeze';

        dieEl.addEventListener('click', ()=>{
            this.roll();
            dieEl.innerText = this.#currentValue;
        })

        freezeBtn.addEventListener('click', ()=>{
            this.freeze();
            div.classList.add('frozen')
        })
        unFreezeBtn.addEventListener('click', ()=>{
            this.unFreeze();
            div.classList.remove('frozen')
        })

        div.append(dieEl, freezeBtn, unFreezeBtn);
        container.append(div);
    }
}