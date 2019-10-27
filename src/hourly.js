const readlineSync = require("readline-sync");

const wage = readlineSync.question("\nHourly wage: ");

let monday = readlineSync.question("\nMonday: ");
let tuesday = readlineSync.question("Tuesday: ");
let wednesday = readlineSync.question("Wednesday: ");
let thursday = readlineSync.question("Thursday: ");
let friday = readlineSync.question("Friday: ");
let saturday = readlineSync.question("Saturday: ");
let sunday = readlineSync.question("Sunday: ");

let final_monday = (wage * monday);
let final_tuesday = (wage * tuesday);
let final_wednesday = (wage * wednesday);
let final_thursday = (wage * thursday);
let final_friday = (wage * friday);
let final_saturday = (wage * saturday);
let final_sunday = (wage * sunday);
let wage1 = (final_monday + final_tuesday + final_wednesday + final_thursday + final_friday + final_saturday + final_sunday);
let final_wage = wage1.toLocaleString ("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nYou'll make " + "$"+ final_wage + " this week.\n");
