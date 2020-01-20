import React, { FC } from 'react';
import { Row, Col, Button, message } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styles from './index.module.scss';
import { IDemoState } from '../../../store/demo/reducer';
import { IRootState } from '../../../store';
import { initDemoById } from '../../../store/demo/action';
const ThunkView: FC = () => {
	const demo: IDemoState = useSelector((state: IRootState) => state.demo);
	const dispatch = useDispatch();
	const getDemo = (id: string) => {
		message.info('请求中...');
		dispatch(initDemoById(id));
	};
	return (
		<Row gutter={16}>
			<Col span={10}>
				<div className={`${styles['base-style']} h-100`}>
					<h3>thunk异步: </h3>
					<p>{JSON.stringify(demo)}</p>
				</div>
			</Col>
			<Col span={5}>
				<div className={`${styles['base-style']} h-100 flex-center flex-space-a`}>
					<Button
						type="primary"
						onClick={() => {
							getDemo('m8u3i24qti');
						}}
					>
						asyncAjax
					</Button>
				</div>
			</Col>
		</Row>
	);
};

export default ThunkView;
