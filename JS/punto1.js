// PUNTO 1: Función Permuta
// Permuta los valores de dos variables enteras que se rellenaron en la función principal.

const readline = require("readline");

function permuta(a, b) {
    let temp = a;
    a = b;
    b = temp;
    return [a, b];
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el primer número: ", (valor1) => {
    rl.question("Ingrese el segundo número: ", (valor2) => {
        let num1 = parseInt(valor1);
        let num2 = parseInt(valor2);

        if (isNaN(num1) || isNaN(num2)) {
            console.log("Por favor, ingrese dos números válidos.");
        } else {
            let resultado = permuta(num1, num2);
            console.log(
                `Valores después de la permuta: Valor 1 = ${resultado[0]}, Valor 2 = ${resultado[1]}`
            );
        }
        rl.close();
    });
});
