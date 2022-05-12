import {View, StyleSheet} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import BgPaws from '../components/BgPaws';
import HeaderSesion from '../components/HeaderSesion';
import {Formik} from 'formik';
import FieldForm from '../components/FieldForm';
import FooterSesion from '../components/FooterSesion';
import RegisterSchema from '../utils/RegisterSchema';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';

const registerUser = async (values, navigation, login) => {
  try {
    await auth().createUserWithEmailAndPassword(values.email, values.password);
    await firestore().collection('users').add({
      name: values.name,
      phone: values.phone,
      email: values.email,
      photo: 'https://cdn-icons-png.flaticon.com/512/1042/1042339.png',
    });
    await login(values.email);
    navigation.navigate('Home');
  } catch (error) {
    console.log(error)
  }
}

const RegisterScreen = () => {
  const navigation = useNavigation();
  const {login} = useAuth();
  function onLogin() {
    navigation.navigate('Login');
  }
  return (
    <BgPaws opacity={0.78} scroll={true}>
      <HeaderSesion style={styles.img} title="REGISTRO" />
      <Formik
        initialValues={{email: '', password: '', name: '', phone: ''}}
        validateOnMount={true}
        validationSchema={RegisterSchema}
        onSubmit={values => registerUser(values, navigation, login)}>
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
            <FooterSesion title={'REGISTRAR'} onPressFunction={handleSubmit} onRegistrar={onLogin} />
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
