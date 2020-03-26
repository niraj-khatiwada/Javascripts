// // document.querySelector("button").onclick = () => alert("Why did you clicked me")

// // document.querySelector("input").ondblclick = () => document.querySelector("h1").style.color = "red"


// const btn = document.querySelector("button")
// // btn.addEventListener('click', () => document.querySelector("h1").style.color = "red")
// // btn.addEventListener("click", () => btn.innerText = "Stop touching me")

// // const input = document.querySelector("input")
// // input.addEventListener("mouseover", () => btn.style.border = "3px solid red")
// // input.addEventListener('mouseout', () => btn.style = "none")

// // window.addEventListener('scroll', () => document.querySelector("p").style.fontSize = "3rem")


// btn.addEventListener("mouseover", function () {
//     // const width = Math.ceil(Math.random()*window.innerWidth);
//     // const height = Math.ceil(Math.random()*window.innerHeight);
//     btn.style.transform = `translate(100px,200px)`;

// })
// btn.addEventListener("click", function () {
//     btn.style.background = "green"
// })



const colors = ["red", "green", "blue", "teal", "yellow", "maroon", "pink", "orange", "purple"]

// const itemBoxes = () => {
//     const div_ = document.createElement("div")
//     document.body.appendChild(div_)
//     div_.addEventListener("click",function (evt) {
//         console.log(evt)
//         printCoroinates(div_, evt)
        
//     })
//     div_.style.width = "500px"
//     div_.style.background = "blue"
    
//     for (let color of colors) {
//         const div = document.createElement("div")
//         div.style.width = "100px"
//         div.style.height = "100px"
//         div.style.background = `${color}`
//         document.body.appendChild(div)
//     }
// }

// const pickColor = function (evt) {
//     const pickedColor = document.querySelector("h1"); 
//     pickedColor.style.color = `${this.style.background}`;
//     console.log(evt.screenX, evt.screenY)
// }

// const printCoroinates = function (div_, evt) {
//     const button = document.createElement("button")
//     button.style.position ="absolute"
//     button.top = evt.screenX
//     button.left = evt.screenY
//     button.innerText = `(${evt.screenX}, ${evt.screenY})`
//     div_.appendChild(button)
    
// }
// itemBoxes()

const colorBoxes = function () {
    const mainDiv = document.createElement("div")
    mainDiv.style.display = "flex"

    document.body.appendChild(mainDiv)
    for (let item of colors) {
        const childDiv = document.createElement("div")
        childDiv.style.backgroundColor = item
        childDiv.className = "childDiv"
        childDiv.style.width = "100px"
        childDiv.style.height = "100px"
        mainDiv.appendChild(childDiv)
    }
    
};

const spacePressed = function () {
    const _childDiv = document.querySelectorAll(".childDiv");
    console.log(_childDiv)
    document.body.addEventListener("keypress", function (evt) {
        if (evt.code === "Space") {
            const H1 = document.querySelector("h1")
            const randomColor = colors[Math.ceil(Math.random() * colors.length)]
            H1.style.color = randomColor

        }
    })
}



colorBoxes()
spacePressed()