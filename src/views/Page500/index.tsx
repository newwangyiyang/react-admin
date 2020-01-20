import React, { FC } from 'react';
import img500 from '@/assets/images/500.png';

const Page500: FC = () => {
	return (
		<div className="flex-col flex-center p-t-60">
			<img className="w-600" src={img500} alt="" />
			<p className="f-s-16 col-2">啊哦~，服务器有点小问题，请稍后重试！！！</p>
		</div>
	);
};

export default Page500;
