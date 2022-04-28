import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDog,
  faLocationDot,
  faRulerHorizontal,
  faMars,
} from '@fortawesome/free-solid-svg-icons';
import colors from '../utils/colors';

export default function CardPet(props) {
  const {pet} = props;
  return (
    <View style={styles.container}>
      <View style={styles.imgCardContainer}>
        <Image
          source={{
            uri: pet.img,
          }}
          style={styles.imgCard}
        />
      </View>
      <View style={styles.containerDetails}>
        <Text style={styles.titleDes}>{pet.name}</Text>
        <Caracteristica icon={faDog} text={pet.raza} />
        <Caracteristica icon={faLocationDot} text={pet.location} />
        <Caracteristica icon={faRulerHorizontal} text={pet.tam} />
      </View>
      <View style={styles.containerGenero}>
        <Text style={styles.textEdad}>{pet.age}</Text>
        <FontAwesomeIcon icon={faMars} size={35} color={colors.primary} />
      </View>
    </View>
  );
}

const Caracteristica = ({icon, text}) => {
  return (
    <View style={styles.containerDes}>
      <FontAwesomeIcon icon={icon} size={20} color={colors.Gray_500} />
      <Text style={styles.textCaracteristica}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 20,
    height: 130,
  },
  imgCardContainer: {
    width: '30%',
    height: '100%',
    alignItems: 'center',
    padding: 2,
  },
  imgCard: {
    width: '100%',
    height: '100%',
    marginTop: 2,
    marginRight: 8,
    borderRadius: 20,
  },
  containerDetails: {
    width: '45%',
    marginLeft: 10,
  },
  containerDes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  titleDes: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.Gray_500,
    textTransform: 'uppercase',
  },
  textCaracteristica: {
    fontSize: 16,
    color: colors.Gray_500,
    marginLeft: 12,
    fontFamily: 'ArchivoNarrow-Regular',
  },
  containerGenero: {
    justifyContent: 'space-between',
    width: '25%',
    alignItems: 'center',
    marginTop: 10,
  },
  textEdad: {
    fontSize: 16,
    color: colors.Gray_500,
    fontFamily: 'BebasNeueBold',
  },
});
