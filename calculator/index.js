// caluclator program

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);  // Ensure it evaluates the display value
    } catch (error) {
        display.value = "Error";
    }
}




