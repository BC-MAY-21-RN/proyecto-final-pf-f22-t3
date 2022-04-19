import {StyleSheet, View, ImageBackground} from 'react-native';
import React from 'react';

const image = require('../assets/bgPaws.png');
const BgPaws = props => {
  const {children, opacity} = props;
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.imgBackground}>
      <View style={content(opacity)}>{children}</View>
    </ImageBackground>
  );
};

export default BgPaws;

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  content: opacity => {
    return {
      backgroundColor: `rgba(37,51,52, ${opacity})`,
      paddingHorizontal: 20,
      justifyContent: 'center',
    };
  },
});

const content = opacity =>
  StyleSheet.compose(styles.imgBackground, styles.content(opacity));
