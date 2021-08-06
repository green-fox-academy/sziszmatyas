class Plant {
    color: string = "default";
    waterLevel: number = 0;
    waterNeed: number = 0;
    absCoefficient: number = 0;
    watering (wateringAmount: number): void {
        this.waterLevel += wateringAmount *this.absCoefficient
    }
}

class Tree extends Plant {
    absCoefficient = 0.4;
    waterNeed = 10;
    waterLevel = 0;
    constructor(color: string) {
        super()
        this.color = color;
    }
}

class Flower extends Plant {
    absCoefficient = 0.75;
    waterNeed = 5;
    waterLevel = 0;
    constructor(color: string) {
        super();
        this.color = color;
    }
}

let flower1 = new Flower ("yellow")
let flower2 = new Flower ("blue")
let tree1 = new Tree ("purple")
let tree2 = new Tree ("orange")

console.log(Flower)

flower1.watering(100)
console.log(flower1.waterLevel)