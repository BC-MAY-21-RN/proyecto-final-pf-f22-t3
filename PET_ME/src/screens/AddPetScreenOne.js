import {StyleSheet, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import {Formik} from 'formik';
import AddPetSchema from '../utils/AddPetSchema';
import FieldForm from '../components/FieldForm';
import InputPickerPet from '../components/InputPickerPet';
import PickerImage from '../components/PickerImage';

const initialValues = {
  petname: '',
  location: '',
  pettype: '',
  petbreed: '',
  petimages: [],
};
const AddPetScreenOne = () => {
  return (
    <BgPaws opacity={0.54}>
      <View style={styles.headerContainer}>
        <ButtonPet text={'Cancelar'} typeButton={'E'} />
        <Title style={styles.pagination} text={'1/2'} textType={'title'} />
      </View>
      <View>
        <Formik
          initialValues={initialValues}
          validateOnMount={true}
          validationSchema={AddPetSchema}
          onSubmit={values => console.log('Form values: ', values)}>
          {({handleSubmit, isValid}) => (
            <View>
              <PickerImage maxSelectedAssets={3} name={'petimages'} />
              <FieldForm
                title={'Nombre'}
                label={'Ingresa el nombre de tu mascota'}
                name={'petname'}
                styleField={'addPet'}
              />
              <FieldForm
                title={'Ciudad'}
                label={'Lugar donde se encuentra'}
                name={'location'}
                styleField={'addPet'}
              />
              <InputPickerPet
                label={'Tipo de mascota'}
                defaultSelect={'Elige un tipo de mascota'}
                name={'pettype'}
                style={styles.marginTop10}
                prompt={'Selecciona tipo'}
                items={[
                  {label: 'Perro', value: 'dog'},
                  {label: 'Gato', value: 'cat'},
                ]}
              />
              <InputPickerPet
                label={'Raza'}
                defaultSelect={'Elige un tipo de mascota'}
                name={'petbreed'}
                style={styles.marginTop10}
                prompt={'Selecciona raza'}
                items={[
                  {label: 'Labrador', value: 'labrador'},
                  {label: 'Shiba Inu', value: 'shiba-inu'},
                ]}
              />
              <ButtonPet
                text={'Siguiente'}
                typeButton={'B'}
                style={styles.nextButtom}
                onPressFunction={handleSubmit}
                disabled={!isValid}
              />
            </View>
          )}
        </Formik>
      </View>
    </BgPaws>
  );
};
export default AddPetScreenOne;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  nextButtom: {
    marginTop: 27,
  },
  pagination: {marginBottom: 0},
});
