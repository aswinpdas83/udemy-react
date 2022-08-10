const user = {
    name: "Aswin",
    location: ["Mavelikara", 'Kochi', 'Kayamkulam'],
    printPlacedLived: function () {
        this.location.map(city => console.log(this.name, "has lived in", city));

    }
}
user.printPlacedLived()