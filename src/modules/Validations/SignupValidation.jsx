import * as Yup from "yup";

export const signupPageValidation = Yup.object().shape({
    firstName: Yup.string().required("Please enter your first name"),
    lastName: Yup.string().required("Please enter your last name"),
    userName: Yup.string().required("Please enter your user name"),
    teamName: Yup.string().required("Please enter your team name"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters long.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
            "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character."
        )
        .required("Password is required."),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match.")
        .required("Confirm Password is required."),
    termsAndConditions: Yup.bool().oneOf(
        [true],
        "You must agree to the Terms and Conditions."
    ),
});
