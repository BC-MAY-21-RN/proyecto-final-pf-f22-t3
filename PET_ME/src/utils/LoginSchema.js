import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Correo inválido').required('*Requerido'),
  password: Yup.string().required('*Aún no ha ingresado una contraseña'),
});

export default LoginSchema;
