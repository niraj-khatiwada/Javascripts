const array1 = [1, 2, 3, 4, 5]
//Map
const array2 = array1.map(function (num){
    return {
        Even: num % 2 ==0
    };
})

console.log(array2);

//Reduce
const array3 = array1.reduce(function (num1, num2){
    return (num1+num2);
})
console.log(array3);

//Filter
const array4 = array1.filter(function (num){
    return num % 2 == 0;
})

console.log(array4)