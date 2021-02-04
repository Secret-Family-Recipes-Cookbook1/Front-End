import * as yup from "yup";

export default yup.object().shape({
    email: yup
    .string()
    .email('invalid email')
    .required('valid email address required'),
    password: yup
    .string()
    .required('password required')
    .min(5, "password must be 5 chars long"),
    rememberMe: yup
    .boolean()
    .optional(),
   })