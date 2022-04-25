import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import React from 'react';

const image = require('../assets/bgPaws.png');
const BgPaws = props => {
  const {children, opacity, scroll} = props;
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.imgBackground}>
      {scroll ? (
        <ScrollView style={contentScroll(opacity)}>{children}</ScrollView>
      ) : (
        <View style={content(opacity)}>{children}</View>
      )}
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
    };
  },
  staticContent: {
    justifyContent: 'center',
    backgroundColor: 'red',
  },
});

const content = opacity =>
  StyleSheet.compose(
    styles.imgBackground,
    styles.content(opacity),
    styles.staticContent,
  );

const contentScroll = opacity =>
  StyleSheet.compose(styles.imgBackground, styles.content(opacity));
