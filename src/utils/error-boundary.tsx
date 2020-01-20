import React from 'react';
import Page500 from '../views/Page500';

export interface IErrotBoundaryState {
	hasError: boolean;
}
/**
 * 错误边界
 * 页面抛出异常，展示该组件
 */
export default class ErrorBoundary extends React.Component<{}, IErrotBoundaryState> {
	public static getDerivedStateFromError(error: any) {
		// 更新 state 使下一次渲染能够显示降级后的 UI
		return { hasError: true };
	}
	public readonly state = { hasError: false };

	/* private componentDidCatch(error, errorInfo) {
		// 将错误日志上传到服务器
		logErrorToMyService(error, errorInfo);
	} */

	public render() {
		if (this.state.hasError) {
			// 展示异常友好提示页面
			return <Page500 />;
		}
		return this.props.children;
	}
}
