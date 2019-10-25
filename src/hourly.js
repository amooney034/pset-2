const readlineSync = require("readline-sync");
const wage = Number(readlineSync.question("\nHourly wage: "));
let monday = Number(readlineSync.question("\nMonday: "));
let tuesday = Number(readlineSync.question("Tuesday: "));
let wednesday = Number(readlineSync.question("Wednesday: "));
let thursday = Number(readlineSync.question("Thursday: "));
let friday = Number(readlineSync.question("Friday: "));
let saturday = Number(readlineSync.question("Saturday: "));
let sunday = Number(readlineSync.question("Sunday: "));
let final_monday = (wage * monday);
let final_tuesday = (wage * tuesday);
let final_wednesday = (wage * wednesday);
let final_thursday = (wage * thursday);
let final_friday = (wage * friday);
let final_saturday = (wage * saturday);
let final_sunday = (wage * sunday);
let wage1 = (final_monday + final_tuesday + final_wednesday + final_thursday + final_friday + final_saturday + final_sunday)
let final_wage = wage1.toLocaleString ("en", {minimumFractionDigits:2, maximumFractionDigits:2})

console.log("\nYou’ll make $" + final_wage + " this week.\n")
