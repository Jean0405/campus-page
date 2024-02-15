import * as Yup from "yup";

export const validateFirstForm = Yup.object().shape({
  company_name: Yup.string().required("El nombre de la empresa es requerido"),
  company_nit: Yup.string()
    .max(11, "El NIT no debe superar los 11 carácteres")
    .required("El NIT de la empresa es requerido"),
  email: Yup.string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),
});
