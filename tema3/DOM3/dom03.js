function borrarPrimerElemento() {
var lista = document.getElementById("miLista");
if (lista.hasChildNodes()) {
    lista.removeChild(lista.firstElementChild);
}
}