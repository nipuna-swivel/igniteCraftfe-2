"use client";
import React from "react";
import CreateProductTemplate from "@/components/templates/createProduct";

function CreateProduct() {
	return (
		<div>
			<h2 className="text-2xl font-bold tracking-tight text-gray-900">
				Product Details
			</h2>
			<CreateProductTemplate />
		</div>
	);
}

export default CreateProduct;
