import Button from "@/components/atoms/button";
import InputBox from "@/components/atoms/input";
import TextArea from "@/components/atoms/textArea";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { useForm, SubmitHandler } from "react-hook-form";

import React from "react";

type Inputs = {
	title: string;
	description: string;
	unitprice: number;
	qty: number;
	photoUrl: string;
};

function CreateCraftForm() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	return (
		<>
			<div className="container mx-auto">
				<form onSubmit={handleSubmit(() => {})}>
					<div className="flex flex-col">
						<div className="">
							<label
								htmlFor=""
								className="block text-md font-medium leading-9 text-gray-900">
								Craft Title
							</label>
							<span className="text-rose-700">{errors.title?.message}</span>
							<input
								id="title"
								{...register("title", { required: "Title is required" })}
								className=" block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<div>
							<label
								htmlFor=""
								className="block text-md font-medium leading-8 text-gray-900">
								Description
							</label>
							<span className="text-rose-700">
								{errors.description?.message}
							</span>
							<textarea
								id={"description"}
								{...register("description", {
									required: "Description is required",
								})}
								rows={3}
								className="block w-80 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<div>
							<label
								htmlFor=""
								className="block text-md font-medium leading-8 text-gray-900">
								Unit Price
							</label>
							<span className="text-rose-700">{errors.unitprice?.message}</span>
							<input
								id="unitprice"
								{...register("unitprice", {
									required: "Unitprice is required",
								})}
								className=" rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<div>
							<label
								htmlFor=""
								className="block text-md font-medium leading-8 text-gray-900">
								Stock
							</label>
							<span className="text-rose-700">{errors.qty?.message}</span>
							<input
								id="qty"
								{...register("qty", { required: "Quantity is required" })}
								className=" rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
						</div>
						<div>
							<label
								htmlFor="cover-photo"
								className="block text-medium font-medium leading-8 text-gray-900">
								Photo
							</label>
							<span className="text-rose-700">{errors.imgUrl?.message}</span>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-7">
								<div className="text-center">
									<PhotoIcon
										className="mx-auto h-12 w-12 text-gray-300"
										aria-hidden="true"
									/>
									<div className="mt-4 flex text-medium leading-8 text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
											<span>Upload a Image</span>
											<input
												id="file-upload"
												{...register("imgUrl", {
													required: "Quantity is required",
												})}
												type="file"
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
						<div className="mt-6 flex space-x-4">
						
							<button
								type="submit"
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}

export default CreateCraftForm;
