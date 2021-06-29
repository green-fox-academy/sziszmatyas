'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

const size = 15
let x = size

for (let i = 0; i < 6; i++) {
    ctx.fillStyle = "purple"
    ctx.fillRect(x + size*i, x + size*i, size+size*i, size+size*i)
    ctx.strokeRect(x + size*i, x + size*i, size+size*i, size+size*i)
    x = x + size *i
}