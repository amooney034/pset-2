const readlineSync = require("readline-sync");
const convert = 25.4
let w_inches = Number(readlineSync.question("\nWidth: "));
let l_inches = Number(readlineSync.question("Length: "));
let width = w_inches * 25.4
let length = l_inches * 25.4
let area = width * length
area = Math.round(100*area)/(100);
final_area = area.toLocaleString ();
console.log("\nA(n) " + w_inches + "-by-" + l_inches + "-inch sheet of paper has an area of " + final_area + " square millimeter(s).\n");
