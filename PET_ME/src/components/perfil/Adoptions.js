import {View, Text, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListPetAdoptionReview from '../volunteers/ListPetAdoptionReview';
import {
  getMyAdoptionProcesses,
  removeDoc,
  setPostToPusblished,
} from '../../services/petServices';
import useAuth from '../../hooks/useAuth';
import NotFoundResults from '../NotFoundResults';

export default function Adoptions() {
  const [myAdoptionProcesses, setMyAdoptionProcesses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {authUser} = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyAdoptionProcesses(authUser.email);
      setMyAdoptionProcesses(data);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
  }, [isLoading]);

  const removeAdoption = async (collection, id, post) => {
    setIsLoading(true);
    await removeDoc(collection, id);
    await setPostToPusblished(post.id);
    setIsLoading(false);
  };

  const handleModal = adoption => {
    Alert.alert(
      'Eliminar',
      'Esta seguro que desea eliminar este proceso de adopcion',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () =>
            removeAdoption(
              'adoptionProcesses',
              adoption.id,
              adoption.post,
            ).catch(console.error),
        },
      ],
    );
  };
  return (
    <View>
      <Text style={styles.textContent}>Mis Adopciones</Text>
      {myAdoptionProcesses.length > 0 ? (
        <ListPetAdoptionReview
          adoptions={myAdoptionProcesses}
          handleModal={handleModal}
        />
      ) : isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <NotFoundResults style={{marginTop: 20}} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textContent: {
    marginVertical: 40,
    fontSize: 20,
    color: '#fff',
  },
});
