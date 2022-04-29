import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import VectorImage from 'react-native-vector-image';
import colors from '../utils/colors';
import {Formik} from 'formik';
import AddPetSchema from '../utils/AddPetSchema';
import FieldForm from '../components/FieldForm';
import PickerPet from '../components/PickerPet';

const AddPetScreenOne = () => {
  return (
    <BgPaws opacity={0.54}>
      <View style={styles.headerContainer}>
        <ButtonPet text={'Cancelar'} typeButton={'E'} />
        <Title style={{marginBottom: 0}} text={'1/2'} textType={'title'} />
      </View>
      <View style={styles.pickImgContainer}>
        <VectorImage source={require('../assets/img/image.svg')} />
        <Text style={styles.pickImgTitle}>Añade las fotos de tu mascota</Text>
        <Text style={styles.pickImgSubTitle}>(max 6 Mb)</Text>
      </View>
      <View>
        <Formik
          initialValues={{email: '', password: ''}}
          validateOnMount={true}
          validationSchema={AddPetSchema}
          onSubmit={() => console.log('Se añadio la mascota')}>
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
              <PickerPet
                label={'Tipo de mascota'}
                style={styles.marginTop10}
                prompt={'Selecciona tipo'}
                items={[
                  {label: 'Perro', value: 'dog'},
                  {label: 'Gato', value: 'cat'},
                ]}
              />
              <PickerPet
                label={'Raza'}
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
  pickImgContainer: {
    paddingVertical: 15,
    backgroundColor: colors.Gray_100,
    borderRadius: 10,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: colors.Gray_400,
    borderWidth: 3,
  },
  pickImgTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_400,
    marginVertical: 10,
  },
  pickImgSubTitle: {
    fontSize: 15,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_300,
  },
});
