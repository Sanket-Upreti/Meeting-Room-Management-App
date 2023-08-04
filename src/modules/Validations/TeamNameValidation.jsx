import * as Yup from "yup";

export const teamnameValidation = Yup.object().shape({
    teamName: Yup.string().required("Please enter your team name"),
});
