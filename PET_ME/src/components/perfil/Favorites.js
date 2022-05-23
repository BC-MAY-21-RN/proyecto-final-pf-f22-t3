import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Favorites() {
  return (
    <View style={styles.container}>
      <Text style={styles.textContent}>Favoritos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '110%',
    alignItems: 'center',
    alignContent: 'center',
  },
  textContent: {
    margin: 50,
    fontSize: 20,
    color: '#fff',
  }
})