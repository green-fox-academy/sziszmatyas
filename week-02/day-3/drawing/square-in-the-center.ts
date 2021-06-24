'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
export {};

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw a green 10x10 square to the center of the canvas

let canW = 600
let canH = 400
let sqH = 10
let sqW = 10

ctx.fillStyle = "green"
ctx.fillRect((canW-sqW)/2, (canH-sqH)/2, 10, 10)