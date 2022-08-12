class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.onClickToggle = this.onClickToggle.bind(this);
        this.state = {
            visibility: false
        }
    }

    onClickToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        }
        );
        // this.setState({
        //     visibility: !this.state.visibility
        // })
    }

    render() {
        return (
            <div>
                <h1>Visiblity Toggle</h1>
                <button onClick={this.onClickToggle}> {this.state.visibility ? 'Hide details' : 'Show details'} </button>
                <p>{this.state.visibility && 'hello Aswin. Welcome to react'}</p>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let visibility = false

// const onClickToggle = () => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const tmlt = (
//         <div>
//             <h1>Visiblity Toggle</h1>
//             <button onClick={onClickToggle}> {visibility ? 'Hide details' : 'Show details'} </button>
//             <p>{visibility && 'hello Aswin. Welcome to react'}</p>
//         </div>
//     );
//     ReactDOM.render(tmlt, document.getElementById('app'));
// }
// render()
