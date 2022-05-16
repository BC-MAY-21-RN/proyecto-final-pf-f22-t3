import {StyleSheet, Text} from 'react-native';
import React from 'react';
import ButtonPet from '../ButtonPet';
import colors from '../../utils/colors';
import {useNavigation} from '@react-navigation/native';

const ModalContentAddPet = () => {
  const navigation = useNavigation();
  return (
    <>
      <Text style={styles.contentText}>
        Tu publicación se ha realizado con éxito 😄
      </Text>
      <ButtonPet
        text={'Ir al inicio'}
        typeButton={'D'}
        onPressFunction={() => {
          navigation.navigate('Inicio');
        }}
      />
    </>
  );
};

export default ModalContentAddPet;

const styles = StyleSheet.create({
  contentText: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_400,
    marginVertical: 20,
  },
});
