import * as Yup from 'yup';

const AddPublicationSchema = Yup.object().shape({
  description: Yup.string()
    .min(10, '*Demasiado corto, cuentanos más!')
    .max(300, '*Ey tranquilo, es mucho texto!')
    .required('*Requerido'),
  image: Yup.array()
    .min(1, '*Minimo selecciona una imagen')
    .required('*Requerido'),
});

export default AddPublicationSchema;
