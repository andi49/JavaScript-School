export class Person {
        #name 
        #yearOfBirth

        constructor(name, yearOfBirth) {
            this.#name = name 
            this.#yearOfBirth = yearOfBirth
        }

        present(){
            return `Jag heter ${this.#name} och är född ${this.#yearOfBirth}`
        }
}

export class Fighter extends Person {
    #wins
    #losses 
    #draws

    constructor(name, yearOfBirth, wins, losses, draws) {
        super(name, yearOfBirth)
        this.#wins = wins
        this.#losses = losses
        this.#draws = draws
    }

     record() {
        return `   ${this.#wins}-${this.#losses}-${this.#draws}`
    }

}
