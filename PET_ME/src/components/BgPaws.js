import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import React from 'react';

const image = require('../assets/bgPaws.png');
const BgPaws = props => {
  const {children, opacity, scroll} = props;
  return (
    <ImageBackground
      source={image}
      resizeMode={'cover'}
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
      ppaddingHorizontal: 20,
      justifyContent: 'center',
    };
  },
  contentScroll: opacity => {
    return {
      backgroundColor: `rgba(37,51,52, ${opacity})`,
      ppaddingHorizontal: 20,
    };
  },
});

const content = opacity =>
  StyleSheet.compose(
    styles.content(opacity),
    styles.imgBackground,
    styles.staticContent,
  );

const contentScroll = opacity =>
  StyleSheet.compose(styles.imgBackground, styles.contentScroll(opacity));
