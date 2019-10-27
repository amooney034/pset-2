const readlineSync = require("readline-sync");

const length = 48
const width = 24
const diameter = 6

let area = (length * width);
let radius = (diameter / 2);
let circle_area = ((radius * radius) * Math.PI);
let surface_area = (area - circle_area);
let final_sa = surface_area.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

console.log("\nThe surface area of a standard Cornhole board is " + final_sa  + " square inch(es).\n");
