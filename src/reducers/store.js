import { createStore, applyMiddleware, combineReducers } from 'redux';
import cardlistReducer from './reducers';
import cardReducer from './cardreducer';

const todoApp = combineReducers({cardlistReducer, cardReducer});
export default todoApp