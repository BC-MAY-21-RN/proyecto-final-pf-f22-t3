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
            source={require('../assets/logos/Brand.png')}
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
    <View>
      <Pressable
        style={styles.containerFilters}
        onPress={() => setIsFilter(!isFilter)}>
        <Text style={styles.textFilter}>Filtros</Text>
        <FontAwesomeIcon
          icon={isFilter ? faArrowUpAZ : faArrowDownAZ}
          size={30}
          color={colors.Gray_200}
        />
      </Pressable>
      {isFilter ? <ListIcons /> : <View style={{marginBottom: 10}} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
  },
  containerList: {
    width: '100%',
    height: 300,
  },
  title: {
    color: '#fff',
    fontSize: 30,
  },
  logo: {
    width: 150,
    height: 80,
  },
  searchInput: {
    backgroundColor: colors.Gray_100,
    borderRadius: 8,
    height: 40,
    marginBottom: 10,
  },
  containerFilters: {
    flexDirection: 'row',
    marginTop: 5,
  },
  textFilter: {
    color: colors.Gray_200,
    fontSize: 20,
    marginRight: 10,
  },
});
