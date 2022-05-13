import { View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import { color } from 'react-native-reanimated'
import BgPaws from '../components/BgPaws';
import useAuth from '../hooks/useAuth';

export default function PerfilScreen() {
  const {authUser} = useAuth();
  console.log(authUser);
  return (
    <BgPaws opacity={0.2}>
        <Text style={styles.title}>Perfil Screen</Text>
        <Text style={styles.subtitle}>{authUser.email}</Text>
        <Image style={styles.img} source={{uri: authUser.photo}} />
    </BgPaws>
  )
}

const styles = StyleSheet.create({ 
  title: {
    color: '#fff',
    fontSize: 30,
  },
  subtitle: {
    color: '#fff',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
  }
});
