"use strict"
export {}

let names = ["Arthur", "Boe", "Chloe"];
console.log(names);

let temp = names[2];
names[2] = names[0];
names[0] = temp;

console.log(names);