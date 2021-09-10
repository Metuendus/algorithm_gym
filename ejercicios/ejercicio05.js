let array_1 = [6, 2, 8, 3, 6]
let array_2 = [1, 3, 7, 2, 4]
//             7 6 5 6 0
//casos tricky: puros 0, 19999

function sumArrays(array_1, array_2) {
    /* 
    Aprox 1
    1. Convertir array_1 y 2 a string
    2. quitar comas
    3. pasarlo a entero
    4. sumar 
    */
    let a = array_1.toString().replace(/[,]/g, '');
    let b = array_2.toString().replace(/[,]/g, '');
    return parseInt(a) + parseInt(b)
}
let print = sumArrays(array_1, array_2)
console.log(print)


let array_1 = [6, 2, 8, 3, 6]
let array_2 = [1, 3, 7, 2, 4]
function sumArrays2(array_1, array_2) {
    /*
    Aprox 3
    1. Elevar a la potencia de cada posición
    2. Sumar los resultados
    */
    let num1 = 0;
    let num2 = 0;
    let potencia = 0;
    for (let i = array_1.length - 1; i >= 0; i--) {
        num1 += array_1[i] * (Math.pow(10, potencia))
        num2 += array_2[i] * (Math.pow(10, potencia))
        potencia++
    }
    return num1 + num2
}
let print2 = sumArrays2(array_1, array_2)
console.log(print2)



let array_1 = [6, 2, 8, 3, 6]
let array_2 = [1, 3, 7, 2, 4]
function sumArrays3(array_1, array_2) {
    /*
    Aprox 2
    1. Sumar los valores del final de cada array
    2. Guardar en la variable el carry
    3. Iterar en cada posición 
    4. Al final sumar el carry
    */
    for (let i = array_1.length - 1; i >= 0; i--) {
        (num1 += array_1[i]);
        (num2 += array_2[i]);
        potencia++
    }
}
let print3 = sumArrays3(array_1, array_2)
console.log(print3)


