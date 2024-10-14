document.addEventListener("DOMContentLoaded", function() {
    // cambiar el color de fondo del documento con DOM
    document.body.style.backgroundColor = "#fcf79f";

    // color de todos los párrafos a verde (#0ca001)
    let parrafos = document.getElementsByTagName("p");
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "#0ca001";
    }

    // aumentar el tamaño de la fuente del elemento con id "destacado"
    document.getElementById("destacado").style.fontSize = "24px";

    // Cambiar la familia tipográfica de los títulos h2
    let titulos = document.getElementsByTagName("h2");
    for (let i = 0; i < titulos.length; i++) {
        titulos[i].style.fontFamily = "Arial, sans-serif";
    }

  //Crear un vínculo con la referencia "https://www.lipsum.com". con DOM
    let link = document.createElement("a");
    link.href = "https://www.lipsum.com";
    link.textContent = "Visita Lorem Ipsum";
    document.body.appendChild(link);
});
