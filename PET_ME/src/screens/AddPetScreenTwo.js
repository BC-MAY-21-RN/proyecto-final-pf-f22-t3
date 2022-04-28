import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import colors from '../utils/colors';
import {Formik} from 'formik';
import AddPetSchema from '../utils/AddPetSchema';
import FieldForm from '../components/FieldForm';

const AddPetScreenTwo = () => {
  return (
    <BgPaws opacity={0.54}>
      <View style={styles.headerContainer}>
        <ButtonPet text={'Atras'} typeButton={'E'} />
        <Title style={{marginBottom: 0}} text={'2/2'} textType={'title'} />
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
                title={'Tamaño'}
                label={'Tamaño de la raza'}
                name={'petsize'}
                styleField={'addPet'}
              />
              <View style={styles.fieldDouble}>
                <FieldForm
                  title={'Edad'}
                  label={'Edad en meses'}
                  name={'petage'}
                  styleField={'addPet'}
                />
                <FieldForm
                  title={'Sexo'}
                  label={'Selecciona'}
                  name={'petgender'}
                  styleField={'addPet'}
                />
              </View>

              <FieldForm
                title={'Raza'}
                label={'Selecciona raza'}
                name={'petbreed'}
                styleField={'addPet'}
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

export default AddPetScreenTwo;

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
  fieldDouble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
