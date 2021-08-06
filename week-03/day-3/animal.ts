class Animal {
    hunger: number;
    thirst: number;

    constructor(hunger: number = 50, thirst: number = 50) {
        this.hunger = hunger;
        this.thirst = thirst;
    }

    eat(): number {
        return --this.hunger
    }

    drink(): number {
        return --this.thirst
    }

    play(): number {
        return ++this.thirst, ++this.hunger
    }
}

let lion = new Animal();
let hiena = new Animal(60, 50);

for (let i = 0; i < 10; i++) {
hiena.play()
}

console.log(hiena)