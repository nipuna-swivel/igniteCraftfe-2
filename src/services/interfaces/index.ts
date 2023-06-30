//product interface

export interface IProduct {
	_id: string;
	title: string;
	description: string;
	unitprice: number;
	imgUrl: string;
	qty: number;
}

export interface IProductState {
	products: [] | IProduct[];
	loading: boolean;
	error: string;
	productData: IProduct[] | [];
	isAdded: boolean;
	successMessage: string;
}

//auth interface

export interface IAuth {
	username: string;
	password: string;
}

export interface IAuthState {
	authCredentials: object;
	username: string;
	password: string;
	loading: boolean;
	error: string;
	successMessage: string;
	jwtToken: string;
	loggedIn: boolean;
}

//order interface

export interface IOrder {
	_id: string;
	date: Date;
	productId: string;
	productTitle: string;
	qty: number;
	totalAmount: number;
}

export interface IOrderState {
	orders: IOrder[];
	loading: boolean;
	error: string;
	successMessage: string;
	isAdded: boolean;
	isUpdated: boolean;
	isDeleted: boolean;

}
