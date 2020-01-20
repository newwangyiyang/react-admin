import React, { FC } from 'react';
import { AsyncState } from 'react-use/lib/useAsync';
import Page500 from '../views/Page500';
import { Spin } from 'antd';
/**
 * 封装需要初始化页面组件
 * 包含loading、error状态
 * @param props
 */
const AxiosLoadingComponent: FC<AsyncState<Ajax.AjaxResponse>> = (props) => {
	return (
		<div>
			{props.loading ? (
				<div className="w-100p h-400 flex-center">
					<Spin size="large" tip="loading" />
				</div>
			) : props.error ? (
				<Page500 />
			) : (
				<div>{props.children}</div>
			)}
		</div>
	);
};

export default AxiosLoadingComponent;
