import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import LoginSchema from '../utils/LoginSchema';
import BgPaws from '../components/BgPaws';
import FieldForm from '../components/FieldForm';
import HeaderLogin from '../components/HeaderLogin';
import LoginFooter from '../components/LoginFooter';

const RegisterScreen = () => {
  return (
    <BgPaws opacity={0.78}>
      <HeaderLogin style={styles.img} />
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        validationSchema={LoginSchema}
        onSubmit={() => console.log('Iniciar sesión')}>
        {({handleSubmit, isValid}) => (
          <View style={styles.form}>
            <FieldForm label={'Correo electrónico'} name={'email'} />
            <FieldForm
              label={'Contraseña*'}
              name={'password'}
              securePass={true}
            />
            <LoginFooter />
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
  },
  form: {marginTop: 40},
});
