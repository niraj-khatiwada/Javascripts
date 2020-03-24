const avg = function (x, y){
    return function (x, y){
        return (x+y)/2;
    }
}

const average = avg()
console.log(average(3, 2))