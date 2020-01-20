/* eslint-disable */
const {
	override,
	overrideDevServer,
	disableChunk,
	setWebpackPublicPath,
	fixBabelImports,
	addWebpackAlias,
	addWebpackPlugin
} = require('customize-cra');
const path = require('path');
// gzip 压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const paths = require('react-scripts/config/paths');

// 项目名称
const projectName = process.env.NODE_ENV === 'production' ? process.env.BASE_URL : '';
// 打包配置
const addCustomize = () => (config) => {
	if (process.env.NODE_ENV === 'production') {
		// 关闭sourceMap
		config.devtool = false;
		// 配置打包后的文件位置
		paths.appBuild = path.join(path.dirname(paths.appBuild), projectName);
		config.output.path = path.join(path.dirname(config.output.path), projectName);
		// 添加js打包gzip配置
		config.plugins.push(
			new CompressionWebpackPlugin({
				algorithm: 'gzip',
				minRatio: 0.8,
				test: /\.js$|\.css/, // 匹配文件名
				threshold: 10240, // 超过10k进行压缩
				deleteOriginalAssets: true // 是否删除源文件
			})
		);
	}
	return config;
};
// 跨域配置
const devServerConfig = () => (config) => {
	return {
		...config,
		compress: true,
		proxy: {
			[process.env.BASE_API]: {
				target: `http://127.0.0.1:3001/api`,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.BASE_API]: ''
				}
			}
		}
	};
};
//生产环境去除console.* functions
const dropConsole = () => {
	return (config) => {
		if (config.optimization.minimizer) {
			config.optimization.minimizer.forEach((minimizer) => {
				if (minimizer.constructor.name === 'TerserPlugin') {
					minimizer.options.terserOptions.compress.drop_console = true;
					minimizer.options.terserOptions.compress.drop_debugger = true;
				}
			});
		}
		return config;
	};
};
// dayjs 代替momentjs 减小打包大小
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = {
	webpack: override(
		addWebpackAlias({
			['@']: path.resolve(__dirname, 'src')
		}),
		fixBabelImports('import', {
			libraryName: 'antd',
			libraryDirectory: 'es',
			style: 'css'
		}),
		addWebpackPlugin(new AntdDayjsWebpackPlugin()),
		disableChunk(),
		addCustomize(),
		setWebpackPublicPath(`/${projectName}`),
		dropConsole()
	),
	devServer: overrideDevServer(devServerConfig())
};