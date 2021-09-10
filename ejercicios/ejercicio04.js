/*
# Ejercicio04
TODO: Encontrar los primos entre 1 y el numero más grande del arreglo
*/
let numbers = [12, 42, 13, 65, 16];

// Solución 1: Agrregando Math.max(...) para extraer el numero máximo del array
let numbers = [12, 42, 13, 65, 16];

function isPrime(number) {
    let counter = 0
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            counter++
        }
    }
    if (counter == 2) {
        return true
    } else {
        return false
    }
}

function printPrimes(n) {
    let m = Math.max(...numbers)
    for (let i = 1; i <= m; i++) {
        if (isPrime(i) == true) {
            console.log(i)
        }
    }
}
printPrimes(numbers)

// Solución 2: Ordernar los elementos del array de forma descendente y seleccionar el primero
let numbers = [12, 42, 13, 65, 16];
numbers.sort(function (a, b) { return b - a });

function isPrime(number) {
    let counter = 0
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            counter++
        }
    }
    if (counter == 2) {
        return true
    } else {
        return false
    }
}

function printPrimes(n) {
    let s = n.sort(function (a, b) { return b - a });
    for (let i = 1; i <= s[0]; i++) {
        if (isPrime(i) == true) {
            console.log(i)
        }
    }
}
printPrimes(numbers)