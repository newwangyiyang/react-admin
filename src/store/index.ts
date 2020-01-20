import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { homeReducer, IUserState } from './home/reducer';
import demoReducer, { IDemoState } from './demo/reducer';

export interface IAction<T = any> {
	type: string;
	payload?: {
		data: T;
	};
}

export interface IRootState {
	home: IUserState;
	demo: IDemoState;
}

const reducer = combineReducers({
	home: homeReducer,
	demo: demoReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// useSelect useDispatch

export default store;
