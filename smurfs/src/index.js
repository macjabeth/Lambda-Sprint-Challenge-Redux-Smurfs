import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import './reset.css';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
