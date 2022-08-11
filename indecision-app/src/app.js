console.log("App.Js is Running!")

// JSX -  JavaScript XML

var app = {
    title: "Wings of fire",
    subTitle: "Wings of Fire (1999), is the autobiography of the Missile Man of India and President of India, Dr. A. P. J. Abdul Kalam.",
    options: []
}
const onFormSumbit = (e) => {
    e.preventDefault();
    const option = e.target.elements.options.value;
    if (option) {
        app.options.push(option)
        e.target.elements.options.value = ''
        renderFunction();
    }
}

const onRemoveAll = () => {
    app.options = []
    renderFunction()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
    //option ? alert(`Your option is: ${option}`) : undefined
}
// const renderList = () => app.options.map((item, index) => <li key={item}>{item}</li>)

const appRoot = document.getElementById("app");

const renderFunction = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}
            <p>{app.options.length > 0 ? 'Here is your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll} >Remove All</button>
            <ol >
                {
                    app.options.map((item, index) => <li key={index}>{item}</li>)
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
