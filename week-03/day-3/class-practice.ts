"use strict"
export {}

class Tree {
    type: string = " "
    leafColor: string = "green"
    age: number = 0
    sex: string = "unknown"

    constructor(type?:string, color?: string, age?: number, sex?: "female") {
        this.type = type
        this.leafColor = color
        this.age = age
        this.sex = sex
    }
}

const pineTree: Tree = new Tree ("pine", "red", 20, "female")
console.log(`${pineTree.age} years old ${pineTree.leafColor} ${pineTree.sex} tree.`)