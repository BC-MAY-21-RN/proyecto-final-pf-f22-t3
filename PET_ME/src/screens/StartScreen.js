import {
  Image,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BgPaws from '../components/BgPaws';
import Border from '../components/Border';
import ButtonPet from '../components/ButtonPet';
import Img from '../components/Image';
import Header from '../components/Header';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {getPetPosts} from '../services/petServices';

const Start = () => {
  const navigation = useNavigation();
  const [latestPets, setLatestPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const data = await getPetPosts(4, 'publishedAt');
        setLatestPets(data);
        setIsLoading(false);
      };
      fetchData().catch(console.error);
    }, []),
  );

  const loginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <BgPaws opacity={0.78}>
      <Header title={'¡Bienvenidos!'} />
      <Border />
      <View>
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        ) : (
          <FlatList
            data={latestPets}
            renderItem={({item}) => <Img petPost={item} />}
            keyExtractor={(item, index) => index}
            numColumns={2}
          />
        )}
      </View>
      <ButtonPet
        text={'INGRESAR'}
        typeButton={'B'}
        onPressFunction={loginScreen}
      />
    </BgPaws>
  );
};

export default Start;

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 420,
  },
});
