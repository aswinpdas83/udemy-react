'use strict';

var buttonName = 'Show details';

var onClickToggle = function onClickToggle() {
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
        React.createElement('button', { onClick: onClickToggle, value: buttonName }),
        React.createElement('p', null)
    );
    ReactDOM.render(tmlt, document.getElementById('app'));
};
render();
