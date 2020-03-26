// const firstRequest = new XMLHttpRequest();
// firstRequest.addEventListener("load", function () {
//     console.log("Success")
//     // console.log(this.responseText)
//     const planetData = JSON.parse(firstRequest.responseText);
//     console.log(planetData);
    
//         const residentURL = planetData.results[0].residents[0];
//         const residentRequest = new XMLHttpRequest();
//         residentRequest.addEventListener("load", function () {
//             const residentData = JSON.parse(residentRequest.responseText)
//             console.log("Reisent API", residentData.name);
//         });
//         residentRequest.addEventListener("error", function () {
//             console.log("Error")
//         })
//         residentRequest.open("GET",residentURL);
//         residentRequest.send();
//         console.log("Resident request sent")


    
// });

// firstRequest.addEventListener("error", function () {
//     console.log("Error");
// });

// firstRequest.open("GET", "https://swapi.co/api/planets/");
// firstRequest.send();
// console.log("Request sent");


// fetch("https://swapi.co/api/planets/")
// .then((res) => {
//     if (res.status != 200) {
//         throw new Error(`Status code error ${res.status}`)
//     }
//     return res.json()
// })
// .then((res) => {
//     for (let planet of res.results){
//         console.log(planet.name)
//     }
//     return res.next
// })
// .then((res) => {return fetch(res)})
// .then((res) => {
//     if (!res.ok){
//         throw new Error(`Status code error ${res.status}`)
//     }
//     return res.json()
//     })
// .then( (res) => {
//     for (let planet of res.results){
//         console.log(planet.name)
//     }
// } )


// // .then((res) => {console.log(res.json())})

// .catch( (err) => {console.log("Something went wrong", err)})


axios.get("https://swapi.co/api/planets/")
.then((res) => {
    // console.log(res)
    for (let planet of res.data.results){
        console.log(planet.name)
    }
    return res.data.next
})
.then((res) => {
    // axios.get(res)
    return axios.get(res)
})
.then((res) => {
    for (let planet of res.data.results){
        console.log(planet.name)
    }
    return res.data.next
})
.catch((err) => {console.log("Error", err)})


const fetchURL = function (url = "https://swapi.co/api/planets/") {
    return axios.get(url)
}
