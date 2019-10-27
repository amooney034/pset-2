const readlineSync = require("readline-sync");

const annual_salary = Number(readlineSync.question("\nAnnual salary: "));

const fed_income = 0.157
const state_income = 0.0447
const ss = 0.062
const med = 0.0145
const paycheck_times = annual_salary/24
const fourOoneK = 0.07*(paycheck_times)

let fourOoneKcheck = paycheck_times-fourOoneK


let fed = (fed_income * fourOoneKcheck);
let state = (state_income * fourOoneKcheck);
let social = (ss * fourOoneKcheck)
let medical = (med * fourOoneKcheck);
let final_paid = (fed + state + social + medical);
let final_paycheck = (fourOoneKcheck-final_paid).toLocaleString ("en", {minimumFractionDigits:2, maximumFractionDigits:2})

console.log("\nYour take-home pay each check will be $" + final_paycheck + ".\n");


