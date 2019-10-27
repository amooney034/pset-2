const readlineSync = require("readline-sync");

const students = Number(readlineSync.question("\nStudents: "));
const teachers = Number(readlineSync.question("Teachers: "));
const capacity = Number(readlineSync.question("Bus capacity: "));

let riders = (students + teachers);
let buses = (riders / capacity);
let second_buses = Math.ceil(buses);
let remaining = Math.floor((second_buses * buses) * (buses / second_buses));
let final_buses = second_buses.toLocaleString ();
let final_remaining = remaining.toLocaleString ();

console.log("\n" + Math.round(final_buses) + " bus(es) is (are) needed, with " + final_remaining + " passenger(s) on the last bus.\n");
