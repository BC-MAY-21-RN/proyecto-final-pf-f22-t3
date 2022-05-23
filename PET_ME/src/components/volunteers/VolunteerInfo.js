import {Image, View, Text, StyleSheet} from 'react-native';
import React from 'react';
import BgPaws from '../BgPaws';
import ButtonPet from '../ButtonPet';
import Title from '../Title';
import useAuth from '../../hooks/useAuth';
import {beVolunteer} from '../../services/usersServices';

export default function VolunteerInfo({setIsVolunteer}) {
  const {authUser} = useAuth();
  const handleBeVolunteer = async () => {
    const res = await beVolunteer(authUser.email);
    setIsVolunteer(res);
  };
  return (
    <BgPaws opacity={0.78} scroll={true}>
      <Image
        style={{alignSelf: 'center', marginTop: 20}}
        source={require('../../assets/logos/Brand.png')}
      />
      <Title
        text={'¡Necesitamos tu ayuda!'}
        textType={'title'}
        style={styles.title}
      />
      <View>
        <Text style={styles.text}>
          Estamos buscando personas que quieran ayudar con el proceso de
          adopción de mascotas para que estas puedan encontrar un hogar que las
          llenen de afecto y un cuidado responsable.
        </Text>
        <Text style={styles.text}>
          El voluntario principalmente consiste en revisar que el usuario
          interesado en adoptar una mascota, cumple con los requerimientos
          necesarios para su cuidado integral.
        </Text>
        <Text style={styles.text}>
          {' '}
          "No vamos a cambiar el mundo ayudando a un animal, pero al menos el
          mundo habrá cambiado para el"
        </Text>
        <ButtonPet
          text={'SER VOLUNTARIO'}
          typeButton={'B'}
          style={styles.button}
          onPressFunction={() => {
            handleBeVolunteer();
          }}
        />
      </View>
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
  },
  button: {
    marginVertical: 20,
  },
});
