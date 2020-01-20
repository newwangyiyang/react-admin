import React, { FC } from 'react';
import img404 from '@/assets/images/404.jpg';

const Page404: FC = () => {
	return (
		<div className="p-t-60 flex-col flex-center">
			<img className="w-350" src={img404} alt="页面未找到" />
			<p className="f-s-16 col-2 m-t-40">啊哦~您所要跳转的页面不在服务区！！！</p>
		</div>
	);
};

export default Page404;
