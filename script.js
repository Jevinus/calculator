// Operator methods for calculator functionality
const operators = {
  add: function (num1, num2) {
    return num1 + num2;
  },
  subtract: function (num1, num2) {
    return num1 - num2;
  },
  multiply: function (num1, num2) {
    return num1 * num2;
  },
  divide: function (num1, num2) {
    return num1 / num2;
  },
  modulate: function (num1, num2) {
    return num1 % num2;
  },
};

let display;
let num1 = "";
let num2 = "";
let operator = "";

// Create variable to store extended calculations

// Intakes calculator input and returns a value
function operation(operator, num1, num2) {
  Number(num1, num2);
  switch (operator) {
    case "+":
      return operators.add(num1, num2);
    case "-":
      return operators.subtract(num1, num2);
    case "*":
      return operators.multiply(num1, num2);
    case "/":
      return operators.divide(num1, num2);
    case "%":
      return operators.modulate(num1, num2);
    default:
      alert("Invalid operator");
  }
}

// DOM query selectors
const buttons = document.querySelector(".num");
const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
const divide = document.querySelector(".divide");
const multiply = document.querySelector(".multiply");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const equals = document.querySelector(".equals");
const modulo = document.querySelector(".modulo");
const displayValue = document.querySelector(".display-value");
const clear = document.querySelector(".clear");

// REPLACEMENT CODE BELOW THIS LINE
function numberInput(num) {
  if (operator === "") {
    num1 = `${num}`;
    displayValue.textContent = String(num1);
  } else {
    num2 = `${num}`;
    displayValue.textContent += String(num2);
  }
}

buttons.addEventListener("click", numberInput);

// REPLACEMENT CODE ABOVE THIS LINE
// Zero
btn0.addEventListener("click", function () {
  if (operator === "") {
    num1 = 0;
    displayValue.textContent = String(num1);
  } else {
    num2 = 0;
    displayValue.textContent += String(num2);
  }
});

// One
btn1.addEventListener("click", function () {
  if (operator === "") {
    num1 = 1;
    displayValue.textContent = String(num1);
  } else {
    num2 = 1;
    displayValue.textContent += String(num2);
  }
});

// Two
btn2.addEventListener("click", function () {
  if (operator === "") {
    num1 = 2;
    displayValue.textContent = String(num1);
  } else {
    num2 = 2;
    displayValue.textContent += String(num2);
  }
});

// Three
btn3.addEventListener("click", function () {
  if (operator === "") {
    num1 = 3;
    displayValue.textContent = String(num1);
  } else {
    num2 = 3;
    displayValue.textContent += String(num2);
  }
});

// Four
btn4.addEventListener("click", function () {
  if (operator === "") {
    num1 = 4;
    displayValue.textContent = String(num1);
  } else {
    num2 = 4;
    displayValue.textContent += String(num2);
  }
});

btn9.addEventListener("click", function () {
  if (operator === "") {
    num1 = 9;
    displayValue.textContent = String(num1);
  } else {
    num2 = 9;
    displayValue.textContent += String(num2);
  }
});

// Plus button
plus.addEventListener("click", function () {
  operator = "+";
  displayValue.textContent += "+";
});

// Subtraction button
minus.addEventListener("click", function () {
  operator = "-";
  displayValue.textContent += "-";
});

// Multiplication button
multiply.addEventListener("click", function () {
  operator = "*";
  displayValue.textContent += "x";
});

// Divide button
divide.addEventListener("click", function () {
  operator = "/";
  displayValue.textContent += "/";
});

// Modulate button
modulo.addEventListener("click", function () {
  operator = "%";
  displayValue.textContent += "%";
});

// Calls the operation function using the operator variable value
equals.addEventListener("click", function () {
  let result = operation(operator, num1, num1);
  displayValue.textContent = result;
  [num1, num2] = "";
  operator = "";
});

// CLear button
clear.addEventListener("click", function () {
  displayValue.textContent = "";
  [num1, num2] = "";
  operator = "";
});

// const themeButton = document.getElementById("theme");
// themeButton.addEventListener("click", function () {
//   if (document.querySelector("#buttons").style)
// });
