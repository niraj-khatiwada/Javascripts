async function pokemon() {
    const prom1  = axios.get("https://pokeapi.co/api/v2/pokemon/1")
    const prom2  = axios.get("https://pokeapi.co/api/v2/pokemon/2")
    const prom3  = axios.get("https://pokeapi.co/api/v2/pokemon/3")
    console.log(prom1)
    console.log(prom2)
    console.log(prom3)
    const results  = await Promise.all([prom1, prom2, prom3])
    console.log(results)
    printPokemon(results)
}   



pokemon()

const printPokemon = (results) => {
    for (let poke of results){
        console.log(poke.data.name)
    }
}

// const changeCOlor = function (color, delay) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color
//             resolve()
//         }, delay)
//     })
// }

// async function color() {
//     const prom1 = changeCOlor('teal', 1000);
//     const prom2 = changeCOlor('red', 1000);
//     const prom3 = changeCOlor('blue', 1000);
//     const prom4 = changeCOlor('green', 1000);
//     const prom5 = changeCOlor('yellow', 1000);
//     const results = await Promise.all([prom1, prom2, prom3, prom4, prom5])
//     console.log(results)

// }

// color()