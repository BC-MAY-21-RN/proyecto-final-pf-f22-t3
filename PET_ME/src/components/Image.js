import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import Title from './Title';
import colors from '../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Img = props => {
  const {source, petName, petAge, petGender, imageType, textType, textAgeType} =
    props;
  return (
    <View style={styles.container_pet}>
      <Image source={source} resizeMode="cover" style={styles.img_pet} />
      <Title text={petName} textType={textType} />
      <Title text={petAge} textType={textAgeType} />
      <Icon
        name={petGender === 'H' ? 'venus' : 'mars'}
        size={20}
        color={petGender === 'H' ? colors.Pink : colors.Blue}
      />
    </View>
  );
};

export default Img;

const styles = StyleSheet.create({
  container_pet: {
    borderWidth: 0,
    borderRadius: 10,
    width: '50%',

    padding: 15,
    height: 250,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  img_pet: {
    borderWidth: 2,
    borderRadius: 20,
    width: '100%',
    height: 150,
  },
});

const img_pet = StyleSheet.compose(styles.img_pet);
