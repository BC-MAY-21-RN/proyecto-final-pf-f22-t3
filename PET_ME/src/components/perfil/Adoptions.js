import {View, Text, StyleSheet, ActivityIndicator, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import ListPetAdoptionReview from '../volunteers/ListPetAdoptionReview';
import {getMyAdoptionProcesses, removeDoc} from '../../services/petServices';
import useAuth from '../../hooks/useAuth';

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

  const removeAdoption = async (collection, id) => {
    setIsLoading(true);
    await removeDoc(collection, id);
    setIsLoading(false);
  };

  const handleModal = adoption => {
    console.log('desde perfil adopciones', adoption);
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
            removeAdoption('adoptionProcesses', adoption.id).catch(
              console.error,
            ),
        },
      ],
    );
  };
  return (
    <View>
      <Text style={styles.textContent}>Mis Adopciones</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ListPetAdoptionReview
          adoptions={myAdoptionProcesses}
          handleModal={handleModal}
        />
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
