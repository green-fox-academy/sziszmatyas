"use strict"

abstract class Instrument {
    protected _name: string;
    
    getName(): void {
        console.log(this._name);
    }

    play(): void {};
    constructor(name:string) {
        this._name = name;
    }
}

abstract class StringedInstrument extends Instrument {
    numberOfStrings: number;

    sound(): string {
        return ""
    };
    
    constructor(name: string, numOfStrings: number) {
        super(name);
        this.numberOfStrings = numOfStrings;
    }
}

class ElectricGuitar extends StringedInstrument {}

class BassGuitar extends StringedInstrument {}

class Violin extends StringedInstrument {}

let guitar = new ElectricGuitar("guitar1", 6)

console.log(guitar)
