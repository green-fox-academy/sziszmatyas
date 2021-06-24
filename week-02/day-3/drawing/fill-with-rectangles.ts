  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles
// Avoid code duplication!

let canW = 600
let canH = 400

function drawRect(x, y, w, h, color: string ) {
    ctx.fillStyle = color
    ctx.fillRect(x,y,w,h)
}

drawRect(10,10,20,30,"yellow")
drawRect(10,50,60,20,"blue")
drawRect(300,50,150,150, "black")
drawRect(300,300,200,50,"purple")
