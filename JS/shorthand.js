const datas = (num) => {
    min = Math.min(...num);
    max = Math.max(...num);
    sum = num.reduce((total, a) => total+a);
    return {min, max, sum}
}

let lists = [1, 2, 3, 4, 5]
console.log(datas(lists))
