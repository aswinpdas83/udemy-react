"use strict";

var user = {
    name: "Aswin",
    location: ["Mavelikara", 'Kochi', 'Kayamkulam'],
    printPlacedLived: function printPlacedLived() {
        var _this = this;

        this.location.map(function (city) {
            return console.log(_this.name, "has lived in", city);
        });
    }
};
user.printPlacedLived();
