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
    console.log(option)
    if (option) {
        book.options.push(option)
        e.target.elements.options.value = ''
        renderFunction();
        console.log('form re-rendered')
    }
}

const onRemoveAll = () => {
    book.options = []
    renderFunction()
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
            <button onClick={onRemoveAll} >Remove All</button>
            <ol >
                {
                    book.options.map(item => <li key={item}>{item}</li>)
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