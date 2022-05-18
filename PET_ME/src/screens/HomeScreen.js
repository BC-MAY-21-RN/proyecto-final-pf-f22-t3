import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  Text,
  Pressable,
} from 'react-native';

import React, {useState} from 'react';
import BgPaws from '../components/BgPaws';
import Title from '../components/Title';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListPets from '../components/pets/ListPets';
import ListIcons from '../components/pets/ListIcons';
import colors from '../utils/colors';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowDownAZ, faArrowUpAZ} from '@fortawesome/free-solid-svg-icons';
import {getPetPosts} from '../services/petServices';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

export default function HomeScreen() {
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
  return (
    <BgPaws opacity={0.7}>
      <ScrollView horizontal={false}>
        <View style={styles.container}>
          <Image
            source={require('../assets/logos/brand-small.png')}
            style={styles.logo}
          />
          <Icon name="bell" size={30} color="#fff" />
        </View>
        <View style={styles.searchInput}>
          <TextInput placeholder="Buscar" />
        </View>
        <ListFilters />
        <Title text="Ultimos Agregados" textType={'TitleProfile'} />
        <View style={styles.containerList}>
          <ListPets pets={latestPets} />
        </View>
        {/* <Title text="Favoritos" />
        <View style={styles.containerList}>
          <ListPets />
        </View> */}
      </ScrollView>
    </BgPaws>
  );
}

function ListFilters() {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <View style={{alignItems: 'flex-end'}}>
      <Pressable
        style={styles.containerFilters}
        onPress={() => setIsFilter(!isFilter)}>
        <Text style={styles.textFilter}>Filtros</Text>
        <FontAwesomeIcon
          icon={isFilter ? faArrowUpAZ : faArrowDownAZ}
          size={20}
          color={colors.Gray_100}
        />
      </Pressable>
      {isFilter ? <ListIcons /> : <View style={{marginBottom: 5}} />}
    </View>
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
  searchInput: {
    backgroundColor: colors.Gray_100,
    borderWidth: 1,
    borderColor: colors.Gray_300,
    borderRadius: 25,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
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
  textFilter: {
    color: colors.Gray_100,
    fontSize: 20,
    marginRight: 10,
    fontFamily: 'ArchivoNarrow-Regular',
  },
});
