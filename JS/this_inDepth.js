const obj = {
    pickup: ["Hey Beautiful", "How you doing", "Whats cooking good looking", "Are you hurt?"],
    pickRandom(){
        let n = Math.floor(Math.random()* (this.pickup.length))
        return this.pickup[n]
    },
    start(){
        this.timerID = setInterval(() => console.log(this.pickRandom()), 3000)
    },
    stop(){
        clearInterval(this.timerID);
        console.log("Jesus what the fuck was that")
    }

}

console.log(obj.start())
