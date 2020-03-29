const moveMe = document.querySelector("#moveme")

moveMe.addEventListener("click", (evt) => {
    checkX()
        .then(() => checkX)
        .then(() => checkX())
        .then(() => checkX())
        .then(() => checkX())
        .then(() => checkX())

        .catch((err) => console.log("Stopped"))
})



const xAmount = function () {
    const currentX = moveMe.getBoundingClientRect().x
    return currentX + 100
}

const translateX = function (x) {
    return moveMe.style.transform = `translateX(${x}px)`
}

const checkX = function(){
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            if (moveMe.getBoundingClientRect().right <= window.screen.availWidth) {
                translateX(xAmount())
                resolve()
            }
            reject()
        }, 1000)
})
}