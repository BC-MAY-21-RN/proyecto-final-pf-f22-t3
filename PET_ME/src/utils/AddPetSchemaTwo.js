import * as Yup from 'yup';

const AddPetSchemaTwo = Yup.object().shape({
  petage: Yup.array().min(1, '*Minimo una imagen').required('*Requerido'),
  petsize: Yup.string().required('*Requerido'),
  petgender: Yup.string().required('*Requerido'),
  sterilized: Yup.boolean().oneOf([true, false]),
  vaccinated: Yup.boolean().oneOf([true, false]),
  dewormed: Yup.boolean().oneOf([true, false]),
  moreinfo: Yup.string()
    .min(3, '*Muy corto')
    .max(500, '*Excediste el numero de caracteres')
    .required('*Requerido'),
});

export default AddPetSchemaTwo;
