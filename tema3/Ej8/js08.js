let display = document.getElementById('display');
let currentInput = '';

function appendValue(value) {
if (display.innerText === '0' && value !== '.') {
currentInput = '';
}
currentInput += value;
display.innerText = currentInput;
}

function clearDisplay() {
currentInput = '';
display.innerText = '0';
}

function calculateResult() {
try {
let result = eval(currentInput);
display.innerText = result;
currentInput = result.toString();
} catch (e) {
display.innerText = 'Error';
currentInput = '';
}
}