

let stored = function (x, y, ...lists){
    return lists.reduce((x, y) => x+y)
}

console.log(stored(1, 2, 3, 4, 5))