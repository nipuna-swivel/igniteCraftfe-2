import React from "react";
interface ButtonType {
	type?: "button" | "submit" | "reset";
	className?: string;
	name?: string;
    onClick?:(event: Event) => string;
}
const Button = ({ type, className, name,onClick }: ButtonType) => {
	return (
		<>
			<button type={type} className={className} onClick={onClick}>
				{name}
			</button>
		</>
	);
};

export default Button;
