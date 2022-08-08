console.log("App.Js is Running!")

// JSX -  JavaScript XML

var book = {
    title: "Wings of fire",
    subTitle: "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam."
}
var template = (
    <div>
        <h1>{book.title}</h1>
        <p>{book.subTitle}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);
var user = {
    name: "Aswin P Das",
    age: 21,
    location: "Kochi, Ernakulam, Kerala"

}
// var userName = 'Aswin P Das'
// var userAge = 20
// var userLocation = "Kochi, Ernakulam"
var templateTwo = (
    <div>
        <h1>{user.name.toUpperCase()}</h1>
        <p>Age: {user.age}</p>
        <p> Location: {user.location}</p>

    </div>
)
//create an another template var JSX expression as templateTwo

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
