import {StyleSheet, Text, Pressable} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Title = props => {
  const {text, textType, option} = props;
  return (
    <Text
      style={
        textType === 'title'
          ? title
          : textType === 'subTitle'
          ? subTitle
          : textType === 'TitleProfile'
          ? TitleProfile
          : subTitleProfile
      }>
      {text}
      {props.option ? (
        <Pressable onPress={() => console.log(`ir a ${props.option}`)}>
          <Text style={styles.option}>{option}</Text>
        </Pressable>
      ) : null}
    </Text>
  );
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
    width: '100%',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_200,
    width: '100%',
  },
  TitleProfile: {
    fontSize: 20,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.White,
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 0,
    width: '100%',
  },
  subTitleProfile: {
    fontSize: 15,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.White,
    textAlign: 'left',
    paddingTop: 0,
    width: '80%',
  },
  option: {
    fontSize: 19,
    fontFamily: 'ArchivoNarrow-Regular',
    color: colors.Gray_100,
    marginLeft: 5,
    fontWeight: 'bold',
    top: 5,
  },
});

const title = StyleSheet.compose(styles.general, styles.title);
const subTitle = StyleSheet.compose(styles.general, styles.subTitle);
const TitleProfile = StyleSheet.compose(styles.TitleProfile);
const subTitleProfile = StyleSheet.compose(styles.subTitleProfile);
