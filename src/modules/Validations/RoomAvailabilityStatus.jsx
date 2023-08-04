import * as Yup from "yup";

const timeRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
export const roomAvailabilityValidation = Yup.object().shape({
    date: Yup.date().required("Please enter your date"),
    from: Yup.string()
        .required("Start time is required.")
        .matches(timeRegex, "Invalid time format. Use HH:mm (e.g., 14:00)"),
    to: Yup.string()
        .required("End time is required.")
        .matches(timeRegex, "Invalid time format. Use HH:mm (e.g., 14:00)"),
});
