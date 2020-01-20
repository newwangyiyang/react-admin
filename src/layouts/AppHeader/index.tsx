import React, { FC } from 'react';
import { Layout, Menu, Badge, Dropdown, Avatar } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	EditOutlined,
	SettingOutlined,
	LogoutOutlined,
	GithubOutlined,
	BellOutlined
} from '@ant-design/icons';
import styles from './index.module.scss';

export interface IAppHeaderProps {
	collapsed: boolean;
	toggle: (b: boolean) => void;
	avatar: string;
}

const AppHeader: FC<IAppHeaderProps> = (props) => {
	const { collapsed, toggle, avatar } = props;

	const changeCollapsed = () => toggle(!collapsed);

	const menu = (
		<Menu>
			<Menu.ItemGroup title="用户设置">
				<Menu.Divider />
				<Menu.Item>
					<EditOutlined />
					个人设置
				</Menu.Item>
				<Menu.Item>
					<SettingOutlined />
					系统设置
				</Menu.Item>
			</Menu.ItemGroup>
			<Menu.Divider />
			<Menu.Item>
				<span>
					<LogoutOutlined /> 退出登录
				</span>
			</Menu.Item>
		</Menu>
	);

	return (
		<div className={styles['header-wrap']}>
			<Layout.Header className={`${styles.header} flex-center flex-space-b`}>
				{collapsed ? (
					<MenuUnfoldOutlined
						className={`${styles['collapsed-icon']} f-s-22`}
						onClick={changeCollapsed}
					/>
				) : (
					<MenuFoldOutlined
						className={`${styles['collapsed-icon']} f-s-22`}
						onClick={changeCollapsed}
					/>
				)}
				<div className="flex-center">
					<a
						rel="noopener noreferrer"
						href="https://github.com/newwangyiyang"
						target="_blank"
						className="col-1 m-r-10"
					>
						<GithubOutlined className="f-s-18" />
					</a>
					<a
						rel="noopener noreferrer"
						href="https://github.com/newwangyiyang"
						target="_blank"
						className="col-1 m-r-10"
					>
						<Badge dot={true} offset={[-2, 0]}>
							<BellOutlined />
						</Badge>
					</a>
					<Dropdown overlay={menu} overlayStyle={{ width: '20rem' }}>
						<div className="ant-dropdown-link">
							<Avatar src={avatar} alt="avatar" style={{ cursor: 'pointer' }} />
						</div>
					</Dropdown>
				</div>
			</Layout.Header>
		</div>
	);
};

export default AppHeader;
