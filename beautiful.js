let mode ='primary';


function toggleShift(){
    if (mode=== 'primary'){
        mode = 'secondary';
    }else if(mode== 'seconday'){
        mode== 'tertiary';
    }else{
        mode = 'primary';
    }
    console.log('Mode:', mode);
}



// Helper function to update the display
function updateDisplay(value) {
    const display = document.getElementById('result');
    display.value = value;
}

// Function to append number to the display
function appendNumbert(number) {
    const display = document.getElementById('result');
    display.value += number;
}

// Function to append parenthesis
function appendParenthesis(parenthesis) {
    const display = document.getElementById('result');
    display.value += parenthesis;
}

// Function to append decimal point
function appendDecimal() {
    const display = document.getElementById('result');
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

// Function to append braces
function appendBrace(brace) {
    const display = document.getElementById('result');
    display.value += brace;
}

// Function to append brackets
function appendBracket(bracket) {
    const display = document.getElementById('result');
    display.value += bracket;
}

// Function to handle setting operations
function setOperation(operation) {
    const display = document.getElementById('result');
    display.value += ` ${operation} `;
}

// Function to clear all input
function clearAll() {
    const display = document.getElementById('result');
    display.value = '';
}

// Function to delete the last character
function deleteAll() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

// Function to handle special functions
function performFunction(func) {
    const display = document.getElementById('result');
    switch (func) {
        case 'sqrt':
            display.value += '√(';
            break;
        case 'X^-1':
            display.value += '^( -1 )';
            break;
        // Add cases for other special functions
        default:
            display.value += ` ${func} `;
    }
}

// Function to handle memory functions
function performMemoryFunction(func) {
    const display = document.getElementById('result');
    display.value += ` ${func} `;
}

// Function to toggle shift (dummy function for this example)
function toggleShift() {
    console.log('SHIFT toggled');
}

// Function to calculate the result
function calculate() {
    const display = document.getElementById('result');
    try {
        // Evaluate the expression (note: this is a basic implementation, real-world usage should sanitize the input to prevent code injection)
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to provide the answer
function answerAll() {
    const display = document.getElementById('result');
    display.value += ' Ans ';
}

// Function to append constants
function appendConstant(constant) {
    const display = document.getElementById('result');
    display.value += constant;
}

// Event listener for the time display
function updateTime() {
    const timeInput = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    timeInput.value = `${hours}:${minutes}`;
}

// Update the time display every minute
setInterval(updateTime, 60000);
updateTime();










// function display(val){

//     document.getElementById('result').value += val

//     return val

// }


// function solve(){

//     let x = document.getElementById('result').value

//     let y = eval(x);

//     document.getElementById('result').value = y

//     return y

// }


// function clearScreen(){

//     document.getElementById('result').value = ''

// }