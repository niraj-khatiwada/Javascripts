// async function add(x, y) {
//     if (typeof x != 'number' || typeof y != 'number'){
//         throw new Error("Not a number")
//     }
//     return x+y
// }

// add('e', 4).then((res) => {
//     console.log("Success",res )
// })
// .catch((err) => {
//     console.log("Failed", err)
// })


function mil(x, y) {
    return new Promise((resolve, reject) => {
        if (typeof x != 'number' || typeof y != 'number'){
            reject("Not a number")
        }
        resolve(x+y)
    })
}

mil(1, 'e')
.then((res) => {
    console.log("Resolved: ", res)

})
.catch((err) => {
    console.log("Failed", err)
})