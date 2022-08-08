"use strict";

console.log("App.Js is Running!");

// JSX -  JavaScript XML

var book = {
    title: "Wings of fire",
    subTitle: "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam."
};
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        book.title
    ),
    React.createElement(
        "p",
        null,
        book.subTitle
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "item one"
        ),
        React.createElement(
            "li",
            null,
            "item two"
        )
    )
);
var user = {
    name: "Aswin P Das",
    age: 21,
    location: "Kochi, Ernakulam, Kerala"
    // var userName = 'Aswin P Das'
    // var userAge = 20
    // var userLocation = "Kochi, Ernakulam"
};var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name.toUpperCase()
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        " Location: ",
        user.location
    )
);
//create an another template var JSX expression as templateTwo

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
