const readlineSync = require("readline-sync");
const convert = 2.54
let w_inches = Number(readlineSync.question("Width: "));
let l_inches = Number(readlineSync.question("Length: "));
let width = w_inches * convert
let length = l_inches * convert
let perimeter = width + width + length + length
perimeter = Math.round(100*perimeter)/(100);
final_perimeter = perimeter.toLocaleString ();
console.log("\nA(n) " + w_inches + "-by-" + l_inches + "-inch sheet of paper has a perimeter of " + final_perimeter + " centimeter(s).\n");
