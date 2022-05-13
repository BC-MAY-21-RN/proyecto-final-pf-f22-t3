import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, '*Demasiado corto!')
    .max(50, '*Demasiado largo!')
    .required('*Requerido'),
  email: Yup.string().email('*Correo inválido').required('*Requerido'),
  phone: Yup.number()
    .required('*Requerido'),
  password: Yup.string()
    .required('*Por favor ingrese una contraseña')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&_])[A-Za-z\d@$!%*#?&_]{8,}$/,
      '*La contraseña debe ser una mezcla entre letras. números y carácteres ',
    ),
});

export default RegisterSchema;
