import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import React from 'react';

import VectorImage from 'react-native-vector-image';
import BgPaws from '../components/BgPaws';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import CardPet from '../components/CardPet';


export default function HomeScreen() {
  return (
    <BgPaws opacity={0.7}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logos/Brand.png')}
          style={styles.logo}
        />
        <Icon name="bell" size={30} color="#fff" />
      </View>
      <Title text="Ultimos Agregados" />
      <View style={styles.containerList}>
        <FlatList
          data={pets}
          keyExtractor={pets => pets.id}
          renderItem={({item}) => <CardPet pet={item} />}
        />
      </View>
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 30,
  },
  logo: {
    width: 150,
    height: 80,
  },
});

const pets = [
  {
    id: 1,
    name: 'Wilson',
    age: '2 meses',
    img: 'https://img2.freepng.es/20171201/c31/dog-png-10-5a2217854f42a8.0607243215121836853247.jpg',
    raza: 'Labrador',
    genero: 'Macho',
    location: 'Guadalajara',
    tam: 'Grande',
  },
  {
    id: 2,
    name: 'Freddy',
    age: '4 años',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxozu0IZilehUsAg268xr20lmNPa9H-SBBv4-_tz_BxVWIe4L6jIJd0DbH8Vz1KzMAgCY&usqp=CAU',
    raza: 'Shiba Inu',
    genero: 'Macho',
    location: 'Tuluá',
    tam: 'Mediano',
  },
  {
    id: 3,
    name: 'Pedillos',
    age: '2 meses',
    img: 'https://ih1.redbubble.net/image.2515683476.7692/st,small,845x845-pad,1000x1000,f8f8f8.jpg',
    raza: 'Chihuahua',
    genero: 'Macho',
    location: 'Monterrey',
    tam: 'Pequeño',
  },
];
