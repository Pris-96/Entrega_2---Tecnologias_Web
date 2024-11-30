//PUNTO 2: Función Cuenta
//Simulación de como el ordenador cuenta desde 0 hasta un número dado por el usuario

const readline = require("readline");

function cuenta(limite) {
    let resultado = `Su cuenta desde 0 hasta ${limite}:\n`;
    for (let i = 0; i <= limite; i++) {
        resultado += i + "\n";
    }
    return resultado;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingresa un número mayor o igual a 0: ", (input) => {
    let numero = parseInt(input);

    // Validación del número
    if (isNaN(numero) || numero < 0) {
        console.log("Por favor, ingresa un número válido mayor o igual a 0.");
    } else {
        // Uso de la función
        let resultado = cuenta(numero);
        console.log(resultado);
    }
    rl.close();
});
