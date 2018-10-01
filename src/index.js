import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Connection from './components/Connection'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Connection />, document.getElementById('connection'));
registerServiceWorker();
