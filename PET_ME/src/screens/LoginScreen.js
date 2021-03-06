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
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {verifyExistUser} from '../services/usersServices';

GoogleSignin.configure({
  webClientId:
    '841914520438-e6s04fp9sr0aeun1fspjfdip6thjhct2.apps.googleusercontent.com',
});

const loginUser = async (values, login, setIsLoading) => {
  try {
    setIsLoading(true);
    await auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(user => {
        login(user.user.email);
      });
    setIsLoading(false);
    return true;
  } catch (er) {
    console.log(er);
    setIsLoading(false);
    return false;
  }
};

const loginGoogle = async (login, navigation, setIsLoading) => {
  try {
    setIsLoading(true);
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    const {idToken} = userInfo;
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const res = await verifyExistUser(userInfo.user.email);
    setIsLoading(false);
    if (res) {
      await login(userInfo.user.email);
      navigation.navigate('Home');
    } else {
      navigation.navigate('Phone', {user: userInfo.user});
    }
  } catch (error) {
    setIsLoading(false);
    console.log('error: ', error);
  }
};

const LoginScreen = () => {
  const {login} = useAuth();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  async function loginFunction(values) {
    try {
      const res = await loginUser(values, login, setIsLoading);
      if (res) {
        navigation.navigate('Home');
      }
    } catch (er) {
      Alert.alert('Login Fail', `Usuario o contrase??a incorrectos ${er}`);
    }
  }

  function testPush() {
    navigation.navigate('Phone');
  }

  function onRegistrar() {
    navigation.navigate('Register');
  }

  return (
    <BgPaws opacity={0.78}>
      <HeaderSesion style={styles.img} title="INICIAR SESI??N" />
      <Formik
        initialValues={{email: '', password: ''}}
        validateOnMount={true}
        validationSchema={LoginSchema}
        onSubmit={values => loginFunction(values)}>
        {({handleSubmit, isValid}) => (
          <View style={styles.form}>
            <FieldForm label={'Correo electr??nico'} name={'email'} />
            <FieldForm
              label={'Contrase??a*'}
              name={'password'}
              securePass={true}
            />
            <LoginFooter
              title="INGRESAR"
              onPressFunction={handleSubmit}
              onRegistrar={onRegistrar}
              onGoogle={() =>
                loginGoogle(login, navigation, setIsLoading)
              }
            />
            {isLoading && <ViewIndicator size="large" color="#fff" />}
          </View>
        )}
      </Formik>
    </BgPaws>
  );
};

const ViewIndicator = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <ActivityIndicator size="large" color="#fff" />
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
