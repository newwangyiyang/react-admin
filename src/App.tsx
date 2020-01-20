import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './assets/css/reset.css';
import 'animate.css';
import './assets/scss/scss-base-config.scss';

import LoadingComponent from './utils/loading-component';
import ErrorBoundary from './utils/error-boundary';

const Page404 = lazy(() => import(/* webpackChunkName: 'Page404' */ './views/Page404'));
const Page500 = lazy(() => import(/* webpackChunkName: 'Page500' */ './views/Page500'));
const Login = lazy(() => import(/* webpackChunkName: 'Login' */ './views/Login'));
const Layout = lazy(() => import(/* webpackChunkName: 'Layout' */ './layouts/Index'));

// 控制用户是否已登录: store 或者 localStorage 进行判断，决定页面跳转
const isLogin = true;

const App: React.FC = () => {
	return (
		<Router>
			<ErrorBoundary>
				<Suspense fallback={<LoadingComponent />}>
					<Switch>
						{/* 精确匹配是不是在首页 */}
						<Route path="/" exact render={() => <Redirect to="/home" />} />
						{/* 登录 */}
						<Route
							path="/login"
							render={(props) =>
								isLogin ? <Redirect to="/" /> : <Login {...props} />
							}
						/>
						{/* 错误页面 */}
						<Route path="/404" component={Page404} />
						<Route path="/500" component={Page500} />
						{/* UI => Layout 页面 => 路由鉴权 */}
						<Route
							render={(props) =>
								isLogin ? <Layout {...props} /> : <Redirect to="/login" />
							}
						/>
						{/* 匹配不到路径，统一重定向到404页面 */}
						<Redirect to="/404" />
					</Switch>
				</Suspense>
			</ErrorBoundary>
		</Router>
	);
};

export default App;

/**
 * 暂时未采用react-loadable
 * @reason: 该库会导致 react 报警告: UNSAFE_componentWillMount...
 * import loadable from './utils/loadable';
 * const Page404 = loadable(() => import(/* webpackChunkName: 'Page404' / './views/Page404'));
 */
