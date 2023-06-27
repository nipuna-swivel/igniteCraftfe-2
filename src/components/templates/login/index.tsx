"use client";
import React from "react";
import LoginForm from "@/components/organisms/loginForm";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Login } from "@/slices/authSlice";

function LoginTemplate() {
	const dispatch = useAppDispatch();

	const adminLogin = (data: { username:string, password:string }) => {
		dispatch(
			Login({
				username: data.username,
				password: data.password,
			})
		);
	};

	return (
		<>
			<LoginForm func={adminLogin}/>
		</>
	);
}

export default LoginTemplate;
