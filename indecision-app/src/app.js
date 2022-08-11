
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
    handleRemoveAll() {
        alert('Handle Remove all')
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
    render() {
        return (
            <div>
                <p>add options components here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
