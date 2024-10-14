// Array de letras
var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

// Solicita al usuario que ingrese un número entre 0 y 25
var numero = parseInt(prompt("Ingresa un número entre 0 y 25:"));


// Verifica si el número es válido (entre 0 y 25)
if (numero < 0 || numero > 25) {
    alert("El número proporcionado no es válido");
} else {
    var letraUsuario = prompt("Ingresa una letra:").toUpperCase(); //pide letra solo si el número es  válido
    // Calcula la letra correspondiente al número 
    var letraCalculada = letras[numero];
    
    // Compara la letra
    if (letraCalculada === letraUsuario) {
        alert("¡Has ganado! El número y la letra coinciden.");
    } else {
        alert("Lo siento, has perdido. La letra no coincide.");
    }
}
