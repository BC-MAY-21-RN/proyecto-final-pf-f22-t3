import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, '*Demasiado corto!')
    .max(50, '*Demasiado largo!')
    .required('*Requerido'),
  email: Yup.string().email('*Correo inválido').required('*Requerido'),
  phone: Yup.string()
    .required('*Requerido')
    .max(10, '*Ingrese un número de teléfono válido')
    .matches(/^[0-9]$/, 'Por favor ingresa solo números'),
  password: Yup.string()
    .required('*Por favor ingrese una contraseña')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      '*La contraseña debe ser una mezcla entre letras. números y carácteres ',
    ),
});

export default RegisterSchema;
