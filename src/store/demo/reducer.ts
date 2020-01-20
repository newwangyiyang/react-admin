import { IAction } from '..';
import { INIT_DEMO } from './action-type';

export interface IDemoState {
	productName: string;
	productPrice: string;
	productColor: string;
	productId: string;
}

const demo: IDemoState = {
	productName: '',
	productPrice: '',
	productColor: '',
	productId: ''
};

const demoReducer = (state = demo, action: IAction) => {
	switch (action.type) {
		case INIT_DEMO:
			return { ...action?.payload?.data };
		default:
			return { ...state };
	}
};

export default demoReducer;
