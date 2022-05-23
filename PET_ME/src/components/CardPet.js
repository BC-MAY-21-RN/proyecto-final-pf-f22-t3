import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDog,
  faLocationDot,
  faRulerHorizontal,
} from '@fortawesome/free-solid-svg-icons';
import colors from '../utils/colors';
import {ageFormated} from '../services/petServices';
import PetGenderIcon from './pets/PetGenderIcon';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {useNavigation} from '@react-navigation/native';

export default function CardPet({pet}) {
  const {petimages, petname, location, petbreed, petsize, petage, petgender} =
    pet;
  const navigation = useNavigation();
  return (
    <RNBounceable onPress={() => navigation.navigate('DetailsPet', {pet})}>
      <View style={styles.container}>
        <View style={styles.imgCardContainer}>
          <Image
            source={{
              uri: petimages[0],
            }}
            style={styles.imgCard}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={styles.containerDetails}>
            <Text style={styles.titleDes}>{petname}</Text>
            <Caracteristica icon={faDog} text={petbreed} />
            <Caracteristica icon={faLocationDot} text={location} />
            <Caracteristica icon={faRulerHorizontal} text={petsize} />
          </View>
          <View style={styles.containerGenero}>
            <Text style={styles.textEdad}>{ageFormated(petage[0])}</Text>
            <PetGenderIcon petgender={petgender} />
          </View>
        </View>
      </View>
    </RNBounceable>
  );
}

const Caracteristica = ({icon, text}) => {
  return (
    <View style={styles.containerDes}>
      <FontAwesomeIcon icon={icon} size={20} color={colors.Gray_400} />
      <Text style={styles.textCaracteristica}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.Gray_100,
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
  },
  imgCard: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  containerDetails: {
    flex: 1,
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
    textTransform: 'capitalize',
  },
  containerGenero: {
    justifyContent: 'space-between',
    width: '25%',
    alignItems: 'center',
    paddingVertical: 8,
  },
  textEdad: {
    fontSize: 16,
    color: colors.Gray_500,
    fontFamily: 'BebasNeueBold',
  },
});
