
class Cat {
    constructor (name,sex) {
        this.name = name,
        this.sex = sex
    }

    speak() {
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor (name, sex) {
        this.name = name,
        this.sex = sex
    }

    speak() {
        return `${this.name} says woof!`
    }
}

class Bird {
    constructor (name, sex) {
        this.name = name,
        this.sex = sex
    }

    speak() {
        if(this.sex === "male"){
            return `It's me! ${this.name}, the parrot!`
        }else {
            return `${this.name} says squawk!`
        }    
    }
}

// let sam = new Bird('sam', 'female')
// let rob = new Bird('rob', 'male')

// let cheetah = new Cat('cheetah', 'female')
// let mocha = new Dog('mocha', 'male')


// console.log(mocha.speak())
// console.log(cheetah.speak())