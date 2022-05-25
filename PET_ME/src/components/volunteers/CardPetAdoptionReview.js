import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faDog,
  faLocationDot,
  faRulerHorizontal,
  faCalendar,
  faCircleCheck,
  faCircleXmark,
  faBookOpenReader,
} from '@fortawesome/free-solid-svg-icons';
import colors from '../../utils/colors';
import {ageFormated} from '../../services/petServices';
import PetGenderIcon from '../pets/PetGenderIcon';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {dateForhumans} from '../../services/petServices';

const CardPetAdoptionReview = ({adoption, handleModal}) => {
  const {createdAt, id, post, status, user} = adoption;

  return (
    <RNBounceable onPress={() => handleModal(adoption)}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'space-between',
          }}>
          <View style={styles.containerDetails}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.titleDes}>{post.petname}</Text>
              <Caracteristica
                icon={faCalendar}
                text={dateForhumans(createdAt)}
              />
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Caracteristica icon={faDog} text={post.petbreed} />
                <Caracteristica icon={faLocationDot} text={post.location} />
                <Caracteristica icon={faRulerHorizontal} text={post.petsize} />
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                {status === 'completed' ? (
                  <Caracteristica icon={faCircleCheck} text={'Completada'} />
                ) : status === 'rejected' ? (
                  <Caracteristica icon={faCircleXmark} text={'Rechazada'} />
                ) : (
                  <Caracteristica
                    icon={faBookOpenReader}
                    text={'En revision'}
                  />
                )}
              </View>
            </View>
          </View>
          <View style={styles.containerGenero}>
            <Text style={styles.textEdad}>{ageFormated(post.petage[0])}</Text>
            <PetGenderIcon petgender={post.petgender} />
          </View>
        </View>
      </View>
    </RNBounceable>
  );
};

export default CardPetAdoptionReview;

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
    padding: 20,
    borderRadius: 20,
    flexDirection: 'row',
    marginBottom: 20,
  },
  imgCardContainer: {
    width: '30%',
    height: '100%',
  },
  imgCard: {
    height: 110,
    borderRadius: 20,
  },
  containerDetails: {
    flex: 1,
    paddingRight: 20,
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
    width: '20%',
    alignItems: 'center',
    paddingVertical: 8,
    borderLeftWidth: 1,
    borderLeftColor: colors.Gray_400,
  },
  textEdad: {
    fontSize: 16,
    color: colors.Gray_500,
    fontFamily: 'BebasNeueBold',
  },
});
