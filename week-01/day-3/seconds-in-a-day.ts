let currentHours: number = 12;
let currentMinutes: number = 14;
let currentSeconds: number = 10;

console.log("Seconds left in the day:", 60-currentSeconds + (59-currentMinutes)*60 + (23-currentHours)*3600)
