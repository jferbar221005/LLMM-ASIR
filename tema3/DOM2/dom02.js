function agregarImagen() {
var imagen = document.createElement("img");
imagen.src = "https://www.w3schools.com/html/img_chania.jpg";
imagen.alt = "Imagen de ejemplo";
imagen.width = 300;
document.getElementById("miDiv").appendChild(imagen);
}