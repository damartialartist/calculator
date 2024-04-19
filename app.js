let text = "";
let input = "";
let operators = ["+", "-", "/", "x", "Enter", "Clear"];

const calc = {
  input: [],
  output: 0,
  operator: "",
  calculate: function () {
    this.input = this.input.map((str) => {
      if (!isNaN(str)) {
        str = str.toString();
      }
      if (str.startsWith("neg")) {
        return parseInt(str.slice(3) * -1);
      } else {
        return parseInt(str);
      }
    });

    switch (this.operator) {
      case "+":
        this.output = this.input[0] + this.input[1];
        break;
      case "-":
        this.output = this.input[0] - this.input[1];
        break;
      case "/":
        this.output = this.input[0] / this.input[1];
        break;
      case "x":
        this.output = this.input[0] * this.input[1];
        break;
      default:
    }

    this.output = Number(this.output).toFixed(2);
  },

  clearCalc: function () {
    this.input = [];
    this.output = "";
    this.operator = "";
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelector("div.container");

  btns.addEventListener("mousedown", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.style.backgroundColor = "black";
      event.target.style.color = "white";
    }
  });

  btns.addEventListener("mouseup", (event) => {
    if (event.target.tagName === "BUTTON") {
      event.target.style.backgroundColor = "white";
      event.target.style.color = "black";
    }
  });
  let number = "";
  const display = document.querySelector(".display h1");
  const op = document.querySelector(".op p");
  btns.addEventListener("click", (event) => {
    input = event.target.textContent;
    if (event.target.tagName === "BUTTON") {
      if (!operators.includes(input)) {
        if (calc.operator === "") {
          calc.clearCalc();
        }
        if (!(input === "." && number.includes("."))) {
          number += event.target.textContent;
        }
        display.textContent = number;
        calc.input[1] = number;
      } else {
        number = "";
        switch (input) {
          case "Enter":
            calc.calculate();
            display.textContent = calc.output;
            op.textContent = "";
            calc.operator = "";

            break;
          case "Clear":
            calc.clearCalc();
            op.textContent = "";
            display.textContent = "0";
            break;
          default:
            if (isNaN(calc.input[0])) {
              calc.input[0] = calc.input[1];
              calc.input[1] = "";
            } else {
              calc.calculate();
              calc.operator = "";
              calc.input[0] = calc.output;
              calc.input[1] = "";
            }
            calc.operator = input;
            op.textContent = input;
        }
      }
    }
    console.log(calc);
  });
});
