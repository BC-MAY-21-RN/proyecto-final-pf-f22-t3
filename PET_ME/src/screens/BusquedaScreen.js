import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';

export default function BusquedaScreen() {
  return (
    <BgPaws opacity={0.2}>
      <Text style={styles.title}>Busqueda Screen</Text>
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    fontSize: 30,
  },
});
