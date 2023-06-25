import React from "react";

interface TextAreaType {
	id: string;
	name: string;
	rows: number;
	className: string;
}

function TextArea({ name, rows, className }: TextAreaType) {
	return (
		<>
			<textarea
				id="about"
				name={name}
				rows={rows}
				className={className}
				defaultValue={""}
			/>
		</>
	);
}

export default TextArea;
