const buttonName = 'Show details'

const onClickToggle = () => {
    render()
}

const render = () => {
    const tmlt = (
        <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={onClickToggle} value={buttonName}></button>
            <p></p>
        </div>
    );
    ReactDOM.render(tmlt, document.getElementById('app'));
}
render()
