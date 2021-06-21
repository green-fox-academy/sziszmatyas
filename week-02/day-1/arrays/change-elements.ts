"use strict"
export {}

let numbers : number[] = [1, 2, 3, 8, 5, 6];
numbers.map(function(e){
    numbers[3] = 4;
});
console.log(numbers);