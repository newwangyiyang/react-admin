import React, { FC } from 'react';
import { GithubOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import AppMenu from '../../components/AppMenu';
import { IRouteItem } from '../../routes';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styles from './index.module.scss';
const { Sider } = Layout;

export interface IAppAsideProps extends RouteComponentProps {
	collapsed: boolean;
	auth: string;
	routes: IRouteItem[];
}

const AppAside: FC<IAppAsideProps> = (props) => {
	return (
		<Sider
			className={styles['app-side-wrap']}
			trigger={null}
			collapsible
			collapsed={props.collapsed}
		>
			<div className="flex-center p-t-10 col-0">
				<a
					rel="noopener noreferrer"
					href="https://github.com/newwangyiyang"
					target="_blank"
				>
					<GithubOutlined className="f-s-30" style={{ color: '#fff' }} />
				</a>
			</div>
			<AppMenu {...props} />
		</Sider>
	);
};

export default withRouter(AppAside);
