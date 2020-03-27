// let day = "Monday"
// switch (day) {
//     case "Monday":
//         console.log("Sunday")
//         break;
//     case 2:
//         console.log("Sunday")
//         break;
//     case 3:
//         console.log("Sunday")
//         break;
//     case 4:
//         console.log("Sunday")
//         break;
//     case 5:
//         console.log("Sunday")
//         break;
//     case "":
//         console.log("Friday")
//         break;
// }

// try{

//     (0 == true) ? (alert("True")) : (console.log(assa[0]))
// }

// catch{
//     alert("ajbsjb")
// }
// finally{
//     console.log("asas")
// }

// let name = "niraj"

// const list1 = ['a', 'b', 'c', 'd']
// const list2 = [4, 5000, 6 ]

// console.log(list2.sort((x, y) => (y-x)))



// const details = [{

//     name: "Niraj Khatiwada",
//     'age': 23},{

//         education: {
//             SLC: "asjhhbhjasb",
//             Plus2: "asjkbhjasbhj",
//             Bachelor: "dfghbdhfjcb"
//         }
//     }


// ]
// details.color = "white"
// details['age'] = 24
// console.log(details[0].name)


// const obj1 =  {
//     SLC: "asjhhbhjasb",
//     Plus2: "asjkbhjasbhj",
//     Bachelor: "dfghbdhfjcb"
// }

// const obj2 = obj1

// obj1 = {}

// obj2.SLC = 12
// console.log(obj2)
// console.log(obj1)

// let a = 1
// while (a > 0) {
//     a++
//     if (a===9){
//         break;
//     }
//     else if (a===6) {
//         continue;
//     }
//     console.log(a)
// }


const letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const input = "the quick brown fox jumps over the lazy dog";


for ( let i of input) {
    console.log(i)
    console.log(letters.includes(i))
    if (letters.includes(i)) {
        letters.splice(letters.indexOf(i), 1)
        console.log(letters)
    }
    
}
(letters.length === 0) ? console.log("Is panagram") : console.log("Is not a panagram");