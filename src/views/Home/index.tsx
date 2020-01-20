import React, { FC, ReactNode } from 'react';
import screenfull from 'screenfull';
import styles from './index.module.scss';
import { Row, Col, Divider } from 'antd';
import {
	WechatOutlined,
	QqOutlined,
	DingdingOutlined,
	WeiboOutlined,
	FullscreenOutlined
} from '@ant-design/icons';
import BarEchart from './components/BarEchart';
import LineEchart from './components/LineEchart';
import PieEchart from './components/PieEchart';
import ScatterEchart from './components/ScatterEchart';
import GeoEchart from './components/GeoEchart';

export interface IHeaderRowItem {
	icon: ReactNode;
	num: number;
	title: string;
	color: string;
}

const headerRowData: IHeaderRowItem[] = [
	{
		icon: <WechatOutlined className={styles['base-icon']} />,
		num: 999,
		title: '微信',
		color: 'wechat'
	},
	{
		icon: <QqOutlined className={styles['base-icon']} />,
		num: 666,
		title: 'QQ',
		color: 'qq'
	},
	{
		icon: <DingdingOutlined className={styles['base-icon']} />,
		num: 333,
		title: '钉钉',
		color: 'dingding'
	},
	{
		icon: <WeiboOutlined className={styles['base-icon']} />,
		num: 111,
		title: '微博',
		color: 'weibo'
	}
];

const Home: FC = () => {
	const fullPageClick = () => {
		if (screenfull.isEnabled) {
			screenfull.request(document.getElementById('bar') as HTMLDivElement);
		}
	};
	return (
		<div className={styles['home-wrap']}>
			<Row gutter={16}>
				{headerRowData.map((item) => (
					<Col span={6} key={item.color}>
						<div
							className={`${styles['base-style']} ${styles[item.color]} f-s-50 flex`}
						>
							{item.icon}
							<div className="flex-col m-l-10 col-0">
								<span className="f-s-18 f-w-600">{item.num}</span>
								<span className="f-s-14">{item.title}</span>
							</div>
						</div>
					</Col>
				))}
			</Row>
			<Row>
				<Col span={24}>
					<div className={styles['base-style']}>
						<div className="flex-center flex-space-b">
							<span>FullPage</span>
							<FullscreenOutlined onClick={fullPageClick} />
						</div>
						<Divider />
						<BarEchart />
					</div>
				</Col>
			</Row>
			<Row gutter={8}>
				<Col span={12}>
					<div className={styles['base-style']}>
						<LineEchart />
					</div>
				</Col>
				<Col span={12}>
					<div className={styles['base-style']}>
						<PieEchart />
					</div>
				</Col>
				<Col span={12}>
					<div className={styles['base-style']}>
						<ScatterEchart />
					</div>
				</Col>
				<Col span={12}>
					<div className={styles['base-style']}>
						<GeoEchart />
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Home;
