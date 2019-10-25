const readlineSync = require("readline-sync");
const fourOoneK = 0.93
const fed_income = 0.843
const state_income = 0.9553
const ss = 0.938
const med = 0.9855
const paycheck = 24
let annual_salary = Number(readlineSync.question("\nAnnual salary: "));
let paid = (annual_salary * fourOoneK)
let second_paid = (paid * fed_income * state_income * ss * med);
let final_paid = (second_paid / paycheck)
let final_paycheck = final_paid.toLocaleString ("en", {minimumFractionDigits:2, maximumFractionDigits:2})
console.log("\nYour take-home pay each check will be $" + final_paycheck)
