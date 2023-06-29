"use client";
import React, { useEffect } from "react";
import LoginForm from "@/components/organisms/loginForm";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { Login } from "@/slices/authSlice";
import { useRouter } from 'next/navigation'

function LoginTemplate() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const loggedIn = useAppSelector((state) => state.auth.loggedIn);

	const adminLogin = (data: { username: string; password: string }) => {
		dispatch(
			Login({
				username: data.username,
				password: data.password,
			})
		);
	};

	useEffect(() => {
		if (loggedIn) {
			router.push("/dashboard/main");
		}
	}, [loggedIn]);

	return (
		<>
			<LoginForm func={adminLogin} />
		</>
	);
}

export default LoginTemplate;
