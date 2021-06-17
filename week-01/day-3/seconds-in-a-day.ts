let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

console.log("Seconds left in the day:", 60-currentSeconds + (59-currentMinutes)*60 + (23-currentHours)*3600)
