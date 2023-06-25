'use client';
import React from "react";

interface InputType {
	id?: string;
	name?: string;
	type?: string;
	value?: string;
	autoComplete?: string;
	className?: any;
	onChange?: (event: any) => void|string;
}

const InputBox = ({
	id,
	name,
	type,
	autoComplete,
	className,
	value,
	onChange,
}: InputType) => {
	return (
		<>
			<input
				id={id}
				name={name}
				type={type}
				value={value}
				autoComplete={autoComplete}
				required
				className={className}
				onChange={onChange}
			/>
		</>
	);
};

export default InputBox;
