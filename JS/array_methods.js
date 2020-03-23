// Arrays are referenced data types
let a = [1,2, "Hello", "Wolrd", "end", true, null ,undefined, NaN];
let b = [3,4,5,6];

b = a;
a.push(13)
console.log(b);

//Primitaive datattypes are stored in value memory 
let a = 13;
b = a;
a = 14
console.log(b)