const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnvalue) => {
    if (btnvalue === "=" && output !== "") {
        //if output has '%',replace with /100 before evaluting.
        output = eval(output.replace("%", "/100"));
    } else if (btnvalue === "AC") {
        output = ""

    }
    else if (btnvalue === "DEl") {
        //if del button is clicked,remove the last character from the output.
        output = output.toString().slice(0, -1);
    }
    else{
        if(output==="" && specialChars.includes(btnvalue)) return;
        output += btnvalue;
    }


    display.value = output;

};

//Addevent listener to buttons,call calulate() on click
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
})