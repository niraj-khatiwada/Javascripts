const firstRequest = new XMLHttpRequest();
firstRequest.addEventListener("load", function () {
    console.log("Success")
    // console.log(this.responseText)
    const planetData = JSON.parse(firstRequest.responseText);
    console.log(planetData);
    
        const residentURL = planetData.results[0].residents[0];
        const residentRequest = new XMLHttpRequest();
        residentRequest.addEventListener("load", function () {
            const residentData = JSON.parse(residentRequest.responseText)
            console.log("Reisent API", residentData.name);
        });
        residentRequest.addEventListener("error", function () {
            console.log("Error")
        })
        residentRequest.open("GET",residentURL);
        residentRequest.send();
        console.log("Resident request sent")


    
});

firstRequest.addEventListener("error", function () {
    console.log("Error");
});

firstRequest.open("GET", "https://swapi.co/api/planets/");
firstRequest.send();
console.log("Request sent");