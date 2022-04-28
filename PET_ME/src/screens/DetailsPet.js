import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Carousel from '../components/Carousel_Image';

const DetailsPet = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContent}>
        <Carousel />
      </View>
      <View style={styles.details}>
        <Text>asa</Text>
      </View>
    </View>
  );
};

export default DetailsPet;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
  },
  imageContent: {
    flex: 2,
  },
  details: {
    flex: 4,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: '#F3FBF1',
    marginTop: -20,
    padding: 20,
    flexDirection: 'column',
  },
});
