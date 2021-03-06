import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { Provider } from 'react-redux';

import App from './app/containers/App';
import store from './store'

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
