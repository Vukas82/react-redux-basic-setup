import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import userReducer from './app/reducers/userReducer';
import mathReducer from './app/reducers/mathReducer';

export default createStore(
	combineReducers({
		math: mathReducer,
		user: userReducer,
	}),
	{},
	applyMiddleware(logger)
);