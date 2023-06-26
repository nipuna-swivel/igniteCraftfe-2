import React from "react";
import CreateCraftForm from "@/components/organisms/createCraftForm";

function CreateProduct() {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">
				Product Details
			</h2>
			<CreateCraftForm />
		</div>
	);
}

export default CreateProduct;
