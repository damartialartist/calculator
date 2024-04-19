let text = "";
let tag;
let input = "";
let operators = ["+","-","/","x","Enter","Clear"]
const calc = {
    input: [],
    output: 0,
    operator: "",
    calculate: function() {
        this.input[0] = Number(this.input[0]);
        this.input[1] = Number(this.input[1]);
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
    },
    clearCalc: function() {
        this.input = [];
        this.output = "";
        this.operator = "";
    }
}

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
let ans;
const display = document.querySelector(".display h1");
    btns.addEventListener("click", (event) => {
        input = event.target.textContent;
        if (event.target.tagName === "BUTTON") {
            if(!operators.includes(input)) {
                number += event.target.textContent;
                display.textContent = number;
                calc.input[1] = number;
            } else {
                number = "";
                switch (input) {
                    case "Enter":
                        calc.calculate();
                        display.textContent = calc.output;
                    break;
                    case "Clear":
                        calc.clearCalc();
                        display.textContent = "0";
                    break;
                    default: 
                        if (isNaN(calc.input[0])) {
                            calc.input[0] = calc.input[1];
                            calc.input[1] = "";
                        } else {
                            calc.calculate();
                            calc.input[0] = calc.output;
                            calc.input[1] = "";
                        }
                        calc.operator = input;
                }
            }
        }
        console.log(calc);
    });




})