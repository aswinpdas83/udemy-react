
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${this.name}!`
    }
    getDescription() {
        return `${this.name} has ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.major) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting
    }
}

const me = new Traveler('Aswin P Das', 21, 'Kochi');
console.log(me)
console.log(me.getGreeting())
// console.log(me.getDescription())
// console.log(me.hasMajor())

const other = new Traveler(undefined, undefined, 'Undiscloded location');
console.log(other)
console.log(other.getGreeting())
// console.log(other.getDescription())
// console.log(other.hasMajor())

