const displayEquationDiv = document.querySelector(".display-equation");
const displayTotalDiv = document.querySelector(".display-total");

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function calculator(num1, num2, operator) {
    if (operator === "+") return add(num1, num2);
    if (operator === "-") return subtract(num1, num2);
    if (operator === "×") return multiply(num1, num2);
    if (operator === "÷") return divide(num1, num2);
}

// // KEYBOARD INPUT
document.addEventListener("keypress", function (e) {
    let span = document.createElement("span");
    operatorList = ["+", "-", "x", "/"];
    if (operatorList.includes(e.key)) {
        span.classList.add("operator");
        if (e.key === "/") {
            displayEquationDiv.appendChild(span).innerText = " ÷ ";
            displayEquationDiv.value += "÷";
        } else if (e.key === "x") {
            displayEquationDiv.appendChild(span).innerText = " × ";
            displayEquationDiv.value += "×";
        } else {
            displayEquationDiv.appendChild(span).innerText = ` ${e.key} `;
            displayEquationDiv.value += e.key;
        }
    } else {
        displayEquationDiv.appendChild(span).innerText = e.key;
        displayEquationDiv.value += e.key;
    }
});

// NUMBER BUTTONS
const decimalButton = document.querySelector("#decimal");
decimalButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = ".";
    displayEquationDiv.value += ".";
});

const zeroButton = document.querySelector("#zero");
zeroButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "0";
    displayEquationDiv.value += "0";
});

const oneButton = document.querySelector("#one");
oneButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "1";
    displayEquationDiv.value += "1";
});

const twoButton = document.querySelector("#two");
twoButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "2";
    displayEquationDiv.value += "2";
});

const threeButton = document.querySelector("#three");
threeButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "3";
    displayEquationDiv.value += "3";
});

const fourButton = document.querySelector("#four");
fourButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "4";
    displayEquationDiv.value += "4";
});

const fiveButton = document.querySelector("#five");
fiveButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "5";
    displayEquationDiv.value += "5";
});

const sixButton = document.querySelector("#six");
sixButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "6";
    displayEquationDiv.value += "6";
});

const sevenButton = document.querySelector("#seven");
sevenButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "7";
    displayEquationDiv.value += "7";
});

const eightButton = document.querySelector("#eight");
eightButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "8";
    displayEquationDiv.value += "8";
});

const nineButton = document.querySelector("#nine");
nineButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    displayEquationDiv.appendChild(span).innerText = "9";
    displayEquationDiv.value += "9";
});

// OPERATION BUTTONS
const addButton = document.querySelector("#add");
addButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayEquationDiv.appendChild(span).innerText = " + ";
    displayEquationDiv.value += "+";
});

const subtractButton = document.querySelector("#subtract");
subtractButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayEquationDiv.appendChild(span).innerText = " - ";
    displayEquationDiv.value += "-";
});

const multiplyButton = document.querySelector("#multiply");
multiplyButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayEquationDiv.appendChild(span).innerText = " × ";
    displayEquationDiv.value += "×";
});

const divideButton = document.querySelector("#divide");
divideButton.addEventListener("click", function (e) {
    let span = document.createElement("span");
    span.classList.add("operator");
    displayEquationDiv.appendChild(span).innerText = " ÷ ";
    displayEquationDiv.value += "÷";
});

// INITIALIZES CALCULATION
const equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", function (e) {
    let processedString = displayEquationDiv.textContent.split(" ");
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
    displayTotalDiv.innerText = total;
});

// CLEARS CALCULATION
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function (e) {
    // removes display divs
    while (displayEquationDiv.hasChildNodes()) {
        displayEquationDiv.removeChild(displayEquationDiv.children[0]);
    }
    // clears display view
    displayTotalDiv.innerText = "";
});

// DELETES LAST ENTRY
const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", function (e) {
    displayEquationDiv.removeChild(displayEquationDiv.lastChild);
});
