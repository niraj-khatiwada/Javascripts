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


// const letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// const input = "the quick brown fox jumps over the lazy dog";


// for ( let i of input) {
//     console.log(i)
//     console.log(letters.includes(i))
//     if (letters.includes(i)) {
//         letters.splice(letters.indexOf(i), 1)
//         console.log(letters)
//     }

// }
// (letters.length === 0) ? console.log("Is panagram") : console.log("Is not a panagram"); 


// const val = function () {
//     const p = "asjbajhsb"
// }


// let name = "asjbahsb"
// let name = "ajdbhjbbahbhj"



// function color(x) {
//     return function(n) {
//         return x*n
//     }
// }

// const color_ = color(3)
// console.log(color_(2)) 
// console.log(a)
// const a; 
// let a = 2


// const array = 

// const array = [1, 2, 3, 4, 5, 100, 6]

// array2 = array.forEach((value, index, array) => {
//     return value**2
// })


// array2 = array.map((value, index) => {
//     return {name: value}
// })
// console.log(array2)



// array2 = array.filter((value) => (
//     value%2 ===0
//     ))
// console.log(array2)


// array2 = array.some((value) => (
//     value%2 ===0
//     ))
// console.log(array2)

// a = array.reduce((preVal, currVal) => {
//     return Math.min(preVal, currVal)
// })

// console.log(a)

// const votes = ['y', 'y', 'n', 'n', 'y', 'n', 'y', 'y', 'y', 'n', 'n', 'y', 'n']

// const results = votes.reduce((preVal, currVal) => {
//     (preVal[currVal]) ? preVal[currVal]++ : (preVal[currVal] = 1);
//     return preVal
// }, {})

// console.log(results)



// const results = books.reduce((preVal, currVal) => {
//     const rating =Math.floor(currVal.rating)
//     if (preVal[rating]){
//         preVal[rating].push(currVal)
//     }
//     else{
//         preVal[rating] = []
//     }
//     return preVal
// }, {})

// console.log(results)

// console.log(array.sort((x, y) => {
//     return x-y
// }))

// const sorted = arr.reduce((preVal, currVal) => {
//     if (preVal.length === 0){
//         preVal.push(currVal)
//     }
//     else{
//         if (preVal[preVal.length - 1] > currVal){
//             arr.splice(arr.indexOf(preVal), 1, preVal)
//         }

//     }
//     return preVal
// }, [])

// console.log(sorted)

//[100]1

// const arr3 = [[1, 2 ,3], 
//             [4, 5 ,6], 
//             [7,8, 9]]
// // const afunc = function (...arr) {
// //    return  
// // }



// console.log()

// const bla = function (a,b,c,d) {
//     console.log(a,b,c,d)
// }

// console.log(...'niraj')



// const name2 = {4: "one", 5: "two", 6: "three"}

// // console.log({...name, 4: "four", ...name2})



// const name3 = {
//     1: {...name}
// }

// console.log({arr})


//preVal = {},  [1, 2, 3]
// const rest = function (...nums) {
//     return nums.reduce((preVal, currVal) => {
//         if (!preVal[currVal]){
//             preVal[currVal]= currVal
//         }
//       return preVal

//     }, {})

// }

// console.log(rest(1,2, 3, 1))

// const name = { one: "one", two: "two", three: "three" }


// const arr = [100, 1, 24, 15, 10, 2, 5, 23, 1, 0, 19]



// function name(a, b, ...num){
//     console.log(a, b)
//     console.log(num)
// }


// const books = [{
//     title: 'Good Omens',
//     authors: ['Terry Pratchett', 'Neil Gaiman'],
//     rating: 4.25,
//     genres: ['fiction', 'fantasy']
// },
// {
//     title: 'Changing My Mind',
//     authors: ['Zadie Smith'],
//     rating: 3.83,
//     genres: ['nonfiction', 'essays']
// },
// {
//     title: 'Bone: The Complete Edition',
//     authors: ['Jeff Smith'],
//     rating: 4.42,
//     genres: ['fiction', 'graphic novel', 'fantasy']
// },
// {
//     title: 'American Gods',
//     authors: ['Neil Gaiman'],
//     rating: 4.11,
//     genres: ['fiction', 'fantasy']
// },
// {
//     title: 'A Gentleman in Moscow',
//     authors: ['Amor Towles'],
//     rating: 4.36,
//     genres: ['fiction', 'historical fiction']
// },
// {
//     title: 'The Name of the Wind',
//     authors: ['Patrick Rothfuss'],
//     rating: 4.54,
//     genres: ['fiction', 'fantasy']
// },
// {
//     title: 'The Overstory',
//     authors: ['Richard Powers'],
//     rating: 4.19,
//     genres: ['fiction', 'short stories']
// },
// {
//     title: 'A Truly Horrible Book',
//     authors: ['Xavier Time'],
//     rating: 2.18,
//     genres: ['fiction', 'garbage']
// },
// {
//     title: 'The Way of Kings',
//     authors: ['Brandon Sanderson'],
//     rating: 4.65,
//     genres: ['fantasy', 'epic']
// },
// {
//     title: 'Lord of the flies',
//     authors: ['William Golding'],
//     rating: 3.67,
//     genres: ['fiction']
// }
// ]

// const [...nums] = books

// const {...n} = nums


// const [{title:nira}, ...nums] = books
// console.log(nira)


// const name = "niraj khatiwada"
// const age = 23

// const details = {[name]:name, [age]:age}
// console.log(details)

// books = {
//         title: 'Lord of the flies',
//         authors: ['William Golding'],
//         rating: 3.67,
//         genres: ['fiction']
//     }

// const results = function (books, ...params) {
//     return {...books, extra: params.reduce((preVal, currVal) => {
//         if (!preVal[currVal]){
//             preVal[currVal] = currVal
//         }
//         return preVal
//     }, {}) }
    
// }

// console.log(results( books, "Niraj Khatiwada", 23, `5'6"`))


// const obj = {
//     name() {console.log(this.lname)},
//     lname : "Khatiwada"
// }



// const obj2 = {
//     sum:function(a, b){return a+b},
//     average(a, b) {return this.sum(a,b)/2}
// }

// console.log(obj2.average(3,4))

// function randomColor() {
//     return setInterval(() => {
//         const colors = ["red", "white", "yellow", "green", "teal", "maroon", "blue"]
//         const rand = Math.ceil(Math.random() * colors.length)
//         return document.body.style.backgroundColor = colors[rand]
//     }, 1000)
// }

// randomColor()