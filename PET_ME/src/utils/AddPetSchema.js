import * as Yup from 'yup';

const AddPetSchema = Yup.object().shape({
  petname: Yup.string()
    .min(3, '*Demasiado corto!')
    .max(50, '*Demasiado largo!')
    .required('*Requerido'),
  location: Yup.string()
    .min(3, '*Demasiado corto!')
    .max(50, '*Demasiado largo!')
    .required('*Requerido'),
  pettype: Yup.string().required('*Requerido'),
  petbreed: Yup.string().required('*Requerido'),
  petimages: Yup.array().min(1, '*Minimo una imagen').required('*Requerido'),
});

export default AddPetSchema;
