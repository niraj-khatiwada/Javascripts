let array1 = [1, 4, 2, 5, 4, 2,4,45,3,1,24,0]

// const sorted = array1.sort((a, b) => a-b)
const sorted_desc  = array1.sort((a, b) => b-a)
console.log("Ascending Sort", array1.sort((a,  b) => a-b))
console.log("Descending Sort", sorted_desc)