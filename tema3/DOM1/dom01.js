function mostrarParrafos() {
var parrafos = document.getElementsByTagName('p');
var contenido = "";
for (var i = 0; i < parrafos.length; i++) {
    contenido += parrafos[i].textContent + "<br>";
}
document.getElementById('resultado').innerHTML = contenido;
}