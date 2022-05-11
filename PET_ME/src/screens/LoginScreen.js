import {View, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import LoginSchema from '../utils/LoginSchema';
import BgPaws from '../components/BgPaws';
import FieldForm from '../components/FieldForm';
import HeaderSesion from '../components/HeaderSesion';
import LoginFooter from '../components/FooterSesion';
import auth from '@react-native-firebase/auth';
import useAuth from '../hooks/useAuth';
import {useNavigation} from '@react-navigation/native';
import {GoogleSignin, statusCodes} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId: '841914520438-e6s04fp9sr0aeun1fspjfdip6thjhct2.apps.googleusercontent.com',
});

async function loginUser(values, login) {
  let userFirestore;
  await auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(user => {
      login(user.user.email);
      userFirestore = user.user.email;
    })
    .catch(er => {
      Alert.alert('Login Fail', `Usuario o contraseña incorrectos ${er}`);
    });
  return userFirestore;
}

const loginGoogle = async() => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('User google: ', userInfo);
  } catch (error) {
    console.log('error: ', error);
  }
}

const LoginScreen = () => {
  const {login} = useAuth();
  const navigation = useNavigation();

  async function loginFunction(values) {
    const user = await loginUser(values, login);
    console.log(user);
    if (user) {
      navigation.navigate('Home');
    }
  }

  function onRegistrar() {
    navigation.navigate('Register');
  }
  return (
    <BgPaws opacity={0.78}>
      <HeaderSesion style={styles.img} title="INICIAR SESIÓN" />
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        validationSchema={LoginSchema}
        onSubmit={values => loginFunction(values)}>
        {({handleSubmit, isValid}) => (
          <View style={styles.form}>
            <FieldForm label={'Correo electrónico'} name={'email'} />
            <FieldForm
              label={'Contraseña*'}
              name={'password'}
              securePass={true}
            />
            <LoginFooter
              title="INGRESAR"
              onPressFunction={handleSubmit}
              onRegistrar={onRegistrar}
              onGoogle={loginGoogle}
            />
          </View>
        )}
      </Formik>
    </BgPaws>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  img: {
    alignSelf: 'center',
    marginBottom: 20,
  },
  form: {marginTop: 20},
});
