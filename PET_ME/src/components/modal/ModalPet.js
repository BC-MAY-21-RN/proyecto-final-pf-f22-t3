import {Modal, StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';

const ModalPet = props => {
  const {children, title, modalVisible, setModalVisible} = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require('../../assets/logos/Logo.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>{title}</Text>
          {children}
        </View>
      </View>
    </Modal>
  );
};

export default ModalPet;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(37,51,52, 0.77 )',
  },
  logo: {position: 'absolute', top: '-30%'},
  modalView: {
    margin: 20,
    backgroundColor: colors.Gray_100,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontFamily: 'BebasNeueBold',
    color: colors.Gray_400,
    width: '100%',
    paddingTop: 90,
  },
});
