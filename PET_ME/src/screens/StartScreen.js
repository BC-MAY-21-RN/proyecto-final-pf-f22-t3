import {Image, StyleSheet, View, FlatList} from 'react-native';
import React, {useState} from 'react';
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

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const data = await getPetPosts(4, 'publishedAt');
        setLatestPets(data);
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
        <FlatList
          data={latestPets}
          renderItem={({item}) => <Img petPost={item} />}
          keyExtractor={(item, index) => index}
          numColumns={2}
        />
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
