import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(RootReducer, composeEnhancers(applyMiddleware(thunk, promise)));

export default store;
