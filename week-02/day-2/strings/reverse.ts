"use strict"
export {}

let toBeReversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;

function reverse(toBeReversed: string) {
    return toBeReversed.split("").reverse().join("")
}

console.log(reverse(toBeReversed));



