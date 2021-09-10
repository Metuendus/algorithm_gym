// //Ejercicio: imprimir la matriz en forma de caracol
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