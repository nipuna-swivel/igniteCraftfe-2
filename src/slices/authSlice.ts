import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthDataService from "@/services/authService";
import { IAuth, IAuthState } from "@/services/interfaces";

const initialState: IAuthState = {
    authCredentials: {},
    loading: false,
    jwtToken: "",
    error: "",
    successMessage: "",
    username: "",
    password: ""
};

export const Login: any = createAsyncThunk(
	"auth/login",
	async ({ username, password }: IAuth, { rejectWithValue }) => {
		try {
		const response =	await AuthDataService.login({ username, password });
		console.log("login successful",response)
		return response.data
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//retrive all products
		builder.addCase(Login.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(Login.fulfilled, (state, action) => {
			state.loading = false;
			state.jwtToken = action.payload.access_token;
			console.log("action", action)
			console.log("accessToken", state.jwtToken);
		});
		builder.addCase(Login.rejected, (state) => {
			state.loading = false;
			state.jwtToken = "";
		});
	},
});

const { reducer } = authSlice;
export default reducer;