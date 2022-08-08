"use strict";

console.log("App.Js is Running!");

// function check() {
//     alert('done');
// }

var template = React.createElement(
  "h1",
  null,
  "Does this change "
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
