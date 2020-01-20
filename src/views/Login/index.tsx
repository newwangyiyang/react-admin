import React, { FC } from 'react';
import s from 'store2';
import styles from './index.module.scss';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import useAsyncFn from 'react-use/lib/useAsyncFn';
import { userLogin } from '../../api/login';
import { RouteComponentProps } from 'react-router-dom';

const Login: FC<RouteComponentProps> = (props) => {
	const [form] = Form.useForm();
	const { getFieldsValue } = form;

	const [state, login] = useAsyncFn(async () => {
		const { username, password } = getFieldsValue();
		const res = await userLogin(username, password);
		const { data } = res;
		// 判断登录成功，本地保存token 跟 auth(权限校验)
		if (data?.length) {
			s('token', data[0]['token']);
			s('auth', data[0]['auth']);
			props.history.replace('/');
		}
		return res;
	}, [getFieldsValue]);

	return (
		<div className={classnames(styles['login-wrap'], 'flex-center', 'flex-space-b', 'p-r-300')}>
			<span />
			<div className="w-300 p-15 p-t-20 0-b-20 bg-0 brs5 animated bounce">
				<h1 className="f-s-20 col-2 f-w-600">Login By Account</h1>
				<Form form={form} onFinish={login}>
					<Form.Item
						name="username"
						rules={[{ required: true, message: '请输入用户名' }]}
					>
						<Input
							prefix={<UserOutlined className={styles['input-icon']} />}
							placeholder="登录账号"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[{ required: true, message: '请输入登录密码' }]}
					>
						<Input.Password
							prefix={<LockOutlined className={styles['input-icon']} />}
							placeholder="登录密码"
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							loading={state.loading}
							className="w-100p"
						>
							Login
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default Login;
