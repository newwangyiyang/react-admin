import React, { FC, useState } from 'react';
import { Row, Col, Button, Tooltip, Radio } from 'antd';
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { RadioChangeEvent } from 'antd/lib/radio';
import { SizeType } from 'antd/lib/config-provider/SizeContext';

const ButtonView: FC = () => {
	const [size, setSize] = useState<SizeType>('large');

	const handleSizeChange = (e: RadioChangeEvent) => {
		setSize(e.target.value);
	};

	return (
		<Row gutter={8} className={styles['button-wrap']}>
			<Col span={24}>
				<div className={styles['base-style']}>
					<span>
						标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑
					</span>
				</div>
			</Col>
			<Col span={12}>
				<div className={styles['base-style']}>
					<Button type="primary">Primary</Button>
					<Button>Default</Button>
					<Button type="dashed">Dashed</Button>
					<Button type="link">Link</Button>
				</div>
			</Col>
			<Col span={12}>
				<div className={styles['base-style']}>
					<Tooltip title="search">
						<Button type="primary" shape="circle" icon={<SearchOutlined />} />
					</Tooltip>
					<Button type="primary" shape="circle">
						A
					</Button>
					<Button type="primary" icon={<SearchOutlined />}>
						Search
					</Button>
					<Tooltip title="search">
						<Button shape="circle" icon={<SearchOutlined />} />
					</Tooltip>
					<Button icon={<SearchOutlined />}>Search</Button>
					<Tooltip title="search">
						<Button shape="circle" icon={<SearchOutlined />} />
					</Tooltip>
					<Button icon={<SearchOutlined />}>Search</Button>
					<Tooltip title="search">
						<Button type="dashed" shape="circle" icon={<SearchOutlined />} />
					</Tooltip>
					<Button type="dashed" icon={<SearchOutlined />}>
						Search
					</Button>
				</div>
			</Col>
			<Col span={12}>
				<div className={styles['base-style']}>
					<Radio.Group value={size} onChange={handleSizeChange}>
						<Radio.Button value="large">Large</Radio.Button>
						<Radio.Button value="default">Default</Radio.Button>
						<Radio.Button value="small">Small</Radio.Button>
					</Radio.Group>
					<br />
					<br />
					<Button type="primary" size={size}>
						Primary
					</Button>
					<Button size={size}>Default</Button>
					<Button type="dashed" size={size}>
						Dashed
					</Button>
					<br />
					<Button type="link" size={size}>
						Link
					</Button>
					<br />
					<Button type="primary" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
					<Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
						Download
					</Button>
					<Button type="primary" icon={<DownloadOutlined />} size={size}>
						Download
					</Button>
				</div>
			</Col>
			<Col span={12}>
				<div className={styles['base-style']}>
					<Button type="primary">Primary</Button>
					<Button type="primary" disabled>
						Primary(disabled)
					</Button>
					<br />
					<Button>Default</Button>
					<Button disabled>Default(disabled)</Button>
					<br />
					<Button type="dashed">Dashed</Button>
					<Button type="dashed" disabled>
						Dashed(disabled)
					</Button>
					<br />
					<Button type="link">Link</Button>
					<Button type="link" disabled>
						Link(disabled)
					</Button>
					<br />
					<Button type="link" danger>
						Danger Link
					</Button>
					<Button type="link" danger disabled>
						Danger Link(disabled)
					</Button>
					<Button danger disabled>
						Danger Default(disabled)
					</Button>
				</div>
			</Col>
			<Col span={12}>
				<div
					className={`${styles['base-style']}`}
					style={{ backgroundColor: 'rgb(190, 200, 200)' }}
				>
					<Button type="primary" ghost>
						Primary
					</Button>
					<Button ghost>Default</Button>
					<Button type="dashed" ghost>
						link
					</Button>
					<Button type="link" ghost>
						link
					</Button>
				</div>
			</Col>
			<Col span={12}>
				<div className={styles['base-style']}>
					<Button type="primary" danger>
						Primary
					</Button>
					<Button danger>Default</Button>
					<Button type="dashed" danger>
						link
					</Button>
					<Button type="link" danger>
						link
					</Button>
				</div>
			</Col>
		</Row>
	);
};

export default ButtonView;
