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


const range = document.querySelector("input[type = 'range']")

const displayRangeValue = document.querySelector(".display_range_value")
displayRangeValue.textContent = range.value


const todos = document.querySelector(".todo")
todos.classList.toggle('done')

