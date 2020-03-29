// const url = axios.get("https://swapi.co/api/planets/")
// .then((res) => {return res})

// .then((res) => {
//     const resident = res.data.results[0].residents[0]
//     console.log(resident)
//     // const next = res.next
//     return axios.get(next)
// })

// .then((res) => checkStatusAndParse(res))
// .then((res) => {
//     console.log(res)
// })

// .catch((err) => {
//     console.log("Something went wrong with fetch", err)
// })



async function geda() {
    const prom = axios.get("https://swapi.co/api/planets/")
    await prom
    return prom
}

geda()
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log("Rejected ",err)
})

