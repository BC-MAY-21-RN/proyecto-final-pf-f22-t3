import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, '*Demasiado corto!')
    .max(50, '*Demasiado largo!')
    .required('*Requerido'),
  email: Yup.string().email('*Correo inválido').required('*Requerido'),
  phone: Yup.number().required('*Requerido'),
  password: Yup.string()
    .min(8, '*Demasiada corta!')
    .required('*Por favor ingrese una contraseña'),
});

export default RegisterSchema;
