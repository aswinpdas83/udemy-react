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

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });

        console.log('handleAddOne')
    }

    handleMinusOne() {
        this.setState({
            count: this.state.count > 0 ? this.state.count - 1 : 0
        })

        // this.setState((prevState) => {          //prefred syntax
        //     return {
        //         count: prevState.count - 1
        //     };
        // });
        console.log('handleMinusOne')
    }

    handleReset() {
        // this.setState({
        //     count: 0
        // })
        this.setState((prevState) => { //prefered syntax
            return {
                count: 0
            };
        });
        console.log('handleReset')
    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />, document.getElementById('app'))


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
