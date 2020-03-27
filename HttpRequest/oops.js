// const student = function (name, roll, gen) {
//     details = {}
//     details.name = name
//     details.roll = roll
//     details.gen = gen

//     const printDetails = () =>  {
//         console.log(`${name} of roll number ${roll} is ${gen}`)
//     }
// }



// const Student = function (name, roll, gen) {
//     this.name = name
//     this.roll = roll
//     this.gen = gen  
// }

// // Student.prototype.printDetails
// const obj =new Student("Niraj Khatiwada", 13, "Male")

// Student.prototype.printDetails = function () {
//     console.log(`${this.name} of roll number ${this.roll} is ${this.gen}`)
// }

// obj.printDetails()


class Student {
    constructor() {
        
    }

    printDetails (name, roll, gen) {
        console.log(`${name} of roll number %${roll} is ${gen}`)
    }
}


const niraj = new Student()
niraj.printDetails("Niraj Khatiwada", 13, "Male")