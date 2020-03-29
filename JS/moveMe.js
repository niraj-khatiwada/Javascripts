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



// const xAmount = function () {
//     const currentX = moveMe.getBoundingClientRect().x
//     return currentX + 100
// }

// const translateX = function (x) {
//     return moveMe.style.transform = `translateX(${x}px)`
// }

// const checkX = function(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (moveMe.getBoundingClientRect().right <= window.screen.availWidth) {
//                 translateX(xAmount())
//                 resolve()

//             }
//             reject()
//         }, 1000)
// })
// }

// const moveRight = async function() {
//     Promise.all([await checkX(), await checkX(), await checkX()])
// }


// moveRight()
// .catch((err) => {console.log("Cannot move further")})




const list = [1, 2,3 ,4 ]

// Array.prototype.push = () => { return 10}

// Array.prototype.niraj = () => {alert("Niraj is awesome")}


class Color{
    constructor(name, age, height)  {
        this.name = name
        this.age = age
        this.heught = height
    }
    change() {
        alert("RGB value changed")
    }
    name1(color){
        this.color = color
        console.log(this.name)

    }
}
class Colors extends Color{
    constructor(name, age, height, color)  {
        super(name, age, height)
        this.color = color
    }
}

const obj1 = new Color("Red", 1, 2)
const obj2 = new Colors("Red", 1, 2, 3)
