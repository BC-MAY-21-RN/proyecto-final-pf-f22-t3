import {View, StyleSheet, Image, ActivityIndicator} from 'react-native';

import React, {useState} from 'react';
import BgPaws from '../components/BgPaws';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListPets from '../components/pets/ListPets';
import colors from '../utils/colors';
import {getPetPosts} from '../services/petServices';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import SearchPets from '../components/pets/SearchPets';

export default function HomeScreen() {
  const navigation = useNavigation();
  const [latestPets, setLatestPets] = useState([]);
  const [showSearchResult, setShowSearchResult] = useState(false);
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
  return (
    <BgPaws opacity={0.7}>
      <View style={styles.container}>
        <Image
          source={require('../assets/logos/brand-small.png')}
          style={styles.logo}
        />
        <Icon name="bell" size={30} color="#fff" />
      </View>
      <SearchPets
        showSearchResult={showSearchResult}
        setShowSearchResult={setShowSearchResult}
      />
      {!showSearchResult ? (
        <>
          <Title text="Ultimos Agregados" textType={'TitleProfile'} />
          <View style={styles.containerList}>
            {isLoading ? (
              <ActivityIndicator size="large" color="#fff" />
            ) : (
              <ListPets pets={latestPets} />
            )}
          </View>
        </>
      ) : null}
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  containerList: {
    width: '100%',
    height: 300,
  },
  title: {
    color: '#fff',
    fontSize: 30,
  },
  logo: {marginRight: 10},
  containerFilters: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: colors.Orange,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 10,
  },
});
