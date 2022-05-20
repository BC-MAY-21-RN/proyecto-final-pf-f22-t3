import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import BgPaws from '../components/BgPaws';
import {getPublications} from '../services/comunityServices';
import CardComunity from '../components/comunity/CardComunity';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faFeatherPointed} from '@fortawesome/free-solid-svg-icons';
import colors from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

export default function ComunidadScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [publications, setPublications] = useState([]);
  const navigation = useNavigation();

  useFocusEffect(
    React.useCallback(() => {
      const getData = async () => {
        setIsLoading(true);
        const res = await getPublications();
        setIsLoading(false);
        setPublications(res);
      };
      getData().catch(console.error);
    }, []),
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await getPublications();
        setPublications(res);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <BgPaws opacity={0.2}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/logos/Brand.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>Ultimas publicaciones</Text>
        </View>
        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color={colors.Orange} />
          </View>
        ) : (
          <View style={styles.list}>
            <FlatList
              data={publications}
              keyExtractor={publications => publications.id}
              renderItem={({item}) => (
                <CardComunity
                  publication={item}
                  contentContainerStyle={styles.list}
                />
              )}
            />
          </View>
        )}
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            navigation.navigate('AddPublication');
          }}>
          <FontAwesomeIcon
            icon={faFeatherPointed}
            size={40}
            color={colors.Orange}
          />
        </TouchableOpacity>
      </View>
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading: {
    backgroundColor: colors.Gray_200,
    width: '110%',
    marginBottom: 10,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.Gray_300,
    width: '110%',
    height: '10%',
    paddingLeft: 20,
    paddingRight: 20,
  },
  logo: {
    width: 80,
    height: 50,
  },
  title: {
    color: colors.Gray_500,
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  list: {
    backgroundColor: colors.Gray_200,
    width: '110%',
    marginBottom: 10,
  },
  touchableOpacity: {
    position: 'absolute',
    left: '84%',
    bottom: 25,
    flexDirection: 'row',
    backgroundColor: colors.Gray_500,
    padding: 12,
    borderRadius: 50,
    borderColor: colors.Orange,
    borderWidth: 2,
  },
});
