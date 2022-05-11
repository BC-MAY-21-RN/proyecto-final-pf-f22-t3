import {Image, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import BgPaws from '../components/BgPaws';
import ButtonPet from '../components/ButtonPet';
import Img from '../components/Image';
import Title from '../components/Title';

const VolunteerScreen = () => {
  return (
    <BgPaws opacity={0.78}>
      <Image
	style={{alignSelf: 'center', marginTop: 50}}
        source={require('../assets/logos/Brand.png')}
      />
      <Title text={'¡Necesitamos tu ayuda!'} textType={'title'} style={styles.title}/>
      <View style={styles.container}>
      <Text style={styles.text}>
	Estamos buscando personas que quieran ayudar con el proceso de adopción de mascotas
	para que estas puedan encontrar un hogar que las llenen de afecto y un cuidado responsable.
      </Text>
      <Text style={styles.text}>
	El voluntario principalmente consiste en revisar que el usuario interesado en adoptar una mascota, cumple con los requerimientos necesarios para su cuidado integral.
      </Text>
      <Text  style={styles.text}> "No vamos a cambiar el mundo ayudando a un animal, pero al menos el mundo habrá cambiado para el"
      </Text>
      <ButtonPet text={'SER VOLUNTARIO'} typeButton={'B'} style={styles.button}/>
      </View>
    </BgPaws>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    marginTop: 20,
  },
  text:{
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
   },
 button:{
    marginTop: 20,		
   }
});

export default VolunteerScreen;
