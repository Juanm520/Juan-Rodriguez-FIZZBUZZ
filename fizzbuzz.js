const prompt = require("prompt-sync")();

// Inicia ejercicio FizzBuzz

// Limite para el FIZZBUZZ
let limite = 0
do {
    limite = Number(prompt("Ingrese el numero maximo para FIZZBUZZ (Mayor a 1 y Menor a 50): "))
    } while ( limite < 1 || limite > 50);

//Iteración para FIZZBUZZ
for (let numero = 1; numero <= limite; numero++) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FIZZBUZZ");
    } else if (numero % 3 === 0) {
        console.log("FIZZ");
    } else if (numero % 5 === 0) {
        console.log("BUZZ");
    } else {
        console.log(numero);
    }
}
