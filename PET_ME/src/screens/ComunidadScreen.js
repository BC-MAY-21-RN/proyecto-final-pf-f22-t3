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
import {faPlusCircle, faFeatherPointed} from '@fortawesome/free-solid-svg-icons';
import colors from '../utils/colors';
import {useNavigation} from '@react-navigation/native';

export default function ComunidadScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [publications, setPublications] = useState([]);
  const navigation = useNavigation();

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
        <Image
          source={require('../assets/logos/Brand.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Ultimas publicaciones</Text>
        {isLoading ? (
          <ActivityIndicator size="large" color="#fff" />
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
            <FontAwesomeIcon icon={faFeatherPointed} size={40} color={colors.Orange} />
          </TouchableOpacity>
      </View>
    </BgPaws>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  list: {
    backgroundColor: colors.Gray_200,
    width: '110%',
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
