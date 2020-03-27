class Pets {
    constructor(name, age, color) {
        this.name = name
        this.age = age
        this.color = color
    }
    eats() {
        console.log(`Cat ${this.name} of age ${this.age} has color ${this.color}`)
    }
}


class Cats extends Pets {
    constructor(name,age,  eyeColor){
        super(name, age)
        this.eyeColor = eyeColor
    }
    meow() {
        console.log("Cat meows", this.name)
    }
}

class Dogs extends Pets{
    bark() {
        console.log("Dog barks")
    }
}

const cat = new Cats("Pussy", 5, "grey")
cat.meow()
const dog = new Dogs("Sheru", 2, "black")
dog.bark()