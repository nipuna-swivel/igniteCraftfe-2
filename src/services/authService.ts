import http from "@/http.common";

const login = (authCredentials: string) => {
	return http.post("/login", authCredentials);
};

const AuthService = { login };

export default AuthService;
