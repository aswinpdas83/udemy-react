

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

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: [...prevState.options].filter((option) => {
                return optionToRemove !== option
            })
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
        // let app = {
        //     title: 'Indecision App!',
        //     subtitle: 'Welcome to the world of React JS.',

        // }
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.title && <h2>{props.subtitle}</h2>}

        </div>
    );
};

//<h1>{props.headervalues.title}</h1>
//<h2>{props.headervalues.subtitle}</h2>

Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Welcome to the world of React JS.',
};

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

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What Should i do?
            </button>
        </div>
    );
};

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

const Options = (props) => {
    return (
        <div>
            {props.option.length > 0 ? <p>Your option{props.option.length > 1 ? 's' : undefined} here.</p> : <p>Please add an option to get started!</p>}
            <button
                disabled={!props.option.length > 0}
                onClick={props.handleDeleteOptions}>
                Remove all
            </button>
            {[...props.option].map((value, index) => (
                <Option
                    key={index}
                    option={value}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))}

        </div>
    );
};

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

const Option = (props) => {
    return (
        <div>
            {props.option}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.option);
                }}
            >
                Remove
            </button>

        </div>
    );
};

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

class AddOptions extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        e.target.elements.option.value = ''
        this.setState(() => ({ error }));
    }

    render() {
        return (
            <div>
                {this.state.error && this.props.hasOptions && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" required placeholder='Enter the input here...' />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name :{props.name} </p>
//             <p>Age : {props.age} </p>
//         </div>
//     );
// };

// ReactDOM.render(<User name='Aswin' age={21} />, document.getElementById('app'))


ReactDOM.render(<IndecisionApp options={['Default Options 1', 'Default Options 2']} />, document.getElementById('app'))
