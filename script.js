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

// const buttons = [];

// for (let i = 0; i <= 9; i++) {
//   buttons[i] = document.queryselector(".btn" + i);
// }

// DOM query selectors
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
const displayValue = document.querySelector(".display-value");
const clear = document.querySelector(".clear");

btn0.addEventListener("click", function () {
  displayValue.textContent += "0";
  if (operator === "") {
    num1 += "0";
  } else {
    num2 += "0";
  }
});

btn1.addEventListener("click", function () {
  displayValue.textContent += "1";

  if (operator === "") {
    num1 += "1";
  } else {
    num2 += "1";
  }
  console.log(num1, num2);
});

btn9.addEventListener("click", function () {
  displayValue.textContent += "9";
  if (operator === "") {
    num1 += "9";
  } else {
    num2 += "9";
  }
});

// BORDER
plus.addEventListener("click", function () {
  operator = "+";
  displayValue.textContent += "+";

  console.log(operator);
});

equals.addEventListener("click", function () {
  let result = operation(operator, num1, num1);
  displayValue.textContent = result;
  console.log(result);
  console.log(displayValue);
  // displayValue.textContent = undefined;
  // operator = undefined;
  [num1, num2] = "";
  operator = "";
  console.log(num1, num2);
});

// CLear button
clear.addEventListener("click", function () {
  displayValue.textContent = "";
  [num1, num2] = "";
  operator = "";
});
