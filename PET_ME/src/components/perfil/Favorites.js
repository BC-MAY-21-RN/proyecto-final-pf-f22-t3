import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getMyPetPostFavorites} from '../../services/petServices';
import useAuth from '../../hooks/useAuth';
import ListPets from '../../components/pets/ListPets';
import NotFoundResults from '../NotFoundResults';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

export default function Favorites() {
  const [myFavorites, setMyFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {authUser} = useAuth();

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const data = await getMyPetPostFavorites(authUser.email);
        setMyFavorites(data);
        setIsLoading(false);
      };
      fetchData().catch(console.error);
    }, []),
  );
  return (
    <View>
      <Text style={styles.textContent}>Mis Favoritos</Text>
      {myFavorites.length > 0 ? (
        <ListPets pets={myFavorites} />
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
