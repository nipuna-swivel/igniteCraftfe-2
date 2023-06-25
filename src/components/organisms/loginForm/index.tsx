import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "@/components/hooks";
import { useFormik } from "formik";
import Link from "next/link";
import { IAuth } from "@/services/interfaces";
import authSchema from "@/utils/authSchema";

interface Props {
	authCredentials: IAuth;
	handleLogin: (values: IAuth) => void;
}

function LoginForm({ authCredentials, handleLogin }: Props) {
	const formik = useFormik({
		initialValues: {
			username: "",
			password: "",
		} as IAuth,

		validationSchema: authSchema,

		onSubmit: (values: IAuth) => {
			handleLogin(values);
			console.log("submitted", values);
		},
	});

	useEffect(() => {
		formik.setFieldValue("username", authCredentials?.username);
		formik.setFieldValue("password", authCredentials?.password);
	}, [authCredentials, formik]);

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" onSubmit={formik.handleSubmit}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<Input
									id={"username"}
									name={"username"}
									type={"username"}
									autoComplete={"username"}
									className={`form-control ${
										formik.touched.username && formik.errors.username
											? "border-danger border-3"
											: "border-secondary-subtle border-1"
									}`}
									onChange={formik.handleChange}
									value={formik.values.username}
								/>
								{formik.touched.username && formik.errors.username && (
									<div className="text-danger">{formik.errors.username}</div>
								)}
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
							</div>
							<div className="mt-2">
								<Input
									id={"password"}
									name={"password"}
									type={"password"}
									autoComplete={"password"}
									className={`form-control ${
										formik.touched.password && formik.errors.password
											? "border-danger border-3"
											: "border-secondary-subtle border-1"
									}`}
									onChange={formik.handleChange}
									value={formik.values.password}
								/>
								{formik.touched.password && formik.errors.password && (
									<span className="text-danger">{formik.errors.password}</span>
								)}
							</div>
						</div>
						<Link href="/dashboard">Dashboard</Link>
						<div>
							<Button
								type={"submit"}
								className={
									"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								}
								name={"Signing in"}
							/>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default LoginForm;
