let obj = [{
    Name: "Niraj Khatiwada",
    Age: 23,
    Education: "Engineering"

},{ 
    Name: "Alish Khatiwada",
    Age: 23,
    Education: "Telecommunication"
}
]

const  [a,{Name: b}] = obj
console.log(b)