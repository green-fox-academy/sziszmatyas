'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters
// (the square size and the fill color)
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.

let canW = 600
let canH = 600

function makeSquare(x, color: string){
    ctx.fillStyle = color
    ctx.fillRect((canW-x)/2, (canH-x)/2,x,x)
}

for (let i=120; i>0; i--) {
    makeSquare(i*5, `hsl(${360/120*i},100%,50%)`)
    console.log("i = "+i)
}