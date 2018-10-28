import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk/es/index';
import rootReducer from './reducers/index'
import {composeWithDevTools} from 'redux-devtools-extension';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
