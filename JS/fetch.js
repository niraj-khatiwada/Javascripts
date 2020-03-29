const url = fetch("https://swapi.co/api/planets/")
.then((res) => checkStatusAndParse(res))

.then((res) => {
    const resident = res.results[0].residents[0]
    const next = res.next
    return fetch(next)
})

.then((res) => checkStatusAndParse(res))
.then((res) => {
    console.log(res)
})

.catch((err) => {
    console.log("Something went wrong with fetch", err)
})


const checkStatusAndParse = function(res) {
    if (res.ok){
        return res.json()
    }  
    else{
        throw new Error(`Status code:${res.status}`)
    }

} 