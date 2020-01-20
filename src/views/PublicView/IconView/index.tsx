import React, { FC } from 'react';
// 使用iconfont.cn
import { createFromIconfontCN } from '@ant-design/icons';
import { Row, Col } from 'antd';

import styles from './index.module.scss';
const IconFont = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_252253_dswsg98kqt8.js'
});

const IconView: FC = () => {
	return (
		<Row gutter={16}>
			<Col span={24}>
				<div className={styles['base-style']}>
					<span>语义化的矢量图形</span>
				</div>
			</Col>
			<Col span={12}>
				<div className={`${styles['base-style']} flex flex-space-a`}>
					<IconFont type="icon-favorites" className="f-s-50" />
					<IconFont type="icon-xiajiantou" className="f-s-40" />
					<IconFont type="icon-xin" className="f-s-30" />
					<IconFont type="icon-huo" className="f-s-20" />
				</div>
			</Col>
			<Col span={12}>
				<div className={`${styles['base-style']} flex flex-space-a`}>
					<IconFont type="icon-jifen1" className="f-s-20" />
					<IconFont type="icon-skip" className="f-s-30" />
					<IconFont type="icon-delete" className="f-s-40" />
					<IconFont type="icon-jifen" className="f-s-50" />
				</div>
			</Col>
		</Row>
	);
};

export default IconView;
