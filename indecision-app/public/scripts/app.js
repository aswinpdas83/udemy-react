"use strict";

console.log("App.Js is Running!");

// JSX -  JavaScript XML

var app = {
    title: "Wings of fire",
    subTitle: "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam.",
    options: []
};
var onFormSumbit = function onFormSumbit(e) {
    e.preventDefault();
    var option = e.target.elements.options.value;
    if (option) {
        app.options.push(option);
        e.target.elements.options.value = '';
        renderFunction();
    }
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderFunction();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert(option);
    //option ? alert(`Your option is: ${option}`) : undefined
};
// const renderList = () => app.options.map((item, index) => <li key={item}>{item}</li>)

var appRoot = document.getElementById("app");

var renderFunction = function renderFunction() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        app.subTitle && React.createElement(
            "p",
            null,
            app.subTitle
        ),
        React.createElement(
            "p",
            null,
            app.options.length > 0 ? 'Here is your options' : 'No options'
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            "What should I do?"
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (item, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    item
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSumbit },
            React.createElement("input", { type: "text", name: "options", placeholder: "Enter the value here" }),
            React.createElement(
                "button",
                null,
                "Add options"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFunction();
