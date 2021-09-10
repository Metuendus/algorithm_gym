let numbers = [1,2,3,4,5,6,7,8,10]
let left = 0
for (let i = 0; i < numbers.length; i++) {
    if (left+1 != numbers[i]) {
        console.log(left+1);
        break
    } else {
        left++;
    }
}
