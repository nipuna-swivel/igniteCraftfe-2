import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductDataService from "@/services/productService";
import { IProduct, IProductState } from "@/services/interfaces";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: IProductState = {
	products: [],	
	loading: false,
	error: null,
	isAdded: false,
	isUpdated: false,
	successMessage: "",
	productData: [],
	isDeleted: false,
	handleDelete: function (_id: string): void {
		throw new Error("Function not implemented.");
	},
};

export const createProduct: any = createAsyncThunk(
	"product/create",
	async (
		{ fname, lname, email, contactNum, gender, photoUrl }: IProduct,
		{ rejectWithValue }
	) => {
		try {
			await ProductDataService.create({
				fname,
				lname,
				email,
				contactNum,
				gender,
				photoUrl,
			});
			//AlertService.success("Employee created Success!!", "success");
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const retrieveProduct: any = createAsyncThunk(
	"product/getAll",
	async () => {
		try {
			const res = await ProductDataService.getAll();
			return res.data;
		} catch (error) {
			console.log("there is an error in retrieve api call", error);
			//AlertService.error("there is an error in retrieve api call!!", "error");
		}
	}
);

export const updateProduct: any = createAsyncThunk(
	"product/update",
	async (params: { empId: string; data: any }, { rejectWithValue }) => {
		try {
			const res = await ProductDataService.update(params.empId, params.data);
		//	AlertService.success("Employee updated Success!!", "success");
			return res.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const deleteProduct: any = createAsyncThunk(
	"product/delete",
	async (id: string, { rejectWithValue }) => {
		try {
			await ProductDataService.remove(id);
			//AlertService.success("Employee deleted Success!!", "success");
			return id;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

export const findProductById: any = createAsyncThunk(
	"product/getbyid",
	async (id: string, { rejectWithValue }) => {
		try {
			const res = await ProductDataService.findById(id);
			return res.data;
		} catch (error: any) {
			return rejectWithValue(error.response.data.message);
		}
	}
);

const productSlice = createSlice({
	name: "product",
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
		builder.addCase(retrieveProduct.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(retrieveProduct.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
			console.log("retrive slice", state.products);
		});
		builder.addCase(retrieveProduct.rejected, (state) => {
			state.loading = false;
			state.products = [];
		});

		//create a new employee
		builder.addCase(createProduct.fulfilled, (state, action) => {
			state.loading = false;
			state.isAdded = true;
			state.successMessage = "Successfully added the product";
			state.error = null;
		});
		builder.addCase(
			createProduct.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);
		//update employee
		builder.addCase(updateProduct.fulfilled, (state) => {
			state.loading = false;
			state.isUpdated = true;
			state.successMessage = "Successfully updated product";
			state.error = null;
		});
		builder.addCase(
			updateProduct.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);

		//delete a employee
		builder.addCase(deleteProduct.pending, (state) => {
			state.loading = true;
			console.log("Delete pending", state);
		});
		builder.addCase(deleteProduct.fulfilled, (state, action) => {
			state.loading = false;
			state.successMessage = "Successfully deleted product";
			state.products = state.products.filter(
				(products) => products._id !== action.payload
			);
		});
		builder.addCase(
			deleteProduct.rejected,
			(state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			}
		);

		//get the employee by id
		builder.addCase(findProductById.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(findProductById.fulfilled, (state, action) => {
			state.loading = false;
			state.products = action.payload;
		});
		builder.addCase(findProductById.rejected, (state) => {
			state.loading = false;
			state.products = [];
		});
	},
});

const { reducer } = productSlice;
export default reducer;
export const { reSetAdd, reSetUpdate } = productSlice.actions;