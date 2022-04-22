import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import VectorImage from 'react-native-vector-image';
import BgPaws from '../components/BgPaws';

export default function HomeScreen() {
  return (
    <BgPaws opacity={0.2}>
        <Text style={styles.title}>Home Screen</Text>
    </BgPaws>
  )
}

const styles = StyleSheet.create({ 
  title: {
    color: '#fff',
    fontSize: 30,
  }
});
