import React from 'react';
import AddOptions from './AddOptions';
import Header from './Header';
import Action from './Action';
import Options from './Options'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: this.props.options,
        selectedOption: undefined
    };

    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: [...prevState.options].filter((option) => optionToRemove !== option)
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
        this.setState({ selectedOption: option })
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter a valid input.'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'Value already exist.'
        }
        this.setState((prevState) => ({ options: [...prevState.options, option] }));
    }

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this)
    //     this.handlePick = this.handlePick.bind(this)
    //     this.handleAddOption = this.handleAddOption.bind(this)
    // }

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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
    options: []
};
