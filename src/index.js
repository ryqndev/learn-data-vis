import Plausible from 'plausible-tracker';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import './index.css';

Plausible({
	domain: 'data-vis.learn.ryqn.dev',
});

ReactDOM.render(<App />, document.getElementById('root'));
