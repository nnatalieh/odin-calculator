const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

function calculator(num1, num2, operator) {
    if (operator === "+") return add(num1, num2)
    if (operator === "-") return subtract(num1, num2)
    if (operator === "*") return multiple(num1, num2)
    if (operator === "/") return divide(num1, num2)
}