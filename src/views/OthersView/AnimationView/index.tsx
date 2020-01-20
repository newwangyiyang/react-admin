import React, { FC, useState, useEffect } from 'react';
import styles from './index.module.scss';
import { Tabs, Col, Row, Button } from 'antd';
import classnames from 'classnames';
const { TabPane } = Tabs;

const animateType = [
	{
		title: '进场',
		type: [
			'bounceInDown',
			'bounceInLeft',
			'bounceInRight',
			'bounceInUp',
			'fadeIn',
			'fadeInDown',
			'fadeInLeft',
			'fadeInLeftBig',
			'fadeInRight',
			'fadeInRightBig',
			'fadeInUp',
			'fadeInUpBig',
			'flipInX',
			'flipInY',
			'rotateIn'
		]
	},
	{
		title: '出场',
		type: [
			'bounceOut',
			'bounceOutDown',
			'bounceOutLeft',
			'bounceOutRight',
			'bounceOutUp',
			'fadeInDown',
			'fadeOut',
			'fadeOutDown',
			'fadeOutDownBig',
			'fadeOutLeft',
			'fadeOutLeftBig',
			'fadeOutRight',
			'fadeOutRightBig',
			'fadeOutUp',
			'fadeOutUpBig',
			'rotateOut'
		]
	},
	{
		title: '其它',
		type: [
			'bounceIn',
			'bounce',
			'flash',
			'pulse',
			'rubberBand',
			'shake',
			'headShake',
			'swing',
			'tada',
			'wobble',
			'jello'
		]
	}
];

const AnimationView: FC = () => {
	const [active, setActive] = useState(true);

	const [animateClass, setAnimateClass] = useState('animated rotateIn');

	useEffect(() => {
		setTimeout(() => {
			setActive(false);
		}, 800);
	}, [animateClass, active]);

	const changeAnimateClass = (animateClass: string) => {
		setActive(true);
		setAnimateClass(animateClass);
	};
	return (
		<Row>
			<Col span={24}>
				<div className={styles['base-style']}>
					<span>AnimateCSS动画展示</span>
				</div>
			</Col>
			<Col span={24}>
				<div className={styles['base-style']}>
					<Tabs defaultActiveKey="1" tabPosition="left">
						{animateType.map((animateItem) => (
							<TabPane tab={animateItem.title} key={animateItem.title}>
								<div className="flex-center flex-wrap h-140">
									{animateItem.type.map((typeItem, index) => (
										<Button
											className="m-r-10"
											type="primary"
											size="small"
											key={index}
											ghost
											onClick={() =>
												changeAnimateClass(`animated ${typeItem}`)
											}
										>
											{typeItem}
										</Button>
									))}
								</div>
							</TabPane>
						))}
					</Tabs>
				</div>
			</Col>
			<Col span={24}>
				<div className={`${styles['base-style']} flex-center h-140`}>
					<p className={classnames('f-s-50 f-w-500 m-b-0', { [animateClass]: active })}>
						Animate.css
					</p>
				</div>
			</Col>
		</Row>
	);
};

export default AnimationView;
