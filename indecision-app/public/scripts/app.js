"use strict";

console.log("App.Js is Running!");

// JSX -  JavaScript XML

var book = {
    title: "Wings of fire",
    subTitle: "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam.",
    options: []
};
var onFormSumbit = function onFormSumbit(e) {
    e.preventDefault();
    var option = e.target.elements.options.value;
    console.log(option);
    if (option) {
        book.options.push(option);
        e.target.elements.options.value = '';
        renderFunction();
        console.log('form re-rendered');
    }
};

var onRemoveAll = function onRemoveAll() {
    book.options = [];
    renderFunction();
};
// const renderList = () => book.options.map(item => <li key={item}>{item}</li>)

var appRoot = document.getElementById("app");

var renderFunction = function renderFunction() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            book.title
        ),
        book.subTitle && React.createElement(
            "p",
            null,
            book.subTitle
        ),
        React.createElement(
            "p",
            null,
            book.options.length > 0 ? 'Here is your options' : 'No options'
        ),
        React.createElement(
            "p",
            null,
            book.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            book.options.map(function (item) {
                return React.createElement(
                    "li",
                    { key: item },
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
