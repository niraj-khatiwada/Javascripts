let array1 = [1, 2, 3, 4, 5];
let sum = 0;
function avg(array1){
    for (let i in array1) sum += array1[i];
    return sum  / array1.length;
}

console.log(avg(array1));