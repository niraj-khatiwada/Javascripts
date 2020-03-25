// document.querySelector("button").onclick = () => alert("Why did you clicked me")

// document.querySelector("input").ondblclick = () => document.querySelector("h1").style.color = "red"


const btn = document.querySelector("button")
// btn.addEventListener('click', () => document.querySelector("h1").style.color = "red")
// btn.addEventListener("click", () => btn.innerText = "Stop touching me")

// const input = document.querySelector("input")
// input.addEventListener("mouseover", () => btn.style.border = "3px solid red")
// input.addEventListener('mouseout', () => btn.style = "none")

// window.addEventListener('scroll', () => document.querySelector("p").style.fontSize = "3rem")


btn.addEventListener("mouseover", function () {
    // const width = Math.ceil(Math.random()*window.innerWidth);
    // const height = Math.ceil(Math.random()*window.innerHeight);
    btn.style.transform = `translate(100px,200px)`;

})
btn.addEventListener("click", function () {
    btn.style.background = "green"
})