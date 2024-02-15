import { object, string } from "yup";

export const validateFirstForm = object().shape({
  company_name: string().required("El nombre de la empresa es requerido"),
  company_nit: string()
    .max(11, "El NIT no debe superar los 11 carácteres")
    .required("El NIT de la empresa es requerido"),
  email: string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),
});

export const validateSecondForm = object().shape({
  full_name: string()
    .max(70, "Nombre no puede superar los 70 carácteres")
    .required("El nombre es obligatorio"),
  role: string()
    .max(50, "Cargo no puede superar los 50 carácteres")
    .required("El cargo es obligatorio"),
  phone: string()
    .max(10, "Teléfono no puede superar los 10 digitos")
    .required("El teléfono es obligatorio"),
  company_description: string()
    .max(150, "La descripción no puede superar los 150 carácteres")
    .required("La descripción es obligatoria"),
});
