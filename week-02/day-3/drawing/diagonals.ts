  'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line
// Use this function to draw the canvas' diagonals
// If the line starts from the upper-left corner it should be green, otherwise it should be red
// Make decision about the color in the function

function makeLine(x1:number, y1:number, x2:number, y2:number) {
    if (x1 == 0 && y1 == 0) {
        ctx.strokeStyle = "green"
    } else {
        ctx.strokeStyle = "red"
    }
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

makeLine(0,0,600,400)
makeLine(600,0,0,400)
