const readlineSync = require("readline-sync");
const assignments = 3
const homework = 0.15
const quiz = 0.35
const test = 0.5
let homework1 = Number(readlineSync.question("\nEnter three homework grades.\n"));
let homework2 = Number(readlineSync.question(""));
let homework3 = Number(readlineSync.question(""));
let quiz1 = Number(readlineSync.question("\nEnter three quiz grades.\n"));
let quiz2 = Number(readlineSync.question(""));
let quiz3 = Number(readlineSync.question(""));
let test1 = Number(readlineSync.question("\nEnter three test grades.\n"));
let test2 = Number(readlineSync.question(""));
let test3 = Number(readlineSync.question(""));
let final_homework = (((homework1 + homework2 + homework3) / assignments) * homework);
let final_quiz = (((quiz1 + quiz2 + quiz3) / assignments) * quiz);
let final_test = (((test1 + test2 + test3) / assignments) * test);
let grade = (final_homework + final_quiz + final_test);
let final_grade = grade.toLocaleString ("en", {minimumFractionDigits:2, maximumFractionDigits:2});

console.log("\nYour marking period grade is " + final_grade + "%.\n");
