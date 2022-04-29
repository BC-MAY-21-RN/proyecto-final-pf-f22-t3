import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Title from '../components/Title';
import VectorImage from 'react-native-vector-image';

const AddPetScreen = () => {
  return (
    <BgPaws opacity={0.78}>
      <View style={styles.headerContainer}>
        <ButtonPet text={'Cancelar'} typeButton={'E'} />
        <Title style={{marginBottom: 0}} text={'1/2'} textType={'title'} />
      </View>
      <View>
        <VectorImage source={require('../assets/img/image.svg')} />
      </View>
    </BgPaws>
  );
};

export default AddPetScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
