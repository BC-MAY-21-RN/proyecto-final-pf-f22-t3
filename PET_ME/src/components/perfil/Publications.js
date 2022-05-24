import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMyPetPosts, startAdoptionProcess} from '../../services/petServices';
import useAuth from '../../hooks/useAuth';
import ListPets from '../../components/pets/ListPets';

export default function Publications() {
  const [myPostPets, setMyPostPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {authUser} = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyPetPosts(authUser.email);
      setMyPostPets(data);
      // await startAdoptionProcess(data[9], authUser);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <View>
      <Text style={styles.textContent}>Mis Publicaciones</Text>
      {isLoading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <ListPets pets={myPostPets} />
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
