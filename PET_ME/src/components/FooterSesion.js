import {Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import ButtonPet from './ButtonPet';
import Title from './Title';
import colors from '../utils/colors';

const FooterSesion = props => {
  return (
    <>
      {props.title === 'INGRESAR' ? (
        <Pressable onPress={() => console.log('Olvidé mí contraseña')}>
          <Text style={styles.forgetPass}>¿Olvidaste tu contraseña?</Text>
        </Pressable>
      ) : null}
      <ButtonPet
        text={props.title}
        typeButton={'A'}
        style={styles.loginButton}
      />
      {props.title === 'REGISTRAR' ? (
        <Title
          text="¿Ya tienes una cuenta?"
          option={'Ingresa'}
          textType="subTitle"
        />
      ) : (
        <Title
          text="¿No tienes cuenta?"
          option={'Registrate'}
          textType="subTitle"
        />
      )}
    </>
  );
};

export default FooterSesion;

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
