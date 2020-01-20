import React, { FC, useState, Suspense } from 'react';
import { Layout } from 'antd';
import classnames from 'classnames';
import s from 'store2';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import AppAside from '../AppAside';
import routes, { IRouteItem } from '../../routes';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import ErrorBoundary from '../../utils/error-boundary';
import LoadingComponent from '../../utils/loading-component';
import AppBreadcrumb from '../../components/AppBreadcrumb';
import Page404 from '../../views/Page404';
import styles from './index.module.scss';
const { Content } = Layout;

const auth = s('auth');

const LayoutIndex: FC<RouteComponentProps> = (props) => {
	// Aside 折叠控制
	const [collapsed, setCollapsed] = useState(false);
	// render Route
	const renderRoute = (routes: IRouteItem[]): any => {
		return routes.reduce(
			(arr, item) =>
				arr.concat(
					item.children?.length ? (
						renderRoute(item.children)
					) : // 对权限进行过滤，匹配是否有此路由
					!item.meta.auth || item.meta.auth.includes(auth) ? (
						<Route key={item.path} path={item.path} component={item.component} />
					) : (
						[]
					)
				),
			[]
		);
	};
	// 面包屑 location 定位当前路由object
	const getLocationPathRoute = (routes: IRouteItem[]) => {
		const {
			location: { pathname }
		} = props;
		const pathArr = pathname.split('/').filter(Boolean);
		let tempRouteItem: IRouteItem;
		let tempRoutes: IRouteItem[] = routes;
		let targetRoutes: IRouteItem[] = [];
		for (let i = 0; i < pathArr.length; i++) {
			tempRouteItem = getRouteItemByPath(tempRoutes, pathArr.slice(0, i + 1).join('/'))[0];
			targetRoutes.push(tempRouteItem);
			tempRoutes = tempRouteItem?.children as IRouteItem[];
		}
		return targetRoutes;
	};
	const getRouteItemByPath = (routes: IRouteItem[], path: string) => {
		return routes.filter((item) => item.path.endsWith(path));
	};

	return (
		<Layout>
			<AppAside collapsed={collapsed} routes={routes} auth={auth} />
			<Layout
				className={classnames(
					styles['app-content-wrap'],
					{ 'm-l-80': collapsed },
					{ 'm-l-200': !collapsed }
				)}
			>
				<AppHeader
					collapsed={collapsed}
					toggle={setCollapsed}
					avatar="http://file.popoho.com/wzfzl/20160706/r0cznt20es5co140330143034-11.gif"
				/>
				<Content className="p-15">
					<AppBreadcrumb routes={getLocationPathRoute(routes)} />
					<ErrorBoundary>
						<Suspense fallback={<LoadingComponent />}>
							<Switch>
								{[...renderRoute(routes)]}
								<Route component={Page404} />
							</Switch>
						</Suspense>
					</ErrorBoundary>
				</Content>
				<AppFooter />
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
