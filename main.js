const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function calculator(num1, num2, operator) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "x") return multiply(num1, num2);
    if (operator === "÷") return divide(num1, num2);
}

// // KEYBOARD INPUT
const displayInput = document.querySelector(".display");
displayInput.addEventListener("keypress", function (e) {
    let span = document.createElement("span");
    operatorList = ["+", "-", "x", "/"];
    if (operatorList.includes(e.key)) {
        span.classList.add("operator");
    }
    if (e.key === "/") {
        displayInput.appendChild(span).innerText = "÷";
    } else {
        displayInput.appendChild(span).innerText = e.key;
    }
});

// NUMBER BUTTONS
const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "0";
    displayInput.value += "0";
});

const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "1";
    displayInput.value += "1";
});

const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "2";
    displayInput.value += "2";
});

const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "3";
    displayInput.value += "3";
});

const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "4";
    displayInput.value += "4";
});

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "5";
    displayInput.value += "5";
});

const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "6";
    displayInput.value += "6";
});

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "7";
    displayInput.value += "7";
});

const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "8";
    displayInput.value += "8";
});

const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayInput.appendChild(span).innerText = "9";
    displayInput.value += "9";
});

// OPERATION BUTTONS
const addButton = document.querySelector("#add");
addButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayInput.appendChild(span).innerText = " + ";
    displayInput.value += "+";
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayInput.appendChild(span).innerText = " - ";
    displayInput.value += "-";
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayInput.appendChild(span).innerText = " x ";
    displayInput.value += "x";
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayInput.appendChild(span).innerText = " ÷ ";
    displayInput.value += "÷";
});

// INITIALIZES CALCULATION
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", function (e) {
    let processedString = displayInput.textContent.split(" ");
    let total = 0;
    while (processedString.length > 1) {
        total = calculator(
            Number(processedString[0]),
            Number(processedString[2]),
            processedString[1]
        );
        processedString.splice(0, 2);
        processedString[0] = total;
    }
    // adds total to display view
    displayInput.value = total;
});

// CLEARS CALCULATION
const clearButton = document.querySelector("#clear");
const clear = clearButton.addEventListener("click", function (e) {
    // removes display divs
    while (displayInput.hasChildNodes()) {
        displayInput.removeChild(displayInput.children[0]);
    }
    // clears display view
    displayInput.value = "";
});
