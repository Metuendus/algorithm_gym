let numbers = 100

function isPrime(number) {
    let counter = 0
    for(let i = 1; i <= number; i++){
        if (number%i == 0) {
            counter++
        }
    }
    if (counter == 2) {
        return true
    }else{
        return false
    }
}

function printPrimes(n){
    for(let i = 1; i <= n; i++){
        if (isPrime(i) == true) {
            console.log(i)
        }
    }
}

printPrimes(numbers)