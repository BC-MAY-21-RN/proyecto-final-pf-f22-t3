import {StyleSheet, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import colors from '../utils/colors';
import {Formik} from 'formik';
import AddPetSchema from '../utils/AddPetSchema';
import FieldForm from '../components/FieldForm';
import Checkbox from '../components/Checkbox';
import TextAreaInput from '../components/TextAreaInput';
import InputPickerPet from '../components/InputPickerPet';

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
              <InputPickerPet
                label={'Tamaño'}
                style={styles.marginTop10}
                prompt={'Elige uno'}
                items={[
                  {label: 'Pequeño', value: 'small'},
                  {label: 'Mediano', value: 'medium'},
                  {label: 'Grande', value: 'big'},
                ]}
              />
              <View style={styles.fieldDouble}>
                <FieldForm
                  title={'Edad'}
                  label={'Edad en meses'}
                  name={'petage'}
                  styleField={'addPet'}
                />
                <InputPickerPet
                  label={'Sexo'}
                  style={{width: '45%'}}
                  prompt={'Elige uno'}
                  items={[
                    {label: 'Hembra', value: 'female'},
                    {label: 'Macho', value: 'male'},
                  ]}
                />
              </View>
              <View style={styles.marginTop10}>
                <Checkbox label={'Esterilizado'} style={styles.marginTop10} />
                <Checkbox label={'Vacunado'} style={styles.marginTop10} />
                <Checkbox label={'Desparasitado'} style={styles.marginTop10} />
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
  marginTop10: {marginTop: 10},
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
