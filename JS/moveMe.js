const moveMe = document.querySelector("#moveme")


    // moveMe.addEventListener("click", (evt) => {
    //     checkX()
    //         .then(() => {return checkX()})
    //         .then((res) => {return   checkX()})
    //         .then((res) => {return   checkX()})
    //         .then((res) => {return   checkX()})
    //         .then((res) => {return   checkX()})
    
    //         .catch((err) => console.log("Stopped"))
    // })



const xAmount = function () {
    const currentX = moveMe.getBoundingClientRect().x
    return currentX + 100
}

const translateX = function (x) {
    return moveMe.style.transform = `translateX(${x}px)`
}

const checkX = function(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (moveMe.getBoundingClientRect().right <= window.screen.availWidth) {
                translateX(xAmount())
                resolve()

            }
            reject()
        }, 1000)
})
}

const moveRight = async function() {
    Promise.all([await checkX(), await checkX(), await checkX()])
}


moveRight()
.catch((err) => {console.log("Cannot move further")})