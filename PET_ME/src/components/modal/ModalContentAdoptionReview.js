import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import IconTitle from '../IconTitle';
import colors from '../../utils/colors';
import ButtonPet from '../ButtonPet';
import {
  faCircleUser,
  faPhone,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';

const ModalContentAdoptionReview = props => {
  const {info} = props;
  return (
    <View style={styles.contentModal}>
      <View style={styles.marginVertical}>
        <IconTitle
          icon={faCircleUser}
          title={info.petname}
          size={22}
          color={colors.Gray_400}
        />
        <IconTitle
          icon={faPhone}
          title={'23445'}
          size={22}
          color={colors.Gray_400}
        />
        <Pressable onPress={() => console.log('id post')}>
          <IconTitle
            icon={faFileLines}
            title={'Ir a publicación'}
            size={22}
            color={colors.Gray_400}
          />
        </Pressable>
      </View>
      <ButtonPet text="APROBAR" typeButton="D" style={styles.marginVertical} />
      <ButtonPet text="RECHAZAR" typeButton="D" />
    </View>
  );
};

export default ModalContentAdoptionReview;

const styles = StyleSheet.create({
  marginVertical: {marginVertical: 10},
  contentModal: {
    width: '100%',
  },
  buttonStyle: {
    width: '100%',
    marginVertical: 5,
  },
  textSub: {
    fontSize: 18,
    color: colors.Gray_300,
  },
});
