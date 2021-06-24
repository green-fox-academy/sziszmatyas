  
'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 2 parameters and draws a single line
// Parameters: the x and y coordinates of the line's starting point
// The function shall draw a 50 long horizontal line from that point
// Draw at least 3 lines with that function using a loop


function makeLine(x1:number, y1:number) {
    ctx.strokeStyle = "blue"
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x1+50, y1)
    ctx.stroke()
}

for (let i = 0; i<6; i++) {
    for (let j = 0; j<10; j++)
        makeLine(100+70*i,100+20*j)
}