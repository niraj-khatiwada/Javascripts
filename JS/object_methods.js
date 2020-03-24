const one = [1, 2, 3, 4, 5]
const two = [6, 7, ,8 ,9, 10]

const obj = {
    sum:function (o) {
        return o.reduce((total, a) => total + a)
    },
    name : "NiraJ Khatiwada",
    blabla: this.name,
    avg(){
        return this.name
    }
}

console.log(obj.sum(one), obj.avg(), obj.blabla)