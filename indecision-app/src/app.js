
class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.state = {
            options: ['option one', 'option two', 'option three', 'option four', 'option five']
        }
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        console.log(option)
        alert(option)
    }

    render() {
        let app = {
            title: 'Indecision App!',
            subtitle: 'Welcome to the world of React JS.',

        }
        return (
            <div>
                <Header headervalues={app} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    option={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.headervalues.title}</h1>
                <h2>{this.props.headervalues.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {

    handlePick() {
        alert("Handle Pick alert")
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What Should i do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <p>Your options here.</p>
                <Option
                    option={this.props.option}
                    handleDeleteOptions={this.props.handleDeleteOptions}
                />
            </div>
        );
    }
}

class Option extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }

    // handleRemoveAll() {
    //     console.log(this.props.option)
    //     alert(`Handle Remove all :\n ${this.props.option.map((value, index) => index + 1 + ". " + value + "\n")}`)
    // }

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove all</button>
                <ol>
                    {this.props.option.map((value, index) => <li key={index} >{value}</li>)}
                </ol>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
