const multiply = (a, b) => {
    let result = typeof b == 'number' ? a*b : console.log("Thats not a number")
    return result
}

console.log(multiply(2, 1))

