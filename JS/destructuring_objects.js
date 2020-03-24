let obj = {
    Name : "Niraj Khatiwada",
    Age: 23,
    Education: "Bachelor in Engineering"
}

const {Name, ...other} = obj;
console.log(Name, other) ;