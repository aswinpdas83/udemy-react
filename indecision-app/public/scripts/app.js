"use strict";

console.log("App.Js is Running!");

// function check() {
//     alert('done');
// }

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Does this change "
    ),
    React.createElement(
        "p",
        null,
        "this is a info"
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

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
