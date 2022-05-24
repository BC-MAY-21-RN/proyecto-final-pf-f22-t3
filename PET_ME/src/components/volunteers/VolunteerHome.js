import {StyleSheet, View, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import BgPaws from '../BgPaws';
import Header from '../Header';
import ListPetAdoptionReview from './ListPetAdoptionReview';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getAdoptionProcesses} from '../../services/petServices';
import ModalPet from '../modal/ModalPet';
import ModalContentAdoptionReview from '../modal/ModalContentAdoptionReview';
import ButtonPet from '../ButtonPet';
import NotFoundResults from '../NotFoundResults';
import useAuth from '../../hooks/useAuth';

const VolunteerHome = () => {
  const {authUser} = useAuth();
  const [adoptionProcesses, setAdoptionProcesses] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const data = await getAdoptionProcesses(authUser.email);
        setAdoptionProcesses(data);
        setIsLoading(false);
      };
      fetchData().catch(console.error);
    }, [modalVisible]),
  );

  const handleModal = item => {
    setModalInfo(item);
    setModalVisible(true);
  };
  return (
    <BgPaws opacity={0.78}>
      <Header title={'Adopciones por revisar'} />
      {adoptionProcesses.length > 0 ? (
        <View style={styles.containerList}>
          <ListPetAdoptionReview
            adoptions={adoptionProcesses}
            handleModal={handleModal}
          />
        </View>
      ) : isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <NotFoundResults style={{marginTop: 20}} />
      )}

      <ModalPet
        title={'Información del adoptante'}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}>
        <ModalContentAdoptionReview info={modalInfo} />
        <ButtonPet
          typeButton={'E'}
          text={'X'}
          style={{position: 'absolute', right: 20, top: 10}}
          onPressFunction={() => setModalVisible(false)}
        />
      </ModalPet>
    </BgPaws>
  );
};

export default VolunteerHome;

const styles = StyleSheet.create({
  containerList: {
    width: '100%',
    height: 400,
  },
  header: {
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
});
