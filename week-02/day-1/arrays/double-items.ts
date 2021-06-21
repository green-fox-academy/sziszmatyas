"use strict"
export {}

let drinks = ['Gin', 'Whiskey', 'Wine', 'Beer'];

drinks = drinks.map(function(e){
    return e = e + e;
});

console.log(drinks);