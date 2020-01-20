-   react-admin

#### react-router-dom

#### sass

-   scss-package
-   classnames
    ```tsx
    import classnames from 'classnames';
    <div className={classNames('dog', { cat: true, fish: false })} />;
    // style
    <div className={classnames('bg-4', { [styles['home-wrap']]: true })}>
    ```
-   index.module.scss

    -   最新 react-app 已默认加入 cssModule，自动映射作用域

        ```tsx
        import styles from 'index.module.scss';
        const Home = () => {
        	return <div className={styles.wrap}>...</div>;
        };
        ```

#### 路由懒加载

-   react-loadable: 暂时先移除，不需要支持服务端渲染
    -   注意: 该库会导致 react 报警告: UNSAFE_componentWillMount...
    -   需时刻关注该库的时候升级
-   React.lazy, Suspense: 原生进行代码分割

    ```tsx
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import React, { Suspense, lazy } from 'react';
    const Home = lazy(() => import(/* webpackChunkName: 'Home' */ './routes/Home'));
    const About = lazy(() => import(/* webpackChunkName: 'About' */ './routes/About'));

    const App = () => (
    	<Router>
    		<Suspense fallback={<div>Loading...</div>}>
    			<Switch>
    				<Route exact path="/" component={Home} />
    				<Route path="/about" component={About} />
    			</Switch>
    		</Suspense>
    	</Router>
    );
    ```

#### webpack 扩展

-   react-app-rewired customize-cra 去覆盖 webpack 的默认配置
-   yarn add react-app-rewired customize-cra -D

```js
// config-overrides.js
// 配置别名
const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
	addWebpackAlias({
		['@']: path.resolve(__dirname, 'src')
	})
);
```

```json
    // 修改package.json中的scripts
    "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
    }
```

#### axios 封装

#### mocks: json-server

#### antd: 最新版本: "antd": "4.0.0-rc.1"

#### react-use

#### 可选链

-   obj?.name?.a?.b
-   arr?.[0]

#### axios-loading-component: 页面渲染需加载数据，组件封装: loading、error 等对应状态信息

#### layouts 布局封装

#### 权限管理: 根据路由 auth 字段进行权限匹配

#### 富文本: braft-editor

#### 动画

#### redux: TODO: useSelect useDispatch

#### 简单的路由鉴权: 需跟实际项目而定
