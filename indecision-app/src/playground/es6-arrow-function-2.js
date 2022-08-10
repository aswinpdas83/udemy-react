const user = {
    name: "Aswin",
    location: ["Mavelikara", 'Kochi', 'Kayamkulam'],
    printPlacedLived: function () {
        this.location.map(city => console.log(this.name, "has lived in", city));
    }
}
user.printPlacedLived()

const multiplier = {
    numbers: [10, 20, 30, 40, 50],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map(num => num * this.multiplyBy)
    }
}
console.log(multiplier.multiply())

const add = (a, b) => a + b;