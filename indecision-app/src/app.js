console.log("App.Js is Running!")

// JSX -  JavaScript XML

var book = {
    title: "Wings of fire",
    subTitle: "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam.",
    options: ["one", "two"]
}
var template = (
    <div>
        <h1>{book.title}</h1>
        {book.subTitle && <p>{book.subTitle}</p>}
        <p>{book.options.length > 0 ? 'Here is your options' : 'No options'}</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);
var user = {
    name: "Aswin P Das",
    age: 18,
    location: "Kochi, Ernakulam, Kerala"

}
// var userName = 'Aswin P Das'
// var userAge = 20
// var userLocation = "Kochi, Ernakulam"
function getLocation(location) {
    if (location)
        return <p>Location: {location}</p>
}
// var templateTwo = (
//     <div>
//         <h1>{user.name ? user.name.toUpperCase() : "Anonymous"}</h1>
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}

//     </div>
// )
//create an another template var JSX expression as templateTwo
const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

