import {
  StyleSheet,
  Dimensions,
  Pressable,
  Text,
  Image,
  View,
} from 'react-native';
import React, {useState} from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import {Formik} from 'formik';
import AddPetSchema from '../utils/AddPetSchema';
import FieldForm from '../components/FieldForm';
import InputPickerPet from '../components/InputPickerPet';
import PickerImage from '../components/PickerImage';

const AddPetScreenOne = () => {
  return (
    <BgPaws opacity={0.54}>
      <View style={styles.headerContainer}>
        <ButtonPet text={'Cancelar'} typeButton={'E'} />
        <Title style={{marginBottom: 0}} text={'1/2'} textType={'title'} />
      </View>
      <PickerImage maxSelectedAssets={3} />

      <View>
        <Formik
          initialValues={{petname: '', location: '', pettype: '', petbreed: ''}}
          validateOnMount={true}
          validationSchema={AddPetSchema}
          onSubmit={values => console.log('Form values: ', values)}>
          {({handleSubmit, isValid}) => (
            <View style={styles.form}>
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
  nextButtom: {
    marginTop: 27,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
});
