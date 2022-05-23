import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import Title from './Title';

const NotFoundResults = ({style}) => {
  return (
    <View style={style}>
      <View style={styles.notFoundContainer}>
        <Image
          source={require('../assets/img/notFound.png')}
          style={styles.imgNoFound}
        />
        <Title text="No se encontraron resultados" textType={'TitleProfile'} />
      </View>
    </View>
  );
};

export default NotFoundResults;

const styles = StyleSheet.create({
  imgNoFound: {width: 270, height: 156},
  notFoundContainer: {alignItems: 'center'},
});
