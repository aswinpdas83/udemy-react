
class IndecisionApp extends React.Component {
    render() {
        let app = {
            title: 'Indecision App!',
            subtitle: 'Welcome to the world of React JS.',
            options: ['option one', 'option two', 'option three']
        }
        return (
            <div>
                <Header headervalues={app} />
                <Action />
                <Options option={app.options} />
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
                <button onClick={this.handlePick}> What Should i do?</button>
            </div>
        );
    }
}

class Options extends React.Component {

    render() {
        return (
            <div>
                <p>Your options here.</p>
                <Option option={this.props.option} />
            </div>
        );
    }
}

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log(this.props.option)
        alert(`Handle Remove all :\n ${this.props.option.map((value, index) => index + 1 + ". " + value + "\n")}`)
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <ol>
                    {this.props.option.map((value, index) => <li key={index} >{value}</li>)}
                </ol>
            </div>
        );
    }
}

class AddOptions extends React.Component {
    handileAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option)
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handileAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
