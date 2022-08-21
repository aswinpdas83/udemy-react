class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const countSting = localStorage.getItem('count');
        const count = parseInt(countSting);
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)

        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });


    }

    handleMinusOne() {
        if (this.state.count > 0)
            this.setState({
                count: this.state.count > 0 ? this.state.count - 1 : 0
            })

    }

    handleReset() {

        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button disabled={this.state.count == 0} onClick={this.handleMinusOne}>-1</button>
                <button disabled={this.state.count == 0} onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// }
ReactDOM.render(<Counter count={5} />, document.getElementById('app'))


// let count = 0;
// const addOne = () => {
//     count++
//     renderCounterApp()
//     console.log("addOne", count)

// };

// const minusOne = () => {
//     if (count > 0) {
//         count--
//         renderCounterApp()
//         console.log("minusOne", count)
//     }

// };

// const reset = () => {
//     if (count != 0) {
//         count = 0
//         renderCounterApp()
//         console.log("reset", count)
//     }
// };

// var appRoot = document.getElementById("app");

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1> Count: {count}</h1>
//             <button id="my-id" onClick={addOne} className="button"> +1</button>
//             <button id="my-id-minus" onClick={minusOne} className="button"> -1</button>
//             <button id="my-id-reset" onClick={reset} className="button"> reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
// renderCounterApp()
