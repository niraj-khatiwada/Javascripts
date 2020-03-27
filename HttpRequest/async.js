
async function getURL() {
    try {
        const res = await axios.get("https://swapi.co/api/planets");
        const residents  = await axios.get(`res.data.results[0].residents[0] ${as}`)
        console.log(residents.data.name)
        
    }
    catch (err) {
        console.log("errorahjsjbhashb ", err)
    } 
    
}

getURL()