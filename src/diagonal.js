const readlineSync = require("readline-sync");
let w_inches = Number(readlineSync.question("\nWidth: "));
let l_inches = Number(readlineSync.question("Length: "));
let diagonal_inches = Math.sqrt((w_inches * w_inches) + (l_inches * l_inches));
diagonal = Math.round(100*diagonal_inches)/(100);
final_diagonal = diagonal.toLocaleString ("en", {minimumFractionDigits:2, maximumFractionDigits:2});
console.log("\nA(n) " + w_inches + "-by-" + l_inches + "-inch sheet of paper has a diagonal of " + final_diagonal + " inch(es).\n");
