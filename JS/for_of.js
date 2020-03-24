// let array1 = ["Apple", "Orange", "Banana"]

// for (let i of array1[0]){
//     console.log(i)
// }


let array1={
    Name: "Niraj Khatiwada",
    Age : 23,
    "Height in feet": `5'9"`
};

for (let i of Object.keys(array1)){
    console.log(i, array1[i])
};

