// Pedir al usuario los ingredientes con un caja para introducir texto y asigno a las variables para mostrar en una lista
var ingrediente1 = prompt("Ingrese el primer ingrediente de la ensalada:");
var ingrediente2 = prompt("Ingrese el segundo ingrediente de la ensalada:");
var ingrediente3 = prompt("Ingrese el tercer ingrediente de la ensalada:");

// Muestro  los ingredientes con document.write()
document.write("<h2>Ingredientes de la ensalada:</h2>");
document.write("<ul>");
document.write("<li>" + ingrediente1 + "</li>");
document.write("<li>" + ingrediente2 + "</li>");
document.write("<li>" + ingrediente3 + "</li>");
document.write("</ul>");
