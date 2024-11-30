//PUNTO 3: Función determinarSigno
//Determinar si un número ingresado por el usuario es positivo, negativo o nulo

const readline = require("readline");

function determinarSigno(numero) {
    if (numero > 0) {
        return "El número es positivo.";
    } else if (numero < 0) {
        return "El número es negativo.";
    } else {
        return "El número es nulo.";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingresa un número para determinar su signo: ", (input) => {
    let numero = parseFloat(input);

    // Validación de entrada
    if (isNaN(numero)) {
        console.log("Por favor, ingresa un número válido.");
    } else {
        // Uso de la función
        let mensaje = determinarSigno(numero);
        console.log(mensaje);
    }
    rl.close();
});
