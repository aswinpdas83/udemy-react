'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.handleAddOne = _this.handleAddOne.bind(_this);
        _this.handleMinusOne = _this.handleMinusOne.bind(_this);
        _this.handleReset = _this.handleReset.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var countSting = localStorage.getItem('count');
            var count = parseInt(countSting);
            if (!isNaN(count)) {
                this.setState(function () {
                    return { count: count };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.count !== this.state.count) {
                localStorage.setItem('count', this.state.count);
                console.log('Data Saving in Local Storage : ' + localStorage.getItem('count'));
            }
        }
    }, {
        key: 'handleAddOne',
        value: function handleAddOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });

            console.log('handleAddOne');
        }
    }, {
        key: 'handleMinusOne',
        value: function handleMinusOne() {
            if (this.state.count > 0) this.setState({
                count: this.state.count > 0 ? this.state.count - 1 : 0
            });
            console.log('handleMinusOne');
            // this.setState((prevState) => {          //prefred syntax
            //     return {
            //         count: prevState.count - 1
            //     };
            // });
        }
    }, {
        key: 'handleReset',
        value: function handleReset() {
            // this.setState({
            //     count: 0
            // })
            this.setState(function (prevState) {
                //prefered syntax
                return {
                    count: 0
                };
            });
            console.log('handleReset');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Counter: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.handleAddOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { disabled: this.state.count == 0, onClick: this.handleMinusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { disabled: this.state.count == 0, onClick: this.handleReset },
                    'reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

// Counter.defaultProps = {
//     count: 0
// }


ReactDOM.render(React.createElement(Counter, { count: 5 }), document.getElementById('app'));

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
