function mostrarValores() {
    var texto = document.getElementById("inputText").value;
    var numero = document.getElementById("inputNumber").value;
    document.getElementById("demo").innerHTML = 
        "Texto: " + texto + "<br>Número: " + numero;
}