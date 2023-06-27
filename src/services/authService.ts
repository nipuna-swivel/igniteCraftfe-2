import {axiosInstence} from "@/http.common";

const login = (authCredentials: string) => {
	return axiosInstence.post("/auth/login", authCredentials);
};

const AuthService = { login };

export default AuthService;
