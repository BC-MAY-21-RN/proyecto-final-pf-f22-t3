import {View, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../utils/colors';
import Title from '../Title';
import FavButton from '../FavButton';
const infoDetails = props => {
  const {age, fav, gender, name} = props.info;
  return (
    <View style={Styles.firstInfo}>
      <View style={Styles.namePet}>
        <Title style={Styles.marginZero} text={name} textType="name" />
        <Title style={Styles.marginZero} text={age} textType="subName" />
      </View>
      <View style={Styles.iconsPet}>
        <FavButton stateInit={fav} />
        <Icon
          name={gender === 'male' ? 'mars' : 'venus'}
          color={gender === 'male' ? colors.Blue : colors.Pink}
          size={27}
        />
      </View>
    </View>
  );
};

export default infoDetails;

const Styles = StyleSheet.create({
  firstInfo: {
    flex: 1,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    flexDirection: 'row',
  },
  namePet: {
    flex: 1,
    justifyContent: 'center',
  },
  iconsPet: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marginZero: {
    marginBottom: 0,
  },
});
