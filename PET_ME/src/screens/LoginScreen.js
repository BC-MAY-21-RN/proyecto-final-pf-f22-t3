import {View, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
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

const loginUser = async (values, login) => {
  try {
    await auth()
    .signInWithEmailAndPassword(values.email, values.password)
    .then(user => {
      login(user.user.email);
    })
    return true;
  } catch (er) {
    return false;
  }
}

const loginGoogle = async(loginG, navigation, authUser, setIsLoading) => {
  try {
    setIsLoading(true);
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const res = await loginG(userInfo.user);
    setIsLoading(false);
    if (res) {
      navigation.navigate('Home');
    }
  } catch (error) {
    setIsLoading(false);
    console.log('error: ', error);
  }
}

const LoginScreen = () => {
  const {login, authUser, loginG} = useAuth();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  async function loginFunction(values) {
    try {
      const res = await loginUser(values, login);
      if (res) {
        navigation.navigate('Home');
      }
    } catch (er) {
      Alert.alert('Login Fail', `Usuario o contraseña incorrectos ${er}`);
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
              onGoogle={() => loginGoogle(loginG, navigation, authUser, setIsLoading)}
            />
            {isLoading && <ViewIndicator size="large" color="#fff"/>}
          </View>
        )}
      </Formik>
    </BgPaws>
  );
};

const ViewIndicator = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#5500dc" />
    </View>
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
