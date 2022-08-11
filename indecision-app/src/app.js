console.log("App.Js is Running!")

// JSX -  JavaScript XML

var book = {
    title: "Wings of fire",
    subTitle: "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam.",
    options: []
}
const onFormSumbit = (e) => {
    e.preventDefault();
    const option = e.target.elements.options.value;
    if (option) {
        book.options.push(option)
        e.target.elements.options.value = ''
        renderFunction();
    }
}

const onRemoveAll = () => {
    book.options = []
    renderFunction()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * book.options.length);
    const option = book.options[randomNum]
    alert(option)
    // option ? alert("Your option is:", option) : undefined
}
// const renderList = () => book.options.map(item => <li key={item}>{item}</li>)

const appRoot = document.getElementById("app");

const renderFunction = () => {
    var template = (
        <div>
            <h1>{book.title}</h1>
            {book.subTitle && <p>{book.subTitle}</p>}
            <p>{book.options.length > 0 ? 'Here is your options' : 'No options'}</p>
            <p>{book.options.length}</p>
            <button disabled={book.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll} >Remove All</button>
            <ol >
                {
                    book.options.map((item, index) => <li key={index}>{item}</li>)
                }
            </ol>
            <form onSubmit={onFormSumbit}>
                <input type="text" name="options" placeholder="Enter the value here" />
                <button >Add options</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderFunction();