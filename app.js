let text;
let input = [];
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

    btns.addEventListener("click", (event) => {
        console.log(event.target.tagName)
        if (event.target.tagName === "BUTTON") {
        text = event.target.textContent;
        console.log(text);
        }
    });
})