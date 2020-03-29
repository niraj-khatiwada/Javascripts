const moveMe = document.querySelector("#moveme")

moveMe.addEventListener("click", () => {
    setTimeout(() => {
        moveMe.style.transform = translate()
    },1000)
})


const translate = () => (`translateX(${200}px)`)