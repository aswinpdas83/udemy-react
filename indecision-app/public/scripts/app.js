'use strict';

var visibility = false;

var onClickToggle = function onClickToggle() {
    visibility = !visibility;
    render();
};

var render = function render() {
    var tmlt = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visiblity Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onClickToggle },
            ' ',
            visibility ? 'Hide details' : 'Show details',
            ' '
        ),
        React.createElement(
            'p',
            null,
            visibility && 'hello Aswin. Welcome to react'
        )
    );
    ReactDOM.render(tmlt, document.getElementById('app'));
};
render();
