import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ButtonPet from '../ButtonPet';
import colors from '../../utils/colors';

const ModalContentDetailsPet = () => {
  return (
    <>
      <Text style={styles.contentText}>
        Uno de nuestros voluntarios se estará comunicando contigo, para
        continuar el proceso de adopción de tu nuevo mejor amigo. 😄
      </Text>
      <ButtonPet
        text={'Ir al inicio'}
        typeButton={'D'}
        onPressFunction={() => {
          console.log('boton del modal');
        }}
      />
    </>
  );
};

export default ModalContentDetailsPet;

const styles = StyleSheet.create({
  contentText: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_400,
    marginVertical: 20,
  },
});
