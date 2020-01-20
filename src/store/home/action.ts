import { INIT_USER_DATA, UPDATE_USER_AGE } from './action-type';
import { IUserState } from './reducer';
import { IAction } from '..';

export const initUserData = (user: IUserState): IAction => {
	return {
		type: INIT_USER_DATA,
		payload: {
			data: user
		}
	};
};

export const userAgeAdd = (): IAction => ({
	type: UPDATE_USER_AGE
});
