// Declarando variables para las operaciones matemáticas
let num1 = 10;
let num2 = 5;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

// Mostrando los resultados de las operaciones en el HTML
document.getElementById('suma').textContent = `La suma de ${num1} y ${num2} es: ${suma}`;
document.getElementById('resta').textContent = `La resta de ${num1} y ${num2} es: ${resta}`;
document.getElementById('multiplicacion').textContent = `La multiplicación de ${num1} y ${num2} es: ${multiplicacion}`;
document.getElementById('division').textContent = `La división de ${num1} entre ${num2} es: ${division}`;

// Declarando un array con títulos de películas y sus respectivos pósters en la carpeta local
let peliculas = [
    { titulo: 'Matrix', imagen: './posters/matrix-poster.jpg' },
    { titulo: 'Eterno Resplandor de una Mente sin Recuerdos', imagen: './posters/eternall-poster.webp' },
    { titulo: 'El Señor de los Anillos(Trilogia)', imagen: './posters/lord-poster.jpg' },
    { titulo: 'The Thing', imagen: './posters/thething-poster.jpg' },
    { titulo: 'Aliens: El Regreso', imagen: './posters/aliens-poster.jpg' }
];

// Ordenando el array alfabéticamente por el título
peliculas.sort((a, b) => a.titulo.localeCompare(b.titulo));

// Usando un bucle para mostrar las películas y sus pósters en el HTML
let listaPeliculas = document.getElementById('lista-peliculas');
peliculas.forEach(function(pelicula) {
    let li = document.createElement('li');

    // Creando un elemento <img> para el póster
    let img = document.createElement('img');
    img.src = pelicula.imagen;
    img.alt = `Póster de ${pelicula.titulo}`;
    img.style.width = '100px'; // Ajusta el tamaño según tus preferencias
    img.style.borderRadius = '10px';
    img.style.marginRight = '10px';

    //  <span> para el título
    let span = document.createElement('span');
    span.textContent = pelicula.titulo;

    // Agregando la imagen y el título al <li>
    li.appendChild(img);
    li.appendChild(span);

    //  <li> al <ul> de películas
    listaPeliculas.appendChild(li);
});
