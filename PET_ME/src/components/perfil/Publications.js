import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMyPetPosts} from '../../services/petServices';
import useAuth from '../../hooks/useAuth';
import ListPets from '../../components/pets/ListPets';
import NotFoundResults from '../NotFoundResults';

export default function Publications() {
  const [myPostPets, setMyPostPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {authUser} = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyPetPosts(authUser.email);
      setMyPostPets(data);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
  }, []);
  return (
    <View>
      <Text style={styles.textContent}>Mis Publicaciones</Text>
      {myPostPets.length > 0 ? (
        <ListPets pets={myPostPets} />
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
