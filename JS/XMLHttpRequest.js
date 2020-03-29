const url = new XMLHttpRequest()

url.addEventListener("load", function(){
    const json = JSON.parse(this.responseText)
    const resident = json.results[0].residents[0]
    console.log(resident)

    const residentRequest = new XMLHttpRequest()
    residentRequest.addEventListener("load", function() {
        const residentJSON = JSON.parse(this.responseText)
        console.log(residentJSON)
        
    })
    residentRequest.addEventListener("error", function() {
        console.log("Failed at residents")

    })
    residentRequest.open("GET", resident)
    residentRequest.send()

    


})

url.addEventListener("error", function() {
    console.log("Error")
})


url.open("GET", "https://swapi.co/api/planets/")
url.send()

