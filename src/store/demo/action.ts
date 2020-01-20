import { IAction } from '..';
import { INIT_DEMO } from './action-type';
import { Dispatch } from 'react';
import { getDemoById } from '../../api/demo';

export const initDemoById = (id: string) => async (dispatch: Dispatch<IAction>) => {
	const { data }: { data: Ajax.AjaxResponse } = await getDemoById(id);
	dispatch({
		type: INIT_DEMO,
		payload: {
			data: data[0]
		}
	});
};
