#!/usr/bin/env node
import inquirer from "inquirer";
import { sum } from "./operations.js";
import { subtract } from "./operations.js";
import { multiply } from "./operations.js";
import { divide } from "./operations.js";
console.log("Project Calcualtor");
console.log("By Tariq");
let answer = await inquirer.prompt([
    {
        message: "Enter your first number",
        type: "number",
        name: "num1"
    },
    {
        message: "Enter your second number",
        type: "number",
        name: "num2"
    },
    {
        message: "Select Operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    }
]);
if (answer.operator === "+") {
    const result = sum(answer.num1, answer.num2);
    console.log(result);
}
if (answer.operator === "-") {
    const result = subtract(answer.num1, answer.num2);
    console.log(result);
}
if (answer.operator === "*") {
    const result = multiply(answer.num1, answer.num2);
    console.log(result);
}
if (answer.operator === "/") {
    const result = divide(answer.num1, answer.num2);
    console.log(result);
}
