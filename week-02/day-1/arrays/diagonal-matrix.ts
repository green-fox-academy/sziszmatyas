"use strict"
export {}

let size = 6;

//A good solution, with if/else
let matrix: number[][] = []

for (let i:number=0; i<size; i++) {
    let currentRow = []
    for (let j: number=0; j<size; j++) {
        if (i==j) {
            currentRow.push(1);
     } else { currentRow.push(0);
     }
    };
    matrix.push(currentRow)
};
console.table(matrix)


let matrix2: any[][] = [];;
for (let i:number=0; i<size; i++) {
    let currentRow = []
    for (let j: number=0; j<size; j++) {
        currentRow.push(0);
    };
    matrix2.push(currentRow)
    matrix2[i][i] = 1
};
console.table(matrix2)
