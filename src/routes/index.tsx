import React, { lazy, FC, ReactNode } from 'react';
import {
	HomeOutlined,
	AppstoreAddOutlined,
	RadiusBottomleftOutlined,
	ProjectOutlined
} from '@ant-design/icons';

const Home = lazy(() => import(/* webpackChunkName: 'Home' */ '../views/Home'));
const ButtonView = lazy(() =>
	import(/* webpackChunkName: 'ButtonView' */ '../views/PublicView/ButtonView')
);
const IconView = lazy(() =>
	import(/* webpackChunkName: 'IconView' */ '../views/PublicView/IconView')
);
const EditorView = lazy(() =>
	import(/* webpackChunkName: 'EditorView' */ '../views/OthersView/EditorView')
);
const AnimationView = lazy(() =>
	import(/* webpackChunkName: 'AnimationView' */ '../views/OthersView/AnimationView')
);
const CommonView = lazy(() =>
	import(/* webpackChunkName: 'CommonView' */ '../views/ReduxView/CommonView')
);
const ThunkView = lazy(() =>
	import(/* webpackChunkName: 'ThunkView' */ '../views/ReduxView/ThunkView')
);

export interface IRouteMeta {
	title: string;
	icon?: ReactNode;
	auth?: string[];
}

export interface IRouteItem {
	path: string;
	name: string;
	component?: React.LazyExoticComponent<FC>;
	meta: IRouteMeta;
	children?: IRouteItem[];
}

const routes: IRouteItem[] = [
	{
		path: '/home',
		name: 'Home',
		component: Home,
		meta: {
			title: '首页',
			icon: <HomeOutlined />
		}
	},
	{
		path: '/public',
		name: 'Public',
		meta: {
			title: '通用',
			icon: <AppstoreAddOutlined />
		},
		children: [
			{
				path: '/public/button',
				name: 'Button',
				component: ButtonView,
				meta: {
					title: '按钮'
				}
			},
			{
				path: '/public/icon',
				name: 'Icon',
				component: IconView,
				meta: {
					title: '图标'
				}
			}
		]
	},
	{
		path: '/other',
		name: 'Other',
		meta: {
			title: '其它',
			icon: <RadiusBottomleftOutlined />
		},
		children: [
			{
				path: '/other/editor',
				name: 'Editor',
				component: EditorView,
				meta: {
					title: '富文本'
				}
			},
			{
				path: '/other/animation',
				name: 'Animation',
				component: AnimationView,
				meta: {
					title: 'AnimateCSS'
				}
			}
		]
	},
	{
		path: '/redux',
		name: 'Redux',
		meta: {
			title: 'Redux',
			icon: <ProjectOutlined />
		},
		children: [
			{
				path: '/redux/common',
				name: 'Common',
				component: CommonView,
				meta: {
					title: 'Common'
				}
			},
			{
				path: '/redux/thunk',
				name: 'thunk',
				component: ThunkView,
				meta: {
					title: 'Thunk'
				}
			}
		]
	}
];

export default routes;
