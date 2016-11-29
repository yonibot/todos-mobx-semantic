// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Router, Route, browserHistory } from 'react-router';
ReactDOM.render((
	<Router history={ browserHistory }>
		<Route path="/" component={ App } />
	</Router>

), document.getElementById('react-root'));
