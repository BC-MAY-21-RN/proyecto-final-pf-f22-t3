import {View, StyleSheet, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import Carousel_Image from '../components/detailsPet/Carousel_Image';
import InfoDetails from '../components/detailsPet/InfoDetails';
import PetDescription from '../components/detailsPet/PetDescription';
import Title from '../components/Title';
import FooterDetails from '../components/detailsPet/FooterDetails';
import ModalPet from '../components/modal/ModalPet';
import ModalContentDetailsPet from '../components/modal/ModalContentDetailsPet';

const DetailsPet = props => {
  const {Description, DetailsInfo, healState, infoExtra, images} =
    props.details;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.screen}>
        <Carousel_Image images={images} />
        <View style={styles.details}>
          <InfoDetails info={DetailsInfo} />
          <PetDescription info={Description} />
          <View style={styles.textInfo}>
            <View style={styles.textDesc}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Title text={infoExtra.text} textType="textDescription" />
              </ScrollView>
            </View>
          </View>
          <FooterDetails info={healState} setModalVisible={setModalVisible} />
        </View>
      </View>
      <ModalPet
        title={'¡Gracias humano!'}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}>
        <ModalContentDetailsPet />
      </ModalPet>
    </>
  );
};

export default DetailsPet;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  details: {
    flex: 4,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#F3FBF1',
    marginTop: -20,
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  textInfo: {
    flex: 4,
    justifyContent: 'center',
  },
  textDesc: {
    borderColor: '#9FA5C0',
    borderWidth: 1,
    borderRadius: 8,
    padding: 5,
  },
});
