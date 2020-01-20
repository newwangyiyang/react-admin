import React, { FC, Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IRootState, IAction } from '../../../store';
import { IUserState } from '../../../store/home/reducer';
import styles from './index.module.scss';
import { Row, Col, Button } from 'antd';
import { initUserData, userAgeAdd } from '../../../store/home/action';
const ReduxView: FC = () => {
	const dispatch = useDispatch<Dispatch<IAction<IUserState>>>();
	const user: IUserState = useSelector((state: IRootState) => state.home);
	const initUser = () => {
		const user: IUserState = {
			userId: 1,
			username: 'wyy',
			password: '111',
			age: 27,
			sex: 1,
			token: '1',
			auth: 'admin'
		};
		dispatch(initUserData(user));
	};
	const useAge = () => {
		dispatch(userAgeAdd());
	};

	return (
		<Row gutter={16}>
			<Col span={10}>
				<div className={`${styles['base-style']} h-100`}>
					<h3>Redux中user: </h3>
					<p>{JSON.stringify(user)}</p>
				</div>
			</Col>
			<Col span={5}>
				<div className={`${styles['base-style']} h-100 flex-center flex-space-a`}>
					<Button type="primary" onClick={initUser}>
						InitUser
					</Button>
					<Button type="ghost" onClick={useAge}>
						ageAdd
					</Button>
				</div>
			</Col>
		</Row>
	);
};

export default ReduxView;
