import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import ModalPet from '../components/modal/ModalPet';
import IconTitle from '../components/IconTitle';
import colors from '../utils/colors';
import ButtonPet from '../components/ButtonPet';
import {
  faCircleUser,
  faPhone,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
const ControlDetailsPet = () => {
  const info = {
    user: 'Etneciv',
    phone: '3122283504',
    Id_Pub: 'Navigation with params',
  };
  return (
    <ModalPet title="PROCESO DE ADOPCIÓN">
      <View style={styles.contentModal}>
        <Text style={styles.textSub}>Información del adoptante</Text>
        <IconTitle
          icon={faCircleUser}
          title={info.user}
          size={22}
          color={colors.Gray_400}
          type=""
        />
        <IconTitle
          icon={faPhone}
          title={info.phone}
          size={22}
          color={colors.Gray_400}
          type=""
        />
        <Pressable onPress={() => console.log(info.Id_Pub)}>
          <IconTitle
            icon={faFileLines}
            title={'Ir a publicación'}
            size={22}
            color={colors.Gray_400}
            type=""
          />
        </Pressable>
      </View>
      <ButtonPet text="APROBAR" typeButton="D" style={styles.buttonStyle} />
      <ButtonPet text="RECHAZAR" typeButton="D" style={styles.buttonStyle} />
    </ModalPet>
  );
};

export default ControlDetailsPet;

const styles = StyleSheet.create({
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
