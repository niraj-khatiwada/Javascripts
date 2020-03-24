const add = function (x, y){
    return x+y;
}
const subtract = function (x, y){
    return x-y;
}
const multiply = function (x, y){
    return x*y;
}
const divide = function (x, y){
    return x/y;
}
const avg = function (a){
    return a/2
}
let array1 = [add, subtract, multiply, divide];

// for (let i of array1) console.log(i(3, 2))

const obj = {
    Add: add(3, 2),
    Subtract: subtract(3, 2),
    Multiply: multiply(3, 2),
    Divide: divide(3, 2),
    Average: avg(add(3,2))
}

console.log(obj);