let input = "A quick brown fox jumsp over the lazy dog";

count = 0;
function isPangrams(input){
    let letters = ["a", "b", "c", "d","e","f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x","y", "z"];
    for (let i of input.split("")){
        if (letters.includes(i.toLowerCase())) {
            count += 1;
            letters.splice(letters.indexOf(i), 1)
        }
    }
    return count;
}

console.log("Count is :", isPangrams(input));
if (isPangrams(input) >= 26){
    console.log("It is a panagram")
}
else {
    console.log("Not a panagram")
};