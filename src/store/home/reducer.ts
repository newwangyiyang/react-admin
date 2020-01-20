import { INIT_USER_DATA, UPDATE_USER_AGE } from './action-type';
import { IAction } from '..';

export interface IUserState {
	userId: number;
	username: string;
	password: string;
	age: number;
	sex: number;
	token: string;
	auth: string;
}

const user: IUserState = {
	userId: -1,
	username: '',
	password: '',
	age: 0,
	sex: 1,
	token: '',
	auth: ''
};

export const homeReducer = (state = user, action: IAction) => {
	switch (action.type) {
		case INIT_USER_DATA:
			return { ...action?.payload?.data };
		case UPDATE_USER_AGE: {
			const user = Object.assign(state, { age: ++state.age });
			return { ...user };
		}
		default:
			return { ...state };
	}
};
