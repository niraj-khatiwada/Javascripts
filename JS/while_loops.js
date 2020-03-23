// let name = "Niraj Khatiwada"
// n = 0
// while (n <= name.length){
//     console.log("Hello World", n);
//     n++;
// };

const target = Math.ceil(Math.random()*10);
let guess = Math.ceil(Math.random()* 10);

while (target != guess){
    console.log(`Target ${target}\nGuess ${guess}`);
    guess = Math.ceil(Math.random()* 10);
};

console.log(`Target ${target}\nGuess ${guess}`);
console.log("Congrats you won")