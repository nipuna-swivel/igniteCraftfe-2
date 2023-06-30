import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import OrderDataService from "@/services/orderService";
import { IOrder, IOrderState } from "@/services/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IOrderState = {
	orders: [],	
	loading: false,
	error: "",
	isAdded: false,
	isUpdated: false,
	successMessage: "",	
	isDeleted: false,  
};

export const createOrder: any = createAsyncThunk(
	"orders/create",
	async (
		{ date, productId, productTitle, qty, totalAmount }: IOrder,
		{ rejectWithValue }
	) => {
		try {
			await OrderDataService.create({
				date,
				productId,
				productTitle,				
				qty,
                totalAmount,
				
			});
			//AlertService.success("Employee created Success!!", "success");
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const retrieveOrder: any = createAsyncThunk(
	"orders/getAll",
	async () => {
		try {
			const res = await OrderDataService.getAll();
			return res.data;
		} catch (error) {
			console.log("there is an error in retrieve api call", error);
			//AlertService.error("there is an error in retrieve api call!!", "error");
		}
	}
);

export const updateOrder: any = createAsyncThunk(
	"orders/update",
	async (params: { empId: string; data: any }, { rejectWithValue }) => {
		try {
			const res = await OrderDataService.update(params.empId, params.data);
		//	AlertService.success("Employee updated Success!!", "success");
			return res.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const deleteOrder: any = createAsyncThunk(
	"orders/delete",
	async (id: string, { rejectWithValue }) => {
		try {
			await OrderDataService.remove(id);
			//AlertService.success("Employee deleted Success!!", "success");
			return id;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const findOrderById: any = createAsyncThunk(
	"orders/getbyid",
	async (id: string, { rejectWithValue }) => {
		try {
			const res = await OrderDataService.findById(id);
			return res.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

const orderSlice = createSlice({
	name: "orders",
	initialState,
	reducers: {
		reSetAdd: (state) => {
			state.isAdded = false;
		},
		reSetUpdate: (state) => {
			state.isUpdated = false;
		},
	},
	extraReducers: (builder) => {
		//retrive all employees
		builder.addCase(retrieveOrder.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(retrieveOrder.fulfilled, (state, action) => {
			state.loading = false;
			state.orders = action.payload;
			console.log("retrive slice", state.orders);
		});
		builder.addCase(retrieveOrder.rejected, (state) => {
			state.loading = false;
			state.orders = [];
		});

		//create a new employee
		builder.addCase(createOrder.fulfilled, (state, action) => {
			state.loading = false;
			state.isAdded = true;
			state.successMessage = "Successfully added the Order";
			state.error = "";
		});
		builder.addCase(
			createOrder.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);
		//update employee
		builder.addCase(updateOrder.fulfilled, (state) => {
			state.loading = false;
			state.isUpdated = true;
			state.successMessage = "Successfully updated product";
			state.error = "";
		});
		builder.addCase(
			updateOrder.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);

		//delete a employee
		builder.addCase(deleteOrder.pending, (state) => {
			state.loading = true;
			console.log("Delete pending", state);
		});
		builder.addCase(deleteOrder.fulfilled, (state, action) => {
			state.loading = false;
			state.successMessage = "Successfully deleted order";
			state.orders = state.orders.filter(
				(orders) => orders._id !== action.payload
			);
		});
		builder.addCase(
			deleteOrder.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);

		//get the employee by id
		builder.addCase(findOrderById.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(findOrderById.fulfilled, (state, action) => {
			state.loading = false;
			state.orders = action.payload;
		});
		builder.addCase(findOrderById.rejected, (state) => {
			state.loading = false;
			state.orders = [];
		});
	},
});

const { reducer } = orderSlice;
export default reducer;
//export const { reSetAdd, reSetUpdate } = orderSlice.actions;