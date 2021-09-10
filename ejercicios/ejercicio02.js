let numbers = [23,13,10,8,7,15]

for(let i = 0; i < numbers.length; i++){
    if (numbers[i]%2 == 0) {
        console.log("par:",numbers[i])
    }else {
        console.log("impar: ", numbers[i])
    }
}