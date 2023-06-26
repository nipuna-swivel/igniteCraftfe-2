import * as yup from "yup";

const authSchema = yup.object().shape({
	username: yup
		.string()
		.min(2, "Too Short")
		.max(12, "Too Long")
		.required("Required"),
	passwords: yup
		.string()
		.min(2, "Too Short")
		.max(12, "Too Long")
		.required("Required"),
});
export default authSchema;
