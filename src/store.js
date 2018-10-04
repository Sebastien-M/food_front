import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk/es/index';
import rootReducer from './reducers/index'

export default createStore(rootReducer, applyMiddleware(thunk));