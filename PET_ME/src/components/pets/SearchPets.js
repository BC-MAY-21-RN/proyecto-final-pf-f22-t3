import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import colors from '../../utils/colors';
import {faArrowDownAZ, faArrowUpAZ} from '@fortawesome/free-solid-svg-icons';
import ListIcons from './ListIcons';
import RNBounceable from '@freakycoder/react-native-bounceable';
import {getPetWithFilters} from '../../services/petServices';
import ListPets from './ListPets';
import Title from '../Title';

const SearchPets = ({showSearchResult, setShowSearchResult}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    petgender: [],
    petsize: [],
    pettype: [],
  });

  useEffect(() => {
    if (searchText.length > 2) {
      setShowSearchResult(true);
      const fetchData = async () => {
        const data = await getPetWithFilters(searchText, searchFilters);
        setSearchResult(data);
      };
      fetchData().catch(console.error);
    } else {
      setShowSearchResult(false);
    }
  }, [searchText, searchFilters]);
  return (
    <>
      <View style={styles.searchInput}>
        <TextInput
          placeholder="Busca por ubicacion"
          onChangeText={setSearchText}
          value={searchText}
        />
      </View>
      <ListFilters setSearchFilters={setSearchFilters} />
      {showSearchResult ? (
        searchResult.length > 0 ? (
          <>
            <Title text="Resultados de la busqueda" textType={'TitleProfile'} />
            <View style={styles.containerList}>
              <ListPets pets={searchResult} />
            </View>
          </>
        ) : (
          <View style={styles.notFoundContainer}>
            <Image
              source={require('../../assets/img/notFound.png')}
              style={styles.imgNoFound}
            />
            <Title
              text="No se encontraron resultados"
              textType={'TitleProfile'}
            />
          </View>
        )
      ) : null}
    </>
  );
};

export default SearchPets;

function ListFilters({setSearchFilters}) {
  const [isFilter, setIsFilter] = useState(false);
  return (
    <View style={{alignItems: 'flex-end'}}>
      <RNBounceable
        style={styles.containerFilters}
        onPress={() => setIsFilter(!isFilter)}>
        <Text style={styles.textFilter}>Filtros</Text>
        <FontAwesomeIcon
          icon={isFilter ? faArrowUpAZ : faArrowDownAZ}
          size={20}
          color={colors.Gray_100}
        />
      </RNBounceable>
      {isFilter ? (
        <ListIcons setSearchFilters={setSearchFilters} />
      ) : (
        <View style={{marginBottom: 5}} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
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
  containerList: {
    width: '100%',
    height: 300,
  },
  textFilter: {
    color: colors.Gray_100,
    fontSize: 20,
    marginRight: 10,
    fontFamily: 'ArchivoNarrow-Regular',
  },
  notFoundContainer: {alignItems: 'center'},
  imgNoFound: {width: 270, height: 156},
});
