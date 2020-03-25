// const div = document.querySelector('.main').children

// for (let i of div) {
//     i.inn = "Hello World"    
// }

// const styles_list = document.querySelector(".heading")

// styles_list.style.backgroundColor = "red"
// styles_list.style.border = "10px solid black"


// const lis = document.querySelectorAll("ul li")

// const colors = ["red", "green", "blue", "teal"]

// for (let i in lis){
//     lis[i].style.color = colors[i]
// }


//Display value of input range
const range = document.querySelector("input[type = 'range']")

const displayRangeValue = document.querySelector(".display_range_value")
displayRangeValue.textContent = range.value

//Classlist
const todos = document.querySelector(".todo")
todos.classList.toggle('done')

//Add element Append and Prepend
const beerDiv = document.querySelector(".beer")

const newH2 = document.createElement('h2')
newH2.innerText = "Beer"
newH2.style.textAlign = "center"
newH2.style.color = "red"

beerDiv.append(newH2)

//Insert Before
const liCoffee = document.querySelectorAll(".todo")
const liCoffee_parent = document.querySelector(".todos")
const li_tea = document.createElement("li")
li_tea.innerText = "Tea"

liCoffee_parent.insertBefore(li_tea, liCoffee[1])


//Before Begin, After Begin, Before End, After End

const p = document.querySelector("#main")

const newH1 = document.createElement('h1')
newH1.textContent = "Niraj Khatiwada"
p.insertAdjacentElement("beforeend", newH1 )


//Remove element

const rem_ul = document.querySelector(".fruits")

rem_ul.remove()