import React, { FC } from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { IRouteItem } from '../../routes';
import styles from './index.module.scss';
const { Item } = Breadcrumb;

export interface IAppBreadcrumbProps {
	routes: IRouteItem[];
}

const AppBreadcrumb: FC<IAppBreadcrumbProps> = (props) => {
	const renderBreadcrumbItem = (routes: IRouteItem[]): any => {
		const map = routes
			.filter(Boolean)
			.map((item) => <Item key={item.path}>{item.meta.title}</Item>);

		return routes?.[0]?.path === '/home'
			? []
			: [
					<Item key="/home">
						<Link to="/home">首页</Link>
					</Item>,
					...map
			  ];
	};
	return (
		<Breadcrumb className={styles['breadcrumb-wrap']}>
			{[...renderBreadcrumbItem(props.routes)]}
		</Breadcrumb>
	);
};

export default AppBreadcrumb;
