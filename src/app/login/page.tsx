"use client";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const App: React.FC = () => {
	const onFinish = (values: any) => {
		console.log("Received values of form: ", values);
	};

	return (
		<div className="flex justify-center items-center h-screen ">
			<div className="border-solid border-2 border-sky-500 p-12">
				<Form
					name="normal_login"
					className=" "
					initialValues={{ remember: true }}
					style={{ maxWidth: 600 }}
					onFinish={onFinish}>
					<Form.Item
						name="username"
						rules={[
							{ required: true, message: "Please input your Username!" },
						]}>
						<Input
							prefix={<UserOutlined className="site-form-item-icon" />}
							placeholder="Username"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{ required: true, message: "Please input your Password!" },
						]}>
						<Input
							prefix={<LockOutlined className="site-form-item-icon" />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item></Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button">
							Log in
						</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default App;
