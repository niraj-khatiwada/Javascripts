let array1 = ["Hello", "World", "From", "The", "Other", "Side"];


array1.forEach(function (n){
    console.log(n)
})

let numbers = [1,2,3,45,6]

function item(num){
    console.log(num)
}

numbers.forEach(item)


let lists = [
    {
        Name: "Niraj Khatiwada",
        Age: 23,
        Education: "Engineering"
    },
    {
        Name: "Alish Khatiwada",
        Age: 23,
        Education: "Telecom"
    },
    {
        Name: "Anav Katwal",
        Age: 23,
        Education: "Automation"
    }

]

lists.forEach(function (item, i){
    console.log(`${i} sasas ${item.Age}`)
})