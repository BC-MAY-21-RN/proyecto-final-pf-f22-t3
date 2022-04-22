import {Text, StyleSheet} from 'react-native';
import React from 'react';
import ButtonPet from './ButtonPet';
import Title from './Title';
import colors from '../utils/colors';

const LoginFooter = () => {
  return (
    <>
      <Text style={styles.forgetPass}>¿Olvidaste tu contraseña?</Text>
      <ButtonPet
        text={'INGRESAR'}
        typeButton={'A'}
        style={styles.loginButton}
      />
      <Title text={'¿No tienes cuenta? Registrate'} textType={'subTitle'} />
    </>
  );
};

export default LoginFooter;

const styles = StyleSheet.create({
  forgetPass: {
    alignSelf: 'flex-end',
    marginTop: -30,
    color: colors.Gray_200,
  },
  loginButton: {
    marginVertical: 18,
  },
});
