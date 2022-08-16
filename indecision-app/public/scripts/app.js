'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var json = localStorage.getItem('options');
            var options = JSON.parse(json);
            if (options) {
                this.setState(function () {
                    return { options: options };
                });
                console.log('data feached and mounted.');
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('Data Saving in Local Storage : ' + localStorage.getItem('options'));
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount!');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: [].concat(_toConsumableArray(prevState.options)).filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[randomNum];
            console.log(option);
            alert(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'Enter a valid input.';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'Value already exist.';
            }
            this.setState(function (prevState) {
                return { options: [].concat(_toConsumableArray(prevState.options), [option]) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            // let app = {
            //     title: 'Indecision App!',
            //     subtitle: 'Welcome to the world of React JS.',

            // }
            return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    option: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOptions, {
                    handleAddOption: this.handleAddOption,
                    hasOptions: this.state.options.length > 0
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.title && React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

//<h1>{props.headervalues.title}</h1>
//<h2>{props.headervalues.subtitle}</h2>

Header.defaultProps = {
    title: 'Indecision App',
    subtitle: 'Welcome to the world of React JS.'
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

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What Should i do?'
        )
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

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.option.length > 0 ? React.createElement(
            'p',
            null,
            'Your option',
            props.option.length > 1 ? 's' : undefined,
            ' here.'
        ) : React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        React.createElement(
            'button',
            {
                //disabled={!props.option.length > 0}
                onClick: props.handleDeleteOptions },
            'Remove all'
        ),
        [].concat(_toConsumableArray(props.option)).map(function (value, index) {
            return React.createElement(Option, {
                key: index,
                option: value,
                handleDeleteOption: props.handleDeleteOption
            });
        })
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

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.option,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.option);
                }
            },
            'Remove'
        )
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

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();

            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            e.target.elements.option.value = '';
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && this.props.hasOptions && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option', required: true, placeholder: 'Enter the input here...' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

// const User = (props) => {
//     return (
//         <div>
//             <p>Name :{props.name} </p>
//             <p>Age : {props.age} </p>
//         </div>
//     );
// };

// ReactDOM.render(<User name='Aswin' age={21} />, document.getElementById('app'))


ReactDOM.render(React.createElement(IndecisionApp, { options: ['Default Options 1', 'Default Options 2'] }), document.getElementById('app'));
