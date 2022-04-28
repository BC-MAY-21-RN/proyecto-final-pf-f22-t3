import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import BgPaws from '../components/BgPaws';

export default function PerfilScreen() {
  return (
    <BgPaws opacity={0.2}>
        <Text style={styles.title}>Perfil Screen</Text>
    </BgPaws>
  )
}

const styles = StyleSheet.create({ 
  title: {
    color: '#fff',
    fontSize: 30,
  }
});
