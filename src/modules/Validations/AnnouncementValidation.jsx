import * as Yup from "yup";

export const announcementValidation = Yup.object().shape({
    announcement: Yup.string()
        .required("Please enter your username")
        .test("wordCount", "Textarea should have up to 150 words.", (value) => {
            if (!value) return false; // If the value is empty, return false
            const wordCount = value.trim().split(/\s+/).length;
            return wordCount <= 150;
        }),
});
