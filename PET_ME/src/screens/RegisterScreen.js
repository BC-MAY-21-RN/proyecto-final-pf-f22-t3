import {View, StyleSheet} from 'react-native';
import React from 'react';

import BgPaws from '../components/BgPaws';
import HeaderSesion from '../components/HeaderSesion';
import {Formik} from 'formik';
import FieldForm from '../components/FieldForm';
import FooterSesion from '../components/FooterSesion';
import RegisterSchema from '../utils/RegisterSchema';

const RegisterScreen = () => {
  return (
    <BgPaws opacity={0.78} scroll={true}>
      <HeaderSesion style={styles.img} title="REGISTRO" />
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        validationSchema={RegisterSchema}
        onSubmit={() => console.log('Iniciar sesión')}>
        {({handleSubmit, isValid}) => (
          <View style={styles.form}>
            <FieldForm label={'Nombre'} name={'name'} />
            <FieldForm
              label={'Número de teléfono'}
              name={'phone'}
              keyboard={'numeric'}
            />
            <FieldForm label={'Correo electrónico'} name={'email'} />
            <FieldForm
              label={'Contraseña*'}
              name={'password'}
              securePass={true}
            />
            <FooterSesion title={'REGISTRAR'} />
          </View>
        )}
      </Formik>
    </BgPaws>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  form: {marginTop: 40},
});
