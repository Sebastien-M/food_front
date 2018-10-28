import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import store from "./store";
import {Provider} from "react-redux";
import App from "./containers/App";

ReactDOM.render(
        <Provider store={store}>
            <App {...this.props}/>
        </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
