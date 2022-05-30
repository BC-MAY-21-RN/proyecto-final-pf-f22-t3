import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SwiperImages from '../components/detailsPet/SwiperImages';
import InfoDetails from '../components/detailsPet/InfoDetails';
import PetDescription from '../components/detailsPet/PetDescription';
import Title from '../components/Title';
import FooterDetails from '../components/detailsPet/FooterDetails';
import ModalPet from '../components/modal/ModalPet';
import ModalContentDetailsPet from '../components/modal/ModalContentDetailsPet';
import ButtonPet from '../components/ButtonPet';
import {useNavigation} from '@react-navigation/native';

const DetailsPet = ({route}) => {
  const navigation = useNavigation();
  const {
    petimages,
    petname,
    location,
    petbreed,
    petsize,
    petage,
    petgender,
    pettype,
    moreinfo,
    sterilized,
    vaccinated,
    dewormed,
    id,
    favorites,
  } = route.params.pet;
  const post = route.params.pet;
  const PetInfo = {
    images: petimages,
    DetailsInfo: {
      name: petname,
      age: petage[0],
      gender: petgender,
    },
    Description: {
      raze: petbreed,
      ubication: location,
      size: petsize,
      type: pettype,
    },
    infoExtra: {
      text: moreinfo,
    },
    healState: [
      {
        title: 'Esterilizado',
        state: sterilized,
      },
      {
        title: 'Vacunado',
        state: vaccinated,
      },
      {
        title: 'Desparacitado',
        state: dewormed,
      },
    ],
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.screen}>
        <SwiperImages data={PetInfo.images} />
        <ButtonPet
          text="Atrás"
          typeButton="E"
          style={{position: 'absolute', margin: 5}}
          onPressFunction={() => navigation.goBack()}
        />
        <View style={styles.details}>
          <InfoDetails
            info={PetInfo.DetailsInfo}
            idPet={id}
            favorites={favorites}
          />
          <PetDescription info={PetInfo.Description} />
          <View style={styles.textInfo}>
            <View style={styles.textDesc}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Title
                  text={PetInfo.infoExtra.text}
                  textType="textDescription"
                />
              </ScrollView>
            </View>
          </View>
          <FooterDetails
            info={PetInfo.healState}
            post={post}
            setModalVisible={setModalVisible}
          />
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
