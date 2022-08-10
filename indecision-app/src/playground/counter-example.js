let count = 0;
const addOne = () => {
    count++
    renderCounterApp()
    console.log("addOne", count)

};

const minusOne = () => {
    if (count > 0) {
        count--
        renderCounterApp()
        console.log("minusOne", count)
    }

};

const reset = () => {
    if (count != 0) {
        count = 0
        renderCounterApp()
        console.log("reset", count)
    }
};

var appRoot = document.getElementById("app");

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1> Count: {count}</h1>
            <button id="my-id" onClick={addOne} className="button"> +1</button>
            <button id="my-id-minus" onClick={minusOne} className="button"> -1</button>
            <button id="my-id-reset" onClick={reset} className="button"> reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp()
