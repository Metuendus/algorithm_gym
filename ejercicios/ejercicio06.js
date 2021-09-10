//Ejercicio: Obetener los diagonales de la siguiente matriz
let matriz = [
    [1, 2, 3, 4],
    [2, 5, 1, 3],
    [6, 2, 6, 1],
    [4, 6, 1, 5]
]

function diagonales() {
    let contador = 0;
    for (let row = 0; row < matriz.length; row++) {
        for (let col = 0; col < matriz[row].length; col++) {
            let element = matriz[contador][contador];
            contador++;
            console.log(element)
        };
    }
}
diagonales()


// Solución
let matriz = [
    [1, 2, 3, 4],
    [2, 5, 1, 3],
    [6, 2, 6, 1],
    [4, 6, 1, 5]
]

function diagonales() {
    for (let i = 0, j = matriz.length - 1; i < matriz.length; i++, j--) {
        console.log("D1", matriz[i][i]);
        console.log("D2", matriz[i][j]);
    }
}
diagonales()