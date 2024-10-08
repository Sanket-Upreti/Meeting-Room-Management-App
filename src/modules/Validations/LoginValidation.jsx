import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
});
