import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required!"),
    photo: Yup.string()
        .url("Address is not valid!")
        .required("Profile image is required!"),
    mobile: Yup.number().required("Your phone number is not valid!"),
    email: Yup.string()
        .email("Your email is not valid!")
        .required("Email is required!"),
    job: Yup.string().nullable(),
    group: Yup.string().required("Group is required!"),
});
