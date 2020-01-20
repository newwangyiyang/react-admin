import React, { FC } from 'react';
import ReactEcharts from 'echarts-for-react';

const GeoEchart: FC = () => {
	const initEcharts = () => ({
		title: {
			text: '浏览器占比变化',
			subtext: '纯属虚构',
			top: 10,
			left: 10
		},
		tooltip: {
			trigger: 'item',
			backgroundColor: 'rgba(0,0,250,0.2)'
		},
		legend: {
			type: 'scroll',
			bottom: 10,
			data: (function() {
				let list = [];
				for (let i = 1; i <= 28; i++) {
					list.push(String(i + 2000));
				}
				return list;
			})()
		},
		visualMap: {
			top: 'middle',
			right: 10,
			color: ['red', 'yellow'],
			calculable: true
		},
		radar: {
			indicator: [
				{ text: 'IE8-', max: 400 },
				{ text: 'IE9+', max: 400 },
				{ text: 'Safari', max: 400 },
				{ text: 'Firefox', max: 400 },
				{ text: 'Chrome', max: 400 }
			]
		},
		series: (function() {
			let series = [];
			for (let i = 1; i <= 28; i++) {
				series.push({
					name: '浏览器（数据纯属虚构）',
					type: 'radar',
					symbol: 'none',
					lineStyle: {
						width: 1
					},
					emphasis: {
						areaStyle: {
							color: 'rgba(0,250,0,0.3)'
						}
					},
					data: [
						{
							value: [
								(40 - i) * 10,
								(38 - i) * 4 + 60,
								i * 5 + 10,
								i * 9,
								(i * i) / 2
							],
							name: String(i + 2000)
						}
					]
				});
			}
			return series;
		})()
	});
	// TODO: resize => echarts
	return (
		<ReactEcharts
			option={initEcharts()}
			style={{ height: '350px', width: '100%' }}
			className="react_for_echarts"
		/>
	);
};

export default GeoEchart;
