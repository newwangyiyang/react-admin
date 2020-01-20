// 解决import引入scss文件提示找不到模块问题
declare module '*.scss' {
	const content: any;
	export default content;
}

// 解决import引入图片提示找不到模块问题
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';

declare namespace Ajax {
	// axios 返回数据
	export interface AxiosResponse {
		data: AjaxResponse;
	}

	// 请求接口数据
	export type AjaxResponse = any[];
	// export interface AjaxResponse {
	// 	code?: number;
	// 	data?: any;
	// 	object?: any;
	// 	obj?: any;
	// 	msg?: string;
	// 	message?: string;
	// 	statusCode?: number;
	// }
}
