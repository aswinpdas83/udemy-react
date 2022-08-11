let visibility = false

const onClickToggle = () => {
    visibility = !visibility
    render()
}

const render = () => {
    const tmlt = (
        <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={onClickToggle}> {visibility ? 'Hide details' : 'Show details'} </button>
            <p>{visibility && 'hello Aswin. Welcome to react'}</p>
        </div>
    );
    ReactDOM.render(tmlt, document.getElementById('app'));
}
render()
