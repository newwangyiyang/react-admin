import React, { FC, useState, useEffect } from 'react';
import { IRouteItem } from '../../routes';
import { Menu } from 'antd';
import { Link, RouteComponentProps } from 'react-router-dom';

export interface IAppMenuProps extends RouteComponentProps {
	routes: IRouteItem[];
	auth: string;
}

const AppMenu: FC<IAppMenuProps> = (props) => {
	const [openKeys, setOpenKeys] = useState<string[]>([]);
	const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
	const { routes, auth } = props;
	useEffect(() => {
		const {
			location: { pathname }
		} = props;
		setOpenKeys(getOpenKeysByPathname(pathname));
		setSelectedKeys([pathname]);
	}, [props]);

	const getOpenKeysByPathname = (pathname: string) => {
		const pathArr = pathname.split('/').filter(Boolean);
		return pathArr.reduce<string[]>(
			(arr, item, index) => arr.concat(index > 0 ? `${arr[index - 1]}/${item}` : `/${item}`),
			[]
		);
	};

	// 始终保持只有一个菜单展开
	const onOpenChange = (openKeys: string[]) => {
		if (openKeys.length === 0 || openKeys.length === 1) {
			setOpenKeys(openKeys);
			return;
		}
		const lastestOpenKey = openKeys[openKeys.length - 1];
		if (openKeys.includes(lastestOpenKey)) {
			setOpenKeys(openKeys);
		} else {
			setOpenKeys([lastestOpenKey]);
		}
	};

	const renderMenuItem = (routeItem: IRouteItem) => {
		const {
			path,
			meta: { icon, title }
		} = routeItem;
		return (
			<Menu.Item key={path}>
				<Link to={path}>
					{icon}
					<span>{title}</span>
				</Link>
			</Menu.Item>
		);
	};

	const renderMenuSubItem = (routeChildrenItem: IRouteItem) => {
		const {
			path,
			children = [],
			meta: { icon, title }
		} = routeChildrenItem;
		return (
			<Menu.SubMenu
				key={path}
				title={
					<span>
						{icon}
						<span>{title}</span>
					</span>
				}
			>
				{/* 子项 SubMenu 进行filter 权限过滤 */}
				{children
					.filter((item) => !item.meta.auth || item.meta.auth.includes(auth))
					.map((item) =>
						item.children && item.children.length > 0
							? renderMenuSubItem(item)
							: renderMenuItem(item)
					)}
			</Menu.SubMenu>
		);
	};
	return (
		<Menu
			selectedKeys={selectedKeys}
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			mode="inline"
			theme="dark"
		>
			{/* filter 对权限进行过滤 */}
			{routes
				.filter((item) => !item.meta.auth || item.meta.auth.includes(auth))
				.map((item) =>
					item.children && item.children.length > 0
						? renderMenuSubItem(item)
						: renderMenuItem(item)
				)}
		</Menu>
	);
};

export default AppMenu;
