import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Alert, Space } from "antd";

type Inputs = {
	username: string;
	password: string;
};

function LoginForm({ username, password }: Inputs) {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	console.log(errors);
	console.log(watch());
	const fn = watch("username");
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Sign in to your account-{fn}
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form
						className="space-y-6"
						onSubmit={handleSubmit((data) => {
							console.log(data);
						})}>
						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900">
								User Name
							</label>
							<div className="mt-2">
								<p className="text-rose-700">{errors.username?.message}</p>
								<input
									id={"username"}
									{...register("username", { required: "Username required" })}
									type={"username"}
									autoComplete={"username"}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
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
								<p className="text-rose-700">{errors.password?.message}</p>
								<input
									id={"password"}
									{...register("password", { required: "Password required" })}
									type={"password"}
									autoComplete={"password"}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<input
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
