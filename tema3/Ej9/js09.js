function fToC() {
let f = document.getElementById("tbf").value;
let c = toCelsius(f);
document.getElementById("tbc").value = c;
}

function cToF() {
let c = document.getElementById("tbc").value;
let f = toFahrenheit(c);
document.getElementById("tbf").value = f;
}

function toCelsius(f) {
return ((parseFloat(f) - 32) * 5/9).toFixed(2);
}

function toFahrenheit(c) {
return ((parseFloat(c) * 9/5) + 32).toFixed(2);
}