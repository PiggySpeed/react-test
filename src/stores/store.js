import { createStore, applyMiddleware, combineReducers } from 'redux';
import todoReducer from '../reducers/reducers';

const todoApp = combineReducers({todoReducer});
export default todoApp