import React from "react";

// class can export (default export) like this.
export default class AddOptions extends React.Component {
    state = {
        error: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    // }

    handleAddOption = (e) => {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && this.props.hasOptions && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" required placeholder='enter your option here...' />
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
}
