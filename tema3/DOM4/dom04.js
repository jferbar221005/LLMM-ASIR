console.log("Título de la página:");
console.log(document.title);

console.log("\nImágenes de la página:");
var imagenes = document.images;
for (var i = 0; i < imagenes.length; i++) {
    console.log((i+1) + ". " + imagenes[i].src);
}

console.log("\nEnlaces de la página:");
var enlaces = document.links;
for (var j = 0; j < enlaces.length; j++) {
    console.log((j+1) + ". " + enlaces[j].href);
}
