console.log("App.Js is Running!")

// function check() {
//     alert('done');
// }

// var template = <p>This is JSX  from app.js </p>
var template = React.createElement("h1", { id: "tag", name: 'aswin', class: 'blue-class' }, "This is JSX  from app.js ");
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);