import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp options={['Sample options 1', 'Sample options 2']} />, document.getElementById('app'));
