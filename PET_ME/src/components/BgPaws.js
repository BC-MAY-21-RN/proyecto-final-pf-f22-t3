import {StyleSheet, View, ImageBackground, ScrollView} from 'react-native';
import React from 'react';

const image = require('../assets/bgPaws.png');
const BgPaws = props => {
  const {children, opacity, scroll, noPadding} = props;
  return (
    <ImageBackground
      source={image}
      resizeMode={'cover'}
      style={styles.imgBackground}>
      {scroll ? (
        <ScrollView style={contentScroll(opacity, noPadding)}>
          {children}
        </ScrollView>
      ) : (
        <View style={content(opacity, noPadding)}>{children}</View>
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
  content: (opacity, noPadding) => {
    return {
      backgroundColor: `rgba(37,51,52, ${opacity})`,
      paddingHorizontal: noPadding ? 0 : 20,
      justifyContent: 'center',
    };
  },
  contentScroll: (opacity, noPadding) => {
    return {
      backgroundColor: `rgba(37,51,52, ${opacity})`,
      paddingHorizontal: noPadding ? 0 : 20,
    };
  },
});

const content = (opacity, noPadding) =>
  StyleSheet.compose(
    styles.content(opacity, noPadding),
    styles.imgBackground,
    styles.staticContent,
  );

const contentScroll = (opacity, noPadding) =>
  StyleSheet.compose(
    styles.imgBackground,
    styles.contentScroll(opacity, noPadding),
  );
