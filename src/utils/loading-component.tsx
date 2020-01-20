import React, { Component } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

/**
 * nprogress
 * 页面未加载完毕展示的加载进度条
 */
export default class LoadingComponent extends Component {
	public constructor(props: any) {
		NProgress.start();
		super(props);
	}
	public componentDidMount() {
		NProgress.done();
	}
	public render() {
		return <div />;
	}
}
