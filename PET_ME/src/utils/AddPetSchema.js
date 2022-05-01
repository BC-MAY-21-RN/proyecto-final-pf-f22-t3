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
});

export default AddPetSchema;
