console.log("App.Js is Running!")

// function check() {
//     alert('done');
// }

var template = (
    <div>
        <h1>Does this change </h1>
        <p>this is a info</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);