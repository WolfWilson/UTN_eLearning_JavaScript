function calcularIVA() {
    let numero = prompt("Por favor, ingresa un número:");
    let num = parseFloat(numero); //l valor ingresado a un número flotante

    if (isNaN(num)) {
        alert("Por favor ingresa un número válido.");
        return;
    }

    let iva = num * 0.21; // calcula el IVA (21%)
    let total_IVA = num + iva; 

    //muestra el resultado en el elemento <p> con id="resultado"
    document.getElementById("resultado").innerHTML = `
        <p>Valor sin IVA: $${num.toFixed(2)}</p>
        <p>Valor con IVA: $${total_IVA.toFixed(2)}</p>
    `;
}
