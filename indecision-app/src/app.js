import React from "react";
import ReactDOM from "react-dom";
import AddOptions from "./components/AddOptions";
import Header from "./components/Header";
import Action from "./components/Action";
import Options from "./components/Options"

class IndecisionApp extends React.Component {


    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json)
            if (options) {
                this.setState(() => ({ options }))
                console.log('data feached and mounted.')
            }
        }
        catch (e) {
            // Do nothing.
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            console.log(`Data Saving in Local Storage : ${localStorage.getItem('options')}`)
        }
    }

    componentWillUnmount() {
        console.log('componentWillUnmount!')
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: [...prevState.options].filter((option) => optionToRemove !== option)
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid input.'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'Value already exist.'
        }
        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    render() {
        return (
            <div>
                <Header />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    option={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOptions
                    handleAddOption={this.handleAddOption}
                    hasOptions={this.state.options.length > 0}
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
};

ReactDOM.render(<IndecisionApp options={['Default Options 1', 'Default Options 2']} />, document.getElementById('app'))

// header function was here

//<h1>{props.headervalues.title}</h1>
//<h2>{props.headervalues.subtitle}</h2>

// class Header extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.headervalues.title}</h1>
//                 <h2>{this.props.headervalues.subtitle}</h2>
//             </div>
//         );
//     }
// }

// Action function is here...

// converts the Class based components to stateless functiobal component
// class Action extends React.Component {

//     handlePick() {
//         alert("Handle Pick alert")
//     }

//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What Should i do?
//                 </button>
//             </div>
//         );
//     }
// }

// Options function is here...

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 {this.props.option.length > 0 && <p>Your options here.</p>}
//                 <Option
//                     option={this.props.option}
//                     handleDeleteOptions={this.props.handleDeleteOptions}
//                 />
//             </div>
//         );
//     }
// }

// Option function is here...

//class Option extends React.Component {

// constructor(props) {
//     super(props);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this);
// }

// handleRemoveAll() {
//     console.log(this.props.option)
//     alert(`Handle Remove all :\n ${this.props.option.map((value, index) => index + 1 + ". " + value + "\n")}`)
// }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove all</button>
//                 <ol>
//                     {this.props.option.map((value, index) => <li key={index} >{value}</li>)}
//                 </ol>
//             </div>
//         );
//     }
// }

// AddOtionClass was here.

// const User = (props) => {
//     return (
//         <div>
//             <p>Name :{props.name} </p>
//             <p>Age : {props.age} </p>
//         </div>
//     );
// };

// ReactDOM.render(<User name='Aswin' age={21} />, document.getElementById('app'))



