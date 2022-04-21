import {StyleSheet, Text} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Title = props => {
  const {text, textType} = props;
  return <Text style={textType === 'subTitle' ? subTitle : title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  general: {
    textAlign: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 30,
    fontFamily: 'BebasNeueBold',
    color: colors.Gray_100,
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_200,
  },
});

const title = StyleSheet.compose(styles.general, styles.title);
const subTitle = StyleSheet.compose(styles.general, styles.subTitle);
