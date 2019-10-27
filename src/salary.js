const readlineSync = require("readline-sync");

const fed_income = 0.157
const state_income = 0.0447
const ss = 0.062
const med = 0.0145
const paycheck_times = 24
const fourOoneK = 0.93

let annual_salary = Number(readlineSync.question("\nAnnual salary: "));
let paycheck = (annual_salary / paycheck_times);
let contribution = (paycheck * fourOoneK);
let pre_tax = (paycheck - contribution);
let fed = (pre_tax * fed_income);
let state = (pre_tax * state_income);
let social = (pre_tax * ss);
let medical = (pre_tax * med);
let final_paid = (fed + state + social + medical);
let final_paycheck = final_paid.toLocaleString ("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nYour take-home pay each check will be $" + final_paycheck + ".\n");

