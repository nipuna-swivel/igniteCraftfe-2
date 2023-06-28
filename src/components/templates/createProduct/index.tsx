import React from "react";
import CreateCraftForm from "@/components/organisms/createCraftForm";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { createProduct } from "@/slices/productSlice";

interface ProductProp {
	title: string;
	description: string;
	imgUrl: string;
	unitprice: number;
	qty: number;
}

// title;
// description;
// imgUrl;
// unitprice;
// qty;

function CreateProductTemplate() {
	const dispatch = useAppDispatch();

	const addProduct = (productData:ProductProp) => {
		dispatch(
			createProduct({
				title: productData.title,
				description: productData.description,
				imgUrl: productData.imgUrl,
				unitprice: productData.unitprice,
				qty: productData.qty,
			})
		);
	};

	return (
		<div>
			<CreateCraftForm />
		</div>
	);
}

export default CreateProductTemplate;
