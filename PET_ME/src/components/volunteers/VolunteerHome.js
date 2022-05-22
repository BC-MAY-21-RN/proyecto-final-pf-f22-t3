import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import BgPaws from '../BgPaws';
import Header from '../Header';
import ListPetAdoptionReview from './ListPetAdoptionReview';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getPetPostsReviewRequired} from '../../services/petServices';
import ModalPet from '../modal/ModalPet';
import ModalContentAdoptionReview from '../modal/ModalContentAdoptionReview';
import ModalContentAddPet from '../modal/ModalContentAddPet';
import CardPetAdoptionReview from './CardPetAdoptionReview';

const VolunteerHome = () => {
  const [ReviewRequiredPets, setReviewRequiredPets] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const data = await getPetPostsReviewRequired('publishedAt', 'asc');
        setReviewRequiredPets(data);
      };
      fetchData().catch(console.error);
    }, []),
  );

  const handleModal = item => {
    setModalInfo(item);
    setModalVisible(true);
  };
  return (
    <BgPaws opacity={0.78}>
      <Header title={'Adopciones por revisar'} />
      <View style={styles.containerList}>
        <ListPetAdoptionReview
          pets={ReviewRequiredPets}
          onPress={handleModal}
        />
      </View>
      <ModalPet
        title={'Información del adoptante'}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}>
        <ModalContentAdoptionReview info={modalInfo} />
      </ModalPet>
    </BgPaws>
  );
};

export default VolunteerHome;

const styles = StyleSheet.create({
  containerList: {
    width: '100%',
    height: 300,
  },
  header: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
});
