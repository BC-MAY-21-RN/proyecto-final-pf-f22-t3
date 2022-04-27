<<<<<<< HEAD
import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BgPaws from '../components/BgPaws';

export default function AddPetScreen() {
  return (
    <BgPaws opacity={0.2}>
      <Text style={styles.title}>Add Pet Screen</Text>
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
  },
});
=======
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
>>>>>>> 9c4817c (Add AddPetScreen component)
