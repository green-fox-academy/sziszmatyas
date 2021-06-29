'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

let side: number = 20
let triHigh: number = Math.sin((Math.PI)/3)*side
let xCenter: number = canvas.height/2
let yCenter: number = canvas.width/2
let xStart: number = xCenter - 7 * side
let yStart: number = yCenter - 4 * triHigh

function makeHex(x: number ,y: number) {
    ctx.moveTo(x, y)
    ctx.lineTo(x+side, y)
    ctx.lineTo(x+side*1.5, y+triHigh)
    ctx.lineTo(x+side, y+triHigh*2)
    ctx.lineTo(x, y+ triHigh*2)
    ctx.lineTo(x-side*0.5, y+triHigh)
    ctx.lineTo(x, y)
    ctx.stroke()
}

let counter = 4

for (let i: number = 0; i < 4; i++) {
    for (let j: number = 0; j < counter; j++){
        makeHex(xStart, yStart+j*triHigh*2)
    }    
    xStart = xStart + side *1.5
    yStart = yStart - triHigh
    counter++  
}

let counter2 = 5
    
for (let i: number = 4; i < 8; i++) {
    for (let j: number = 0; j < counter; j++){
        makeHex(xStart, yStart+j*triHigh*2)
    }    
    xStart = xStart + side *1.5
    yStart = yStart - triHigh
    counter++  
}
