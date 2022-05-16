import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import BgPaws from '../components/BgPaws';
import {getPublications} from '../services/comunityServices';
import CardComunity from '../components/comunity/CardComunity';
import colors from '../utils/colors';

export default function ComunidadScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [publications, setPublications] = useState([]);

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
});
