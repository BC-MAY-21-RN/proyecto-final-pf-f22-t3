import {StyleSheet, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import colors from '../utils/colors';
import {Formik} from 'formik';
import AddPetSchemaTwo from '../utils/AddPetSchemaTwo';
import Checkbox from '../components/Checkbox';
import TextAreaInput from '../components/TextAreaInput';
import InputPickerPet from '../components/InputPickerPet';
import InputTextAndPicker from '../components/InputTextAndPicker';

const initialValues = {
  petage: [],
  petsize: '',
  petgender: '',
  sterilized: false,
  vaccinated: false,
  dewormed: false,
  moreinfo: '',
};

const AddPetScreenTwo = () => {
  return (
    <BgPaws opacity={0.54}>
      <View style={styles.headerContainer}>
        <ButtonPet text={'Atras'} typeButton={'E'} />
        <Title style={{marginBottom: 0}} text={'2/2'} textType={'title'} />
      </View>
      <View>
        <Formik
          initialValues={initialValues}
          validateOnMount={true}
          validationSchema={AddPetSchemaTwo}
          onSubmit={values => console.log('Form values: ', values)}>
          {({handleSubmit, isValid}) => (
            <View style={styles.form}>
              <InputTextAndPicker
                label={'Edad'}
                name={'petage'}
                style={styles.marginTop10}
                prompt={'Elige uno'}
                items={[
                  {label: 'Meses', value: 'month'},
                  {label: 'Años', value: 'year'},
                ]}
              />

              <View style={styles.fieldDouble}>
                <InputPickerPet
                  label={'Tamaño'}
                  name={'petsize'}
                  style={{width: '45%'}}
                  prompt={'Elige uno'}
                  items={[
                    {label: 'Pequeño', value: 'small'},
                    {label: 'Mediano', value: 'medium'},
                    {label: 'Grande', value: 'big'},
                  ]}
                />
                <InputPickerPet
                  label={'Sexo'}
                  name={'petgender'}
                  style={{width: '45%'}}
                  prompt={'Elige uno'}
                  items={[
                    {label: 'Hembra', value: 'female'},
                    {label: 'Macho', value: 'male'},
                  ]}
                />
              </View>
              <View style={styles.marginTop10}>
                <Checkbox
                  label={'Esterilizado'}
                  name={'sterilized'}
                  style={styles.marginTop10}
                />
                <Checkbox
                  label={'Vacunado'}
                  name={'vaccinated'}
                  style={styles.marginTop10}
                />
                <Checkbox
                  label={'Desparasitado'}
                  name={'dewormed'}
                  style={styles.marginTop10}
                />
              </View>
              <TextAreaInput
                style={styles.marginTop10}
                label={'Información adicional'}
                name={'moreinfo'}
                placeholder={'Cuentanos mas sobre la mascota'}
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

export default AddPetScreenTwo;

const styles = StyleSheet.create({
  fieldDouble: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  marginTop10: {marginTop: 10},
  nextButtom: {
    marginTop: 27,
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
  pickImgSubTitle: {
    fontSize: 15,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_300,
  },
  pickImgTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_400,
    marginVertical: 10,
  },
});
